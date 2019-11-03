import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DinoComponent } from '../composants/dino/dino.component';
import { DinoClass } from '../class/dinoClass';

@Injectable({
  providedIn: 'root'
})
export class DinossaureDatasService {

  dino: DinoClass[];

  // Route to back

  private basePath = 'http://localhost:3000';
  dinoFromObject: Array<DinoComponent> = [];

  constructor(private http: HttpClient) { }

  addDinossaureType(): Observable<DinoClass[]> {
    return this.http.get<any>(`${this.basePath}/dinossaure` ).pipe();
  }
  PutDinossaureType() {
    return this.http.post( `${this.basePath}/dinossaure`, this.dinoFromObject, { responseType: 'text'});
  }

    //////// Save methods //////////

  /** POST: add a new dino to the server */
  addHero(dino: DinoClass): Observable<DinoClass> {
    return this.http.post<DinoClass>(this.basePath, dino).pipe();
  }

}
