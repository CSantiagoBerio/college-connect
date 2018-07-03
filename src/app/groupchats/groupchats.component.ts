import { Component, OnInit } from '@angular/core';
import { GroupchatService } from '../groupchat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-groupchats',
  templateUrl: './groupchats.component.html',
  styleUrls: ['./groupchats.component.css']
})
export class GroupchatsComponent implements OnInit {
  id: any;
  groupList: any;

  fetchGroups() {
    this.groups.loadGroups(this.id).then(
      response => this.groupList = response
    ).catch(
      error => alert(error['ERROR'])
    );
  }

  constructor(private groups: GroupchatService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchGroups();
  }

}
