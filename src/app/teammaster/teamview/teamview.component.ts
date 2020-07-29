import { Component, OnInit } from '@angular/core';
import { TeamaddService } from 'src/app/shared/teamadd.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teamview',
  templateUrl: './teamview.component.html',
  styleUrls: ['./teamview.component.css']
})
export class TeamviewComponent implements OnInit {

  constructor(public service: TeamaddService,private toaster: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  onDelete(id:number)
{
  this.service.deleteTeam(id).subscribe(res => {
    this.service.refreshList()
    this.toaster.warning('Team Deleted sucessfully');
  })
}
}
