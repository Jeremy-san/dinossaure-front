import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DinoComponent } from '../composants/dino/dino.component';

@Injectable({
  providedIn: 'root'
})
export class DinossaureDatasService {

  // Route to back

  private basePath = 'http://localhost:3000';
  dinoFromObject: Array<DinoComponent> = [];

  constructor(private http: HttpClient) { }

  addDinossaureType(): Observable<any> {
    return this.http.get<any>(`${this.basePath}/dinossaure` );
  }
  PutDinossaureType() {
    return this.http.post( `${this.basePath}/dinossaure`, this.dinoFromObject, { responseType: 'text'});
  }

}
