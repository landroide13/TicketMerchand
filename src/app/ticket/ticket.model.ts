export interface Ticket{
    id: number;
    title: string;
    address: string;
    store: string;
    merchId: number;
    storeId: number;
    comments?:string;
}