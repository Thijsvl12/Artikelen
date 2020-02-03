import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Artikel } from '../models/artikel.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sApi = "http://localhost:3001"
  constructor(private http: HttpClient) { }

  getArtikelen(req = {}): Observable<Artikel[]>{
    // return  this.http.post(this.sApi+'/sArtikel', {}).pipe(map((res: Response)=> res['docs'].pipe(map((artikel:Artikel)=> new Artikel(artikel.sType).deserialize(artikel)))))
    return this.http.post(this.sApi + '/sArtikel', {}).pipe(map((res: Response)=> res['docs'].map((artikel)=> new Artikel(artikel.sType).deserialize(artikel))))
  }
}
