import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map } from 'rxjs';

@Injectable(
    { providedIn : 'root' }
    )

export class HttpHandlerService {

    apiUrl = 'https://angtask3-default-rtdb.asia-southeast1.firebasedatabase.app/sections.json';

    constructor( private httpCl : HttpClient ){
        
    }

    fetchSectionsBehSub : BehaviorSubject<any> = new BehaviorSubject('initial value');

    postSection(newSec : any){
        return this.httpCl.post(this.apiUrl,newSec);
    }

    getSections(){
        return this.httpCl.get(this.apiUrl)
            .pipe( map( ( rwDt : any ) => {
                    let emptyArr = [];
                    for ( let rw in rwDt ) {
                        emptyArr.push({...rwDt[rw], rw});
                    }
                    this.fetchSectionsBehSub.next(emptyArr);
                    return emptyArr;
            } ) )
    }

}