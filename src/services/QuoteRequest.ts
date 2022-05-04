export let request = require('request');

// === Define headers ===
let headers = {
    'Content-Type' : 'application/json',
    'X-API-KEY' : '{{2fa89bee-7e13-4be1-a7cc-ecf1359f4234-ed2828f6-8dc3-4cbd-9d59-332587696d7c:1e8d72b3-e967-4137-b5d7-25c41d95eba5}}'
};

// === Set-up quote request ===
let quoteUrl = 'https://api.gelato.com/v2/quote';
let quoteJson = {
"order": {
    "orderReferenceId": "{{MyOrderId}}",
    "customerReferenceId": "{{MyCustomerId}}",
    "currencyIsoCode": "USD"
},
"recipient": {
    "countryIsoCode": "US",
    "companyName": "Example",
    "firstName": "Paul",
    "lastName": "Smith",
    "addressLine1": "451 Clarkson Ave",
    "addressLine2": "Brooklyn",
    "stateCode": "NY",
    "city": "New York",
    "postcode": "11203",
    "email": "apisupport@gelato.com",
    "phone": "123456789"
},
"products": [
    {
        "itemReferenceId": "{{MyItemId}}",
        "productUid": "cards_pf_bx_pt_110-lb-cover-uncoated_cl_4-4_hor",
        "pdfUrl": "https://s3-eu-west-1.amazonaws.com/developers.gelato.com/product-examples/test_print_job_BX_4-4_hor_none.pdf",
        "quantity": 100
    }
]
};

// === Send quote request ===
request.post({
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
    request.post({
        url:        orderCreateUrl,
        headers:    headers,
        body:       JSON.stringify(orderCreateJson)
    }, function(error: any, response: any, body: any){
        console.log(body);
    });
});