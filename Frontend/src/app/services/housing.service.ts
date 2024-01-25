import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { IPropertyInterface } from '../property/iproperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperites(): Observable<IPropertyInterface[]>{
    return this.http.get<IPropertyInterface[]>('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IPropertyInterface> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
