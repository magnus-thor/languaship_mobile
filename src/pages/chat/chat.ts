import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  chats: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.chats = [
      { id: 1, type: "chats", attributes: {
        name: "Legolas",
        profileImage: "http://filmz.dk/files/gfx/4/42416-h1342xw2000-07_2-18672-1000x671.jpg",
        title: "Hey, wanna learn Elvish?",
        snippet: "I'm a bit busy with my Fellowship of the Ring..."
        }
      },
      { id: 2, type: "chats", attributes: {
        name: "Gandalf",
        profileImage: "https://www.atmistique.gr/wp-content/uploads/2018/01/Gandalf_sir1-8s.jpg",
        title: "Hello, ready to learn some Sindarin?",
        snippet: "If you don't study, you shall not pass!"
        }
      },
      { id: 3, type: "chats", attributes: {
        name: "Frodo",
        profileImage: "https://i.pinimg.com/originals/eb/2f/6b/eb2f6b0ee037f6a932eed785985bf16c.jpg",
        title: "Hey there!",
        snippet: "I'm new in town, wanna learn Italian :)"
        }
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
}
