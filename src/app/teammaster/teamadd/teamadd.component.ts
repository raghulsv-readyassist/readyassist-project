import { Component, OnInit } from '@angular/core';
import { TeamaddService } from 'src/app/shared/teamadd.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teamadd',
  templateUrl: './teamadd.component.html',
  styleUrls: ['./teamadd.component.css']
})
export class TeamaddComponent implements OnInit {

  constructor(public service: TeamaddService,private toaster: ToastrService) { }

  ngOnInit(): void {
    this.resetFrom();
  }
  resetFrom(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formdata={
      name: '',
      description: '',
    }
  }
  onSubmit(form:NgForm){
    this.insertRecord(form);

  }
  insertRecord(form:NgForm){

    this.service.postTeam(form.value).subscribe(res => {
      this.toaster.success('team added sucessfully');
      this.resetFrom(form);
      this.service.refreshList();
      
    });

  }
}
