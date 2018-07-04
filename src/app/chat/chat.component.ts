import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  id: any;
  groupname: any;
  messages: any;

  fetchMessages() {
    this.chat.messages(this.id, this.groupname).then(
      response => this.messages = response['Groupchats']
    );
  }





  constructor(private route: ActivatedRoute, private http: HttpClient,
  private chat: ChatService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.groupname = this.route.snapshot.paramMap.get('groupname');
    this.fetchMessages();
  }

}
