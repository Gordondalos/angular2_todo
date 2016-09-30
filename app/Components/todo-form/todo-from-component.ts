import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
    selector: 'todo-form',
    templateUrl: 'app/Components/todo-form/todo-form.components.html',
    styleUrls: ['app/Components/todo-form/todo-form.components.css']
})

export class TodoFormFomponent{

    @Output() added = new EventEmitter();

    add(title: string){
        if(title){
            this.added.emit(title);
        }
    }

    addTodo(event: any){
        if(event){
            if(event.type === 'keyup' && event.which === 13){
                this.added.emit(event.target.value);
            }
        }
    }



}