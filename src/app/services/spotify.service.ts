import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService{
  token:any;
  var:string="Bearer";
  constructor(private http:HttpClient) {

    this.getToken().then(r=> this.token = r['access_token']);
    console.log("Spotify Service")
    console.log("Fuera del get token" + this.token)
  }


  public getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `${this.var} ${this.token}`,
    });
    console.log(" Fuera del gettoken dentro del get query donde lo necesito" +this.token)
    return this.http.get(url,{headers});
  }

  //JAJAJAJA NO ENTIENDO BIEN EL CODIGO XDDDDD  que no entiendes?
  // LO QUE PASA ES QUE ME ENREDO MUCHO, mira si me permites
  // podriamos empezar hacer el codigo de 0, va quedar mucho mas limpio
  // pero ahora estoy pendiente con una "pega"
  // que es pega xd
  // Que estoy trabajando para un cliente, y me voy atrasar mucho si te arreglo esto
  //ah bueno no hay problema cuando tengas tiempo me ayudas dejalo asi yo lo devuelvo a su estado normal
  // oka1
  getNewRealease(){/*
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + token
    });*/

    return this.getQuery('browse/new-releases')
      .pipe(map(data=>{
          return data['albums'].items;
         }))

    //return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      // .pipe(map(data=>{
      //
      //   return data['albums'].items;
      // }))
  }
  getArtistas(termino:string){

    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=15`)

    // this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=15`, {headers});
  }
  getArtista(idx:string){
    return this.getQuery(`artists/${idx}`);
    /*  .pipe(map(data=>{
        return data['artists'].items;
      }))*/
  }
  getTopTracks(idx:string){
    return this.getQuery(`artists/${idx}/top-tracks?country=us`)
      .pipe(map(data =>data['tracks']));
  }

  async getToken(){
    return await this.http.get('https://spotify-get-token.herokuapp.com/spotify/a489ec36708347ce8ba25672404d8be7/cb6e844df09a4cc0a75ef18198b4c2a0').toPromise();
  }


}
