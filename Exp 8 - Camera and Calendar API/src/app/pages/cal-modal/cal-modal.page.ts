import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;
  
  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };
  modalReady = false;

  constructor(private modalCtrl: ModalController, private toastController: ToastController) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;      
    }, 0);
  }

  async presentToast(position: 'bottom') {

    const toast = await this.toastController.create({
      message: 'Event added successfylly !',
      duration: 2000,
      position: position
    });

    await toast.present();

  }

  
  save() {    
    this.modalCtrl.dismiss({event: this.event})
    this.presentToast('bottom');
  }
  
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {    
    this.event.startTime = new Date(ev.selectedTime);
  }

  close() {
    this.modalCtrl.dismiss();
  }
  

}
