import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {processMonitorService } from '../../services/processMonitorService';
import {InterfaseStatus } from '../../entities/InterfaseStatus';
/**
 * Generated class for the ServiceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-detail',
  templateUrl: 'service-detail.html',
})
export class ServiceDetailPage implements OnInit {

  public serviceId: number;
  public serviceCode: string;
  public selectedDate: string;
  public interfaseResult: InterfaseStatus[]; 

    constructor(public navCtrl: NavController, public navParams: NavParams, public processService: processMonitorService)
  {
    this.serviceId = navParams.get('_serviceId');
    this.serviceCode = navParams.get('_serviceCode');
    this.selectedDate = navParams.get('_selectedDate');    
  }

  ngOnInit() {

    this.processService.getInterfaseStatus(this.serviceId, this.selectedDate).subscribe(interfaseQuerry => {this.interfaseResult=interfaseQuerry,console.log(this.interfaseResult) });

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.processService.getInterfaseStatus(this.serviceId, this.selectedDate)
      .subscribe(interfaseQuerry => { this.interfaseResult = interfaseQuerry; refresher.complete(); console.log(this.interfaseResult) });

  }

  getEvent(source: string, event: string) {

    this.navCtrl.push('EventDetailPage', { _source: source, _event: event, _selectedDate: this.selectedDate }, { animate: true, direction: 'forward' })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceDetailPage');
  }

}
