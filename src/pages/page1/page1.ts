import { Component,  } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ServiceStatus } from '../../entities/ServiceStatus';
import { processMonitorService } from '../../services/processMonitorService';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Loading } from 'ionic-angular/components/loading/loading';

@Component({
    selector: 'page-page1',
  templateUrl: 'page1.html'

})
export class Page1 implements OnInit {

  _volumenOn: number = 0;
  public _today = new Date();
  public event = {   month: this._today.toISOString()  }

  public serviceStatusResult: ServiceStatus[];

  constructor(public navCtrl: NavController, private _processService: processMonitorService, public loadingCtrl: LoadingController) {
    }

    onLink(url: string) {
        window.open(url);
    }

  getServiceStatus() {
    console.log("pase");
    console.log(this.event);
    this._processService.getServiceStatus(this.event.month).subscribe(serviceResult => {this.serviceStatusResult = serviceResult,console.log(this.serviceStatusResult) });
  }

  getServiceDetail(serviceId: number, serviceCode: string)
  {

    this.navCtrl.push('ServiceDetailPage', {_serviceId:serviceId , _serviceCode: serviceCode, _selectedDate:this.event.month}, {animate:true, direction:'forward'})
  }
  ngOnInit()
  {
    this.presentLoading();
    
  }


  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Espere por favor..."
    });
    loader.present();
    this._processService.getServiceStatus(this.event.month)
      .subscribe(serviceResult => { this.serviceStatusResult = serviceResult, loader.dismiss(), console.log(this.serviceStatusResult) });
    
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this._processService.getServiceStatus(this.event.month)
      .subscribe(serviceResult => { this.serviceStatusResult = serviceResult, refresher.complete(), console.log(this.serviceStatusResult) });
  }

  turnVolumenOnOff()
  {

//    console.log(this._today.toISOString())
  //  console.log(this._volumenOn);
   // if (this._volumenOn == 1) { this._volumenOn = 0 } else { this._volumenOn = 1 }
    this._volumenOn == 1 ? this._volumenOn = 0 : this._volumenOn = 1;
  }
}
