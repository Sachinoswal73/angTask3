import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionModel } from '../section.model';
import { HttpHandlerService } from '../httpHandler.service';

@Component({
  selector: 'app-add-sections',
  templateUrl: './add-sections.component.html',
  styleUrls: ['./add-sections.component.scss']
})

export class AddSectionsComponent implements OnInit {

  sForm3 : any;

  constructor( private httpHndlr : HttpHandlerService ){

  }

  ngOnInit(): void {

      this.sForm3 = new FormGroup({
        shdr : new FormControl('', Validators.required),
        sdtl : new FormControl('', Validators.required) 
      })

      console.log(this.sForm3);

  }


  addSec(){
      
      // console.log(this.sForm3);
      let newObj = new SectionModel(this.sForm3.value.shdr,this.sForm3.value.sdtl);

      // console.log(newObj);

      this.httpHndlr.postSection(newObj).subscribe( ( hhps : any ) => {
            // console.log('posted',hhps);
            this.httpHndlr.getSections().subscribe( ( hhgs : any ) => {
                console.log(hhgs);
            } )
      } )

      this.sForm3.reset();

  }


}
