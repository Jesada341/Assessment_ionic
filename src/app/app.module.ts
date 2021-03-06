import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { FormPage } from '../pages/form/form';
import { ShowassessPage } from '../pages/showassess/showassess';
import { DoassessPage } from '../pages/doassess/doassess';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ShowreportallPage } from '../pages/showreportall/showreportall';
import { LoginProvider } from '../providers/login/login';
import { ShowreportallProvider } from '../providers/showreportall/showreportall';
import { HttpModule } from '@angular/http';
import { ShowscorePage } from '../pages/showscore/showscore';
import { ShowscoreProvider } from '../providers/showscore/showscore';
import { ListNameAssessPage } from '../pages/list-name-assess/list-name-assess';
import { ListTeachFormPage } from '../pages/list-teach-form/list-teach-form';
import { DaassessProvider } from '../providers/daassess/daassess';
import { ListDoassessPage } from '../pages/list-doassess/list-doassess';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShowreportallPage,
    AccountPage,
    LoginPage,
    FormPage,
    ShowscorePage,
    ShowassessPage,
    ListNameAssessPage,
    ListTeachFormPage,
    DoassessPage,
    ListDoassessPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShowreportallPage,
    AccountPage,
    LoginPage,
    FormPage,
    ShowscorePage,
    ShowassessPage,
    ListNameAssessPage,
    ListTeachFormPage,
    DoassessPage,
    ListDoassessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    ShowreportallProvider,
    ShowscoreProvider,
    DaassessProvider
  ]
})
export class AppModule {}
