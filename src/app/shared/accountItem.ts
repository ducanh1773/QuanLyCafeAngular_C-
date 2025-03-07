export type accountItem ={
    id : number,
    userName : string,
    email : string ,
    phoneNumber : string,
    address : string , 
    password : string,
    creatAt : Date,
    Status : boolean , 
    deleted : boolean,
}

export type accountItemAdd = {
    UserName : string,
    Email : string ,
    PhoneNumber : string,
    Address : string , 
    Password : string,
    // creatAt : Date,
    Status : boolean , 
    Deleted : boolean,
}