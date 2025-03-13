import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Route, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { productItem } from '../../../productItem';
import { productOrdertItemComponent } from '../ProductOrderItem/productOrder.component';
import { ProductService } from '../../../../../services/ProductService';
import { Subscription } from 'rxjs';
import { OrderService } from '../../../../../services/OrderService';
import { FundService } from '../../../../../services/FundsService';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'product-item-component-layout',
    imports: [
        RouterLink,

        NgFor,
        productOrdertItemComponent,
        FormsModule

    ],
    templateUrl: './addProduct.component.html',
    styleUrl: './addProduct.component.css',
    standalone: true,

})
export class AddProductComponent implements OnInit {
    @Output() dataEvent = new EventEmitter<number>();
    orderData: { productId: number; quantityProduct: number; stock: { id: number; quantity: number }[] }[] = [];
    products: productItem[] = [];
    getProductApi: Subscription = new Subscription();
    funds: any[] = [];  // Danh sách Fund

    selectedFund: string = '';
    constructor(private productService: ProductService, private orderService: OrderService, private fundService: FundService) {
    }




    ngOnInit(): void {
        this.getProductApi = this.productService
            .getProduct()
            .subscribe((response: productItem[]) => {
                this.products = response.map(item => ({
                    id: item.id,
                    name: item.name,
                    detail: item.detail,
                    price: item.price,
                    Category_Name: item.Category_Name,
                    deleted: item.deleted,
                    imageProduct: item.imageProduct,
                    status: item.status

                }))

            },
                (error) => {
                    console.error("Lỗi khi lấy danh sách sản phẩm")
                }

            )

        this.fundService.getFundList().subscribe(
            (response: any[]) => {
                this.funds = response;
            },
            (error) => {
                console.error('Lỗi khi lấy danh sách quỹ (Fund)', error);
            }
        );
    }
    

    handleDataEvent(event: { productId: number; quantityProduct: number; stock: { id: number; quantity: number }[] }) {
        console.log('Dữ liệu nhận được:', event);
        this.orderData.push(event);
    }
    updatePaymentMethod(fundName: string) {
        this.selectedFund = fundName;
    }




    // Gửi đơn hàng khi click "Thanh toán"
    placeOrder() {
        if (this.orderData.length === 0) {
            alert("Bạn chưa chọn sản phẩm nào!");
            return;
        }

        // Tạo danh sách sản phẩm với stockProductDtos đầy đủ
        const orderProductDtos = this.orderData.map(item => ({
            productCoffeeId: item.productId, // Đảm bảo đúng tên field
            quantityProduct: item.quantityProduct,
            stockProductDtos: item.stock ? item.stock.map(s => ({
                iD_Stock: s.id,
                quantityStock: s.quantity
            })) : [] // Đảm bảo không bị thiếu stockProductDtos
        }));

        // Kiểm tra nếu có sản phẩm nào thiếu stockProductDtos
        if (orderProductDtos.some(item => item.stockProductDtos.length === 0)) {
            alert("Có sản phẩm chưa có stockProductDtos!");
            return;
        }

        // Tạo đối tượng đơn hàng
        const orderPayload = {
            id_Account: 1, // ID tài khoản khách hàng (thay đổi nếu cần)
            timeOrder: new Date().toISOString(),
            status: true,
            deleted: false,
            orderProductDtos: orderProductDtos,
            paymentForms: [
                {
                    sumPrice: 100,
                    paymentMethod: this.selectedFund // Có thể thay đổi thành "CARD" nếu thanh toán qua thẻ
                }
            ]
        };
        console.log(this.selectedFund);

        // Gửi đơn hàng lên API
        this.orderService.addOrder(orderPayload).subscribe(
            (response) => {
                console.log("Đơn hàng đã gửi thành công:", response);
                alert("Thanh toán thành công!");
                this.orderData = []; // Xóa giỏ hàng sau khi thanh toán
            },
            (error) => {
                console.error("Lỗi khi gửi đơn hàng:", error);
                alert("Có lỗi xảy ra khi thanh toán!");
            }
        );
    }







}
