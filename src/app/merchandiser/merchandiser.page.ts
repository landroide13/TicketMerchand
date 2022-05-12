import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchandiserService } from './merchandiser.service';

@Component({
  selector: 'app-merchandiser',
  templateUrl: './merchandiser.page.html',
  styleUrls: ['./merchandiser.page.scss'],
})
export class MerchandiserPage implements OnInit {

  merchandisers = [];

  constructor(private merServ: MerchandiserService, private router: Router) { }

  ngOnInit() {
    this.merchandisers = this.merServ.getMerchandisers();
  } 

  ionViewWillEnter() {
    this.merchandisers = this.merServ.getMerchandisers();
  }
  
  createMer(){
    this.router.navigate(['/create-merchan']);
  }
 

}
