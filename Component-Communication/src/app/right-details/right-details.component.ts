import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-right-details',
  templateUrl: './right-details.component.html',
  styleUrls: ['./right-details.component.css']
})
export class RightDetailsComponent {
  dataArray: ProjectDatum[] = []//['Client Name', 'LOB', 'Project Year', 'Project ID', 'Project Name', 'Service'];

  constructor(private appService: AppService)
  {

  }

  ngOnInit()
  {
    this.appService.subscriber$.subscribe(data => this.dataArray = data as ProjectDatum[]);
    console.log(this.dataArray)
  }

  updateProjectData(name: string)
  {
    var trueValue = this.dataArray.find(item => item.name == name);
    if(trueValue)
    {
      trueValue.isChecked = !trueValue?.isChecked;
    }
    this.dataArray = this.dataArray.filter(x => x.isChecked == true);
    console.log(this.dataArray)
  }
}

export interface ProjectDatum{
  name: string;
  isChecked: boolean;
}

