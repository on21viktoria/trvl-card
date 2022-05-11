export interface Recipient{
    countryIsoCode: string;
    companyName?: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2: string;
    stateCode?: string;
    city: string;
    postcode: string;
    email?: string;
    phone?: string;
}

export interface Order {
    orderReferenceId: string;
    customerReferenceId: string;
    currenyIsoCode: string;
}

export interface Product {
    itemReferenceId: string;
    productUid: string;
    pdfUrl: string;
    quantity: number;
}