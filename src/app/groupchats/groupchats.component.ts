import { Component, OnInit } from '@angular/core';
import { GroupchatService } from '../groupchat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-groupchats',
  templateUrl: './groupchats.component.html',
  styleUrls: ['./groupchats.component.css']
})
export class GroupchatsComponent implements OnInit {
  id: any;
  groupList: any;
  newgroup: FormGroup;

  fetchGroups() {
    this.groups.loadGroups(this.id).then(
      response => this.groupList = response
    ).catch(
      error => alert(error['ERROR'])
    );
  }

  enter(groupname: string) {
    this.router.navigate(['/CConnect/' + this.id + '/Groupchats/' + groupname]);
  }

  addGroup() {
    this.groups.newGroup(this.newgroup.value, this.id);
    this.newgroup.reset();
    this.fetchGroups();
  }

  constructor(private groups: GroupchatService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchGroups();
    this.newgroup = this.fb.group({
      groupname: ['', [
        Validators.required
      ]]
    });
  }

}
