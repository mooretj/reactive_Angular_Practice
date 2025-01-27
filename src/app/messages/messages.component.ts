import { Component, OnInit } from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {Message} from '../model/message';
import {tap} from 'rxjs/operators';
import {MessagesService} from "./messages.service";

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  showMessages = false;

  errors$: Observable<string[]>;

  constructor(public messagesService: MessagesService) {
    console.log("Created messages service...")
  }

  ngOnInit() {

    this.errors$ = this.messagesService.errors$
      .pipe(
      tap(() => this.showMessages = true),
    )

  }


  onClose() {
    this.showMessages = false;
  }

}
