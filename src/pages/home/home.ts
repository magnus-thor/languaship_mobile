import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;


  // constructor(public navCtrl: NavController) {


  constructor(public navCtrl: NavController, private usersProvider: UsersProvider) {

    this.users = usersProvider.getAll();
//     this.users = this.getUsers();
//

}
//
//   getUsers(): void{
//     this.usersProvider.getAll()
//     .subscribe(users =>{
//     this.users = users
//     })
  }
// }
