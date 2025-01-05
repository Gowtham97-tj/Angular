import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ProjectDatum } from '../right-details/right-details.component';

@Component({
  selector: 'app-left-details',
  templateUrl: './left-details.component.html',
  styleUrls: ['./left-details.component.css']
})
export class LeftDetailsComponent {
  isTrue = false

  projectData = ['Client Name', 'LOB', 'Project Year', 'Project ID', 'Project Name', 'Service']
  projectDataJson: ProjectDatum[] = [{name: 'Client Name', isChecked: false},
    {name: 'LOB', isChecked: false},
    {name: 'Project Year', isChecked: false},
    {name: 'Project ID', isChecked: false},
    {name: 'Project Name', isChecked: false},
    {name: 'Service', isChecked: false}]

  constructor(private appService: AppService)
  {

  }

  onAccordianClick()
  {
    this.isTrue = !this.isTrue
    var trueValue = this.projectDataJson.filter(item => item.isChecked == true)
    this.appService.emitData(trueValue);
  }

  projectDetailUpdate() : void
  {
    var trueValue = this.projectDataJson.filter(item => item.isChecked == true)
    this.appService.emitData(trueValue);
  }
}
