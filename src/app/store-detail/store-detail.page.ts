import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { StoreServiceService } from '../store/store-service.service';
import { Store } from '../store/store.model';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.page.html',
  styleUrls: ['./store-detail.page.scss'],
})
export class StoreDetailPage implements OnInit {

  store: Store;

  constructor(private acRoute: ActivatedRoute, private alertCtr: AlertController,
              private storeServ: StoreServiceService, private router: Router) { }

  ngOnInit() {
    this.acRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('storeId');
      this.store = this.storeServ.getStore(Number(id))
    })
  }

  async deleteStore(){   
    const alertEle = await this.alertCtr.create({
      header: "Are you sure, you want delete it ?",
      buttons:[
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.storeServ.deleteStore(Number(this.store.id))
            console.log('Deleted !')
            this.router.navigate(['/store'])
          }
        }
      ]
    })
   await alertEle.present();
  }

}
