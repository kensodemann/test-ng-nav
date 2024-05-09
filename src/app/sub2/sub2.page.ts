import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.page.html',
  styleUrls: ['./sub2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButton,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
  ],
})
export class Sub2Page implements OnInit {
  constructor() {}

  ngOnInit() {}
}
