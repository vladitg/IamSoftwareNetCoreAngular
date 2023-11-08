import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddUserRequest } from '../models/add-user-request.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formUser: FormGroup
  titleAction: string = "Nuevo"
  buttonAction: string = "Guardar"
  listUsers: AddUserRequest[] = []
  messageErrorName: any
  messageErrorAge: any
  messageErrorEmail: any

  constructor(
    private dialogReference: MatDialogRef<AddUserComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService
  ){
    this.formUser = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  showAlert(msg: string, action: string){
    this.snackBar.open(msg,action,{
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    })
  }

  addEditUser(){
    const model: AddUserRequest = {
      name: this.formUser.value.name,
      age: this.formUser.value.age,
      email: this.formUser.value.email
    }

    this.messageErrorName = ""
    this.messageErrorAge = ""
    this.messageErrorEmail = ""

    this.userService.addUser(model).subscribe({
      next:(data) => {
        this.showAlert("Usuario creado", "Listo");
        this.dialogReference.close("Creado");
      }, error:(response) => {
        console.log(response)
        if(response.error.errors.Name){
          this.messageErrorName = response.error.errors.Name[0]
        }
        if(response.error.errors.Age){
          this.messageErrorAge = response.error.errors.Age[0]
        }
        if(response.error.errors.Email){
          this.messageErrorEmail = response.error.errors.Email[0]
        }
        this.showAlert("Usuario no creado", "Error");
      }
    })
  }

  ngOnInit(): void {
  }
}
