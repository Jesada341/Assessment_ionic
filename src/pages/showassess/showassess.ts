import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListDoassessPage } from '../list-doassess/list-doassess';
import { LoginProvider } from './../../providers/login/login';
/**
 * Generated class for the ShowassessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showassess',
  templateUrl: 'showassess.html',
})
export class ShowassessPage {
  type: number;
  assess: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loginCtrl: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowassessPage');
    this.loginCtrl.Show_assess()
    .then((data: any) => {
      if (data != '') {
        console.log(data);
        this.assess = data;
      } else {
        this.assess = '';
      }
    });
  }

  doAssess(type){
    console.log(type);
    this.navCtrl.push(ListDoassessPage,{
      Type: type
    });
  }

}
