import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaUsuarios: any= [];
  updUser: any= [];
  estado: any = [];

  img: any = [
    {1 :"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"},
    {2 :"https://images.unsplash.com/photo-1585185590319-d68abacc7848?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {3 :"https://images.unsplash.com/photo-1512288094938-363287817259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"},
    {4 :"https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"},
    {5 :"https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"},
    {6 :"https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"}
  ]
  
  constructor( private _usuarioService: UsuarioService ) {
        this.getUsers();
  }

  getUsers() {
      this._usuarioService.getUsers().subscribe(data => {
      this.listaUsuarios = [];
      this.listaUsuarios.push(data.data);
      this.listaUsuarios[0][0].avatar = this.img[0][1]; 
      this.listaUsuarios[0][1].avatar = this.img[1][2];
      this.listaUsuarios[0][2].avatar = this.img[2][3];
      this.listaUsuarios[0][3].avatar = this.img[3][4];
      this.listaUsuarios[0][4].avatar = this.img[4][5];
      this.listaUsuarios[0][5].avatar = this.img[5][6];
       this.listaUsuarios = this.listaUsuarios[0]; 
       return
    }, error => {
      console.log(error);
    });
  }
  
  searchUsers(id: any) {
    this.listaUsuarios = [];
    if (id == undefined || id == 0 || id == '') {
      return this.getUsers();
    } 
    this._usuarioService.searchUsers(id).subscribe(datos => {
      datos.data.avatar = this.img[id-1][id];
      return this.listaUsuarios.push(datos.data);
    }, error => {
      console.log(error);
    });
  }

  createUser(data: any){
    if (data.id > 0) {
      this._usuarioService.updateUser(data).subscribe(datos => {
        Swal.fire({
          icon: 'success',
          title: '¡Editado!',
          text: data.first_name + ' ' + data.last_name,
          showConfirmButton: false,
          timer: 1800
        });
        this.updUser = [];
        return;
      }, error => {
        console.log(error);
      });
      return
    }

    this._usuarioService.createUser(data).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: '¡Guardado!',
        text: data.first_name + ' ' + data.last_name,
        showConfirmButton: false,
        timer: 1800
      });
      return;
    }, error => {
      console.log(error);
    });
  }

  getDataUpdate(data: any) {
    this.estado = data.id;
    this.updUser = data;
  }

  deleteUser(data: any) {
    const id = data.id;
    this._usuarioService.deleteUser(id).subscribe(datos => {
      this.listaUsuarios.splice(id-1,1);
      Swal.fire({
        icon: 'success',
        title: '¡Eliminado!',
        text: data.first_name + ' ' + data.last_name,
        showConfirmButton: false,
        timer: 2000
      });
      return
    }, error => {
      console.log(error);
    });
  }
}
