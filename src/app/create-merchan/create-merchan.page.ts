import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchandiserService } from '../merchandiser/merchandiser.service';

@Component({
  selector: 'app-create-merchan',
  templateUrl: './create-merchan.page.html',
  styleUrls: ['./create-merchan.page.scss'],
})
export class CreateMerchanPage implements OnInit {

  constructor(private merServ: MerchandiserService, private router: Router) { }

  ngOnInit() {
  }

  createMer(name, contact){
    this.merServ.addMer(name.value, contact.value)
    this.router.navigate(['/merchandiser'])
  }

}
