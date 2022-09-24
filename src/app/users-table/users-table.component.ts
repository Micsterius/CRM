import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface usersList {
  position: number;
  lastName: string;
  firstName: string;
  city: string;
}

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})

export class UsersTableComponent {
  displayedColumns: string[] = ['position', 'lastName', 'firstName', 'city'];
  dataSource: any[] = [];
  allUsers = [];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges()
      .subscribe((changes: any) => {
        console.log('received changes', changes[0]);
      //   this.putTheLastAddedUserToTheEnd(changes)
        this.dataSource = changes
      });
  }

  putTheLastAddedUserToTheEnd(changes: any) {
    for (let i = 0; i < changes.length; i++) {
      const element = changes.shift();
      this.dataSource.push(element)
    }
  }
}
