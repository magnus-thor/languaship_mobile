import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {
  private apiUrl: string = 'https://languaship.herokuapp.com/api/v1'
  public gender: string;
  public age: number;

  constructor(private http: Http) {}

  getAll() {
    return this.http.get(this.apiUrl+'/v1/users' )
                    .map((response: Response) => response.json())
  }

    //   {
    //     id: 1, type: "users", attributes: {
    //       name: "Homer Simpson",
    //       city: "Springfield",
    //       age: 40,
    //       profileImage: "http://cdn2.ubergizmo.com/wp-content/uploads/2016/02/homer-simpson.jpeg",
    //       languages: [
    //         {
    //           name: "English",
    //           isoCode: "ENG",
    //           proficiency: "native"
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     id: 2, type: "users", attributes: {
    //       name: "Super Mario",
    //       city: "Rome",
    //       age: 30,
    //       profileImage: "https://www.techprincess.it/wp-content/uploads/2018/03/TechPrincess_MAR10Day_festeggiamenti-382x420.jpg",
    //       languages: [
    //         {
    //           name: "Italian",
    //           isoCode: "ITA",
    //           proficiency: "native"
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     id: 3, type: "users", attributes: {
    //       name: "Obelix",
    //       city: "Paris",
    //       age: 25,
    //       profileImage: "http://www.asterix.com/imgs/perso3-3.png",
    //       languages: [
    //         {
    //           name: "French",
    //           isoCode: "FR",
    //           proficiency: "native"
    //         }
    //       ]
    //     }
    //   },
}
