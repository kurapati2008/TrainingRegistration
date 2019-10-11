import { Component, OnInit } from '@angular/core';

import { TrainingService } from '../shared/training.service'
import { Training } from '../shared/Training.model';
import { ToastrService } from 'ngx-toastr';    
@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  _postsArray: Training[];

  constructor(private trainingService: TrainingService,private toastr : ToastrService) { 
  }

  ngOnInit() {
    
     this.trainingService.getTrainingList()
        .subscribe(
            resultArray => 
            {
              this._postsArray = resultArray
            },
            error => console.log("Error :: " + error));

  }

  showForEdit(training: Training) {

    this.trainingService.selectedTraining = Object.assign({}, training);

   // console.log(this.trainingService.selectedTraining);
  }
 


 



}
