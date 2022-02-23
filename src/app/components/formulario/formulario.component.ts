import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() userSeleccionados = new EventEmitter<any>();
  @Output() newUser = new EventEmitter<any>();
  @Input() updUser: any;
  @Input() estado: any;

  titulo: any= 'Gestión Usuarios';
  ocultar: any = true;

  idUser = '';
  user = {
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  }

  constructor() {
  }
  
  ngOnInit(): void {
  }

  searchUsers() {
      this.clean(); 
      this.userSeleccionados.emit(this.idUser);
  }

  createUser(id: any){
    if (id > 0) {
      this.newUser.emit(this.updUser);
    } else {
      this.newUser.emit(this.user);
    }
  }

  clean(){
    this.user.email = '';
    this.user.first_name = '';
    this.user.last_name = '';
    this.user.avatar = '';
    this.updUser.email = '';
    this.updUser.first_name = '';
    this.updUser.last_name = '';
    this.updUser.avatar = '';
  }

  nuevoForm(val: any){
    if (val === 'b') {
      this.ocultar = true;
      this.titulo = 'Gestión Usuarios'
    } 
    
    if (val === 'a'){
      this.ocultar = false;
      this.titulo = 'Nuevo Usuario';
    }

    if (val === 'c'){
      this.ocultar = false;
      this.titulo = 'Editar Usuario';
    }
  }
  
}
