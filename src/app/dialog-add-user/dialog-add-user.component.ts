import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  birthDate: Date | any;
  loading: boolean = false;
  userId: number = 1;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.getIdOfUser()
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getIdOfUser() {
    this.firestore
      .collection('users')
      .valueChanges()
      .subscribe((changes: any) => {
        this.userId = changes.length;
      });
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    this.user.postion = this.userId + 1;
    this.firestore
      .collection('users')
      .add(this.user.toJson())
      .then((result: any) => {
        this.loading = false;
        this.closeDialog()
        console.log('adding user finish', result)
      })

  }
}
