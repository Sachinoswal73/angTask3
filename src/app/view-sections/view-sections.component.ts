import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../httpHandler.service';

@Component({
  selector: 'app-view-sections',
  templateUrl: './view-sections.component.html',
  styleUrls: ['./view-sections.component.scss']
})

export class ViewSectionsComponent implements OnInit {

  rcvdArr : any;

  constructor( private httpHnlr : HttpHandlerService ){

  }

  ngOnInit(): void {
       
      this.httpHnlr.getSections().subscribe( ( hhgs : any ) => {
            // console.log('get ', hhgs );
            this.rcvdArr = hhgs;
       } ) 

       this.httpHnlr.fetchSectionsBehSub.subscribe( ( hhfsb : any ) =>{
            this.rcvdArr = hhfsb;
       } )
  }

}
