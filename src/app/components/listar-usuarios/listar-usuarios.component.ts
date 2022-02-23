import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  @Input() listaUsuarios: any;
  @Output() deleteUser = new EventEmitter<any>();
  @Output() getUserUpdate = new EventEmitter<any>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  delete(id: any){
    const data = {
      id: id
    }
    this.deleteUser.emit(data);
  }

  getDataUpdate(data: any){
    this.getUserUpdate.emit(data);
  }


}
