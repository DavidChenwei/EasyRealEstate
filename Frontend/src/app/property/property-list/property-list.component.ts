import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { HousingService } from '../../services/housing.service';
import { IPropertyInterface } from '../iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})


export class PropertyListComponent {
  SellRent = 1;
  properties: Array<IPropertyInterface> = [];
  constructor (private route:ActivatedRoute, private housingService: HousingService) {}
  ngOnInit():void{
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperites(this.SellRent).subscribe(data => {
      this.properties = data;
      console.log(data)
    }, error=>{
      console.log("HttpError");
      console.log("HttpError");
    });
  }
}
