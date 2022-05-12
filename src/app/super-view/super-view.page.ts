import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-view',
  templateUrl: './super-view.page.html',
  styleUrls: ['./super-view.page.scss'],
})
export class SuperViewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createTicket(){
    this.router.navigate(['/ticket'])
  }
 
  createStore(){
    this.router.navigate(['/store'])
  }

  createMerchandiser(){
    this.router.navigate(['/merchandiser'])
  }

}
