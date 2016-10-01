import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model'
import { TodoService } from '../shared/todo.service'

@Component({
    selector: 'todo-form',
    templateUrl: 'app/Components/todo-form/todo-form.components.html',
    styleUrls: ['app/Components/todo-form/todo-form.components.css'],
    // providers: [TodoService] // его убрали так как о зареган у родителя
})

export class TodoFormComponent{

    @Output() added = new EventEmitter();
    constructor(private todoService: TodoService){

    }

    add(title: string) :void{
        if(title){
            let todo = new Todo(title);
            TodoService.addTodo(todo);
        }
    }



}