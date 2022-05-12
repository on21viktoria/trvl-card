/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prefer-const */
import { Recipient, Order, Product } from "./utils";
export let axios = require('axios');

// const apiKey = "2fa89bee-7e13-4be1-a7cc-ecf1359f4234-ed2828f6-8dc3-4cbd-9d59-332587696d7c:1e8d72b3-e967-4137-b5d7-25c41d95eba5"

export function placeOrder(order: Order, recipient: Recipient, product: Product) {
// === Define headers ===
let headers = {
    'Content-Type' : 'application/json',
    'X-API-KEY' : '{{XXX}}'
};

// === Set-up quote request ===
let quoteUrl = 'https://api.gelato.com/v2/quote';
let quoteJson = {
"order": {
    "orderReferenceId": order.orderReferenceId,
    "customerReferenceId": order.customerReferenceId,
    "currencyIsoCode": order.currenyIsoCode
},
"recipient": {
    "countryIsoCode": recipient.countryIsoCode,
    "companyName": recipient.companyName,
    "firstName": recipient.firstName,
    "lastName": recipient.lastName,
    "addressLine1": recipient.addressLine1,
    "addressLine2": recipient.addressLine2,
    "stateCode": recipient.stateCode,
    "city": recipient.city,
    "postcode": recipient.postcode,
    "email": recipient.email,
    "phone": recipient.phone,
},
"products": [
    {
        "itemReferenceId": product.itemReferenceId,
        "productUid": product.productUid,
        "pdfUrl": product.pdfUrl,
        "quantity": product.quantity,
    }
]
} 

console.log(quoteJson)
/* 
// === Send quote request ===
axios.post({
    url:        quoteUrl,
    headers:    headers,
    body:       JSON.stringify(quoteJson)
}, function(error: any, response: any, body: any){
    // === Set-up order create request ===
    let data = JSON.parse(body);
    let promiseUid = data.production.shipments[0].promiseUid;
    let orderCreateUrl = 'https://api.gelato.com/v2/order/create';
    let orderCreateJson = {
        "promiseUid": "" + promiseUid + ""
    };

    // === Send order create request ===
    axios.post({
        url:        orderCreateUrl,
        headers:    headers,
        body:       JSON.stringify(orderCreateJson)
    }, function(error: any, response: any, body: any){
        console.log(body);
    });
}); */
} 