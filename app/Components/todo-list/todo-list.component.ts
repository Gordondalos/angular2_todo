import { Component, OnInit } from '@angular/core';

import { ITodo, Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';


@Component({
    selector: 'todo-list',
    templateUrl: 'app/Components/todo-list/todo-list.component.html',
    styleUrls: ['app/Components/todo-list/todo-list.component.css'],
    // providers: [TodoService] // здесь убрали так как он у родителя зареган и он тут доступен
    //inputs: ['todos'] // Это способ №1
})

export class TodoListComponent implements OnInit{
     todos: ITodo[];     // Это способ передачи номер 2 из родителя ребенку, при помощи декоратора импут

    constructor(private todoService: TodoService){
        this.todos = [];
    }

    ngOnInit(){
        this.todoService.getTodos().then(todos=>this.todos = todos);

    }


        // сотрировка массива
    get sortedTodos(): ITodo[]{
        return this.todos
            .map((todo: Todo)=>todo) // этот метод делает копию массива todos
            .sort((a, b)=>{
                 if(a.title > b.title){
                     return 1;
                 }else if(a.title < b.title){
                     return -1;
                 }else{
                     return 0;
                 }
            })
            .sort((a, b)=>{
            if(a.done && !b.done){
                return 1;
            }else if (!a.done && b.done){
                return -1;
            }else{
                return 0;
            }
        })
    }

    onTodoDeleted(todo: ITodo): void{
        TodoService.deleteTodo(todo);

    }
}