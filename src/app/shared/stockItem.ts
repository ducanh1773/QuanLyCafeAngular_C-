export type stockItem = {
    id: number,
    name: string,
    quantity: number,
    status: boolean,
    deleted: boolean,
    unitOfMeasure: string,
}

export type StockAdd = {
    name: string,
    quantity: number,
    status: boolean,
    deleted: boolean,
    unitOfMeasure: string,
}