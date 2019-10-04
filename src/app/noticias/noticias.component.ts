import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service'
import { card } from '../modelo/card';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
 
  cards: card[]

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
    this.apiService.getNews().subscribe((data:any)=>{
      this.cards = data;
      console.log(this.cards);
    });
  }

}
