import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
 userId : string = '';
 userDetails : any;
 editUserForm: FormGroup = new FormGroup ({});
 dataLoaded : any;
  constructor(private activatedRoute : ActivatedRoute , 
    private userService : UserService,
    private formBuilder : FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data =>{
      this.userId = data['id'];
    });

    if(this.userId !== ''){
      //to view user
      this.userService.viewUsers(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails , data);
      // build the edit form
        this.editUserForm = this.formBuilder.group({
          'username' : new FormControl(this.userDetails.username),
          'email' : new FormControl(this.userDetails.email)
        }) 
        this.dataLoaded = true;         
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
 updateUser(){
   this.userService.updateUser(this.userId,this.editUserForm.value).subscribe(data => {
   this._snackBar.open("User updated Successfully");
  },err =>{
    this._snackBar.open("User created Successfully");
  })
}
}
 