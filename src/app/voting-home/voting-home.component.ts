import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voting-home',
  templateUrl: './voting-home.component.html',
  styleUrls: ['./voting-home.component.css']
})
export class VotingHomeComponent {

  userId = localStorage.getItem('userId')

  constructor(private router: Router){}

  ngOnInit(): void {
  }
  goToCreate(){
    this.router.navigate(['create-question']);

  }
  goToView(){
    this.router.navigate(['cast-vote']);

  }
  goToResults(){

    this.router.navigate(['view-results']);

  }
}
