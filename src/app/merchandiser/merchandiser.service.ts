import { Injectable } from '@angular/core';
import { Merchandiser } from './merchandiser.model';

@Injectable({
  providedIn: 'root'
})
export class MerchandiserService {

  private merchandisers: Merchandiser[] = [
    {id: 1, name: 'Tom', contact:'5555-56777'},
    {id: 2, name: 'Jerry', contact:'5555-56999'},
    {id: 3, name: 'Lucas', contact:'5553-56888'},
    {id: 4, name: 'Vinnie', contact:'5544-5889'},
  ]

  constructor() { } 

  getMerchandisers(){
    return [...this.merchandisers]
  }

  getMerchan(id: number){
    return {
      ...this.merchandisers.find(mer => {
        return mer.id === id
      })
    }
  }

  deleteMerchan(id: number){
    this.merchandisers = this.merchandisers.filter(mer => {
      return mer.id !== id 
    })
    console.log('Deleted !')
  }

  addMer(name: string, contact: string){
    this.merchandisers.push({
      id: this.merchandisers.length + 1,
      name,
      contact
    })
    console.log(this.merchandisers);
  }



}
