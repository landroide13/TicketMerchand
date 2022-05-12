import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Merchandiser } from '../merchandiser/merchandiser.model';
import { MerchandiserService } from '../merchandiser/merchandiser.service';

@Component({
  selector: 'app-merchan-detail',
  templateUrl: './merchan-detail.page.html',
  styleUrls: ['./merchan-detail.page.scss'],
})
export class MerchanDetailPage implements OnInit {

  merchandiser: Merchandiser;

  constructor(private merServ: MerchandiserService, private acRoute: ActivatedRoute,
             private alertCtr: AlertController, private router: Router) { }

  ngOnInit() {
    this.acRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('merchanId');
      this.merchandiser = this.merServ.getMerchan(Number(id))
    })
  }

  async deleteMer(){   
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
            this.merServ.deleteMerchan(Number(this.merchandiser.id))
            console.log('Deleted !')
            this.router.navigate(['/merchandiser'])
          }
        }
      ]
    })
   await alertEle.present();
  }




}
