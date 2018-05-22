import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { processMonitorService } from '../../services/processMonitorService';
import { InterfaseEvent } from '../../entities/InterfaseEvent';

/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage implements OnInit {
  eventResult: InterfaseEvent[];
  source: string;
  event: string;
  selectedDate: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl:AlertController, public _processMonitorService: processMonitorService) {
    this.source = navParams.get('_source');
    this.event = navParams.get('_event');
    this.selectedDate = navParams.get('_selectedDate');    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
  }

  ngOnInit() {

    this._processMonitorService.getInterfaseEvents(this.source, this.event, this.selectedDate)
      .subscribe(eventResults => { this.eventResult = eventResults;console.log(this.eventResult) });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this._processMonitorService.getInterfaseEvents(this.source, this.event, this.selectedDate)
      .subscribe(eventResults => { this.eventResult = eventResults; refresher.complete(); console.log(this.eventResult) });
    
  }

  doAlert(message: string) {
    let alert = this.alerCtrl.create({
      title: 'Detalle del Error',
      message: message,
      buttons: ['Ok']
    });
    alert.present()
  }

}
