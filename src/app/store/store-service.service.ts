import { Injectable } from '@angular/core';
import { Store } from './store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

private  stores: Store[] = [
    {id: 1, name: 'Warehouse', address: 'Taranaki', contact:'5555-56777'},
    {id: 2, name: 'CountDown', address: 'Willis', contact:'5555-56777'},
    {id: 3, name: 'New World', address: 'Tinakori', contact:'5555-56777'},
    {id: 4, name: 'Sprig & Ferns', address: 'Tinakori', contact:'5555-56777'},
  ]

  constructor() { }

  getStores(){
    return [...this.stores]
  }

  getStore(id: number){
    return {
      ...this.stores.find(store => {
        return store.id === id
      })
    }
  }

  deleteStore(id: number){
    this.stores = this.stores.filter(store => {
      return store.id !== id 
    })
    console.log('Deleted !')
  }

  addStore(name: string, address: string, contact: string){
    this.stores.push({
      id: this.stores.length + 1,
      name,
      address,
      contact
    })
    console.log(this.stores);
  }


}
