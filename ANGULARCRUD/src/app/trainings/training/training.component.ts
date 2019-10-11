import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { TrainingService } from '../shared/training.service'
import { Training } from '../shared/Training.model';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
   dateStart: Date;
   dateEnd: Date;
  constructor(private trainingService: TrainingService, private toastr: ToastrService) {
    
   }

  
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.trainingService.selectedTraining = {
        Id: null,
        TrainingName: '',
        StartDate: null,
        LastDate: null
      }
  }

  onSubmit(form: NgForm) {
    if (form.value.Id == null) {

      this.dateStart = new Date(form.value.StartDate);
      this.dateEnd = new Date(form.value.LastDate);
       
      if(this.dateStart > this.dateEnd)
      {
        this.toastr.info('Last date is less than start date', 'Training Register');
      }
      else
      {
        this.trainingService.postTraining(form.value)
          .subscribe(data => {
            this.resetForm(form);
            this.trainingService.getTrainingList();

            this.toastr.success('New Record Added', 'Training Register');
          })
      }
    }
    else {
        this.toastr.info('Record Updated Successfully!', 'Training Register');
    }
  }
}
