import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { HousingService } from '../../services/housing.service';
import { IPropertyInterface } from '../iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})


export class PropertyListComponent {
  properties: Array<IPropertyInterface> = [];
  constructor (private housingService: HousingService) {}
  ngOnInit():void{
    this.housingService.getAllProperites().subscribe(data => {
      this.properties = data;
      console.log(data)
    }, error=>{
      console.log("HttpError");
      console.log("HttpError");
    });
  }
}
