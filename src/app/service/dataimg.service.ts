import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interface/item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataimgService {
  private apiUrl = 'https://images-api.nasa.gov/search?q=galaxy&media_type=image'
  
  constructor(private http: HttpClient) { }

  // getData(){
  //   return this.http.get(this.apiUrl);
  // }

  getData(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.collection.items)
    );
  }

  getDataImg(): Observable<Item[]> {
    return this.http.get<{ data: Item[] }>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }
}
