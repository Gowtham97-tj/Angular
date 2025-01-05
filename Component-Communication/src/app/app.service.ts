import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ProjectDatum } from "./right-details/right-details.component";

@Injectable({providedIn: 'root'})

export class AppService{
    
    observer = new Subject();
    public subscriber$ = this.observer.asObservable();

    emitData(data: ProjectDatum[])
    {
        this.observer.next(data)
    }

}