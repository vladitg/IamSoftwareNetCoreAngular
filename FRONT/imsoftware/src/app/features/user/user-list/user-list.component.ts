import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['Nombre', 'Edad', 'Email', 'Acciones'];
  dataSource = new MatTableDataSource<User>();

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.showUsers();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showUsers(){
    this.userService.getList().subscribe({
      next:(data) => {
        this.dataSource.data = data;
      }, error:(e) =>{}
    })
  }

  modalAdd() {
    this.dialog.open(AddUserComponent, {
      disableClose: true,
      width: "350px"
    }).afterClosed().subscribe(resultado => {
      if(resultado === "Creado"){
        this.showUsers()
      }
    });
  }
}
