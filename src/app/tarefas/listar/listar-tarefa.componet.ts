import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
    tarefas: Tarefa[];
    tarefaService: any;

  constructor() { }

  ngOnInit() {
      this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
      return this.tarefaService.listarTodos();
  }

}
