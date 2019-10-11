import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Training} from'./training.model'

@Injectable()
export class TrainingService {
  selectedTraining : Training;
  TrainingList : Training[];
  constructor(private http : Http) { }

  postTraining(course : Training){
    var body = JSON.stringify(course);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:28750/api/Training',body,requestOptions).map(x => x.json());
  }

  getTrainingList() : Observable<Training[]> {
    return  this.http.get('http://localhost:28750/api/Training')
    .map((data : Response) =>{
      console.log(data.json() as Training[]);
      return data.json() as Training[];
    });
  }


}
