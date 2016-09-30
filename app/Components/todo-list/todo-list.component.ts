import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo.model';


@Component({
    selector: 'todo-list',
    templateUrl: 'app/Components/todo-list/todo-list.component.html',
    styleUrls: ['app/Components/todo-list/todo-list.component.css'],
    //inputs: ['todos'] // Это способ №1
})

export class TodoListComponent {
     @Input()todos: Todo[];     // Это способ передачи номер 2 из родителя ребенку, при помощи декоратора импут

        // сотрировка массива
    get sortedTodos(){
        return this.todos
            .map((todo: Todo)=>todo) // этот метод делает копию массива todos
            .sort((a: Todo, b: Todo)=>{
                 if(a.title > b.title){
                     return 1;
                 }else if(a.title < b.title){
                     return -1;
                 }else{
                     return 0;
                 }
            })
            .sort((a: Todo, b: Todo)=>{
            if(a.done && !b.done){
                return 1;
            }else if (!a.done && b.done){
                return -1;
            }else{
                return 0;
            }
        })
    }

    onTodoDeleted(todo: Todo){
        if(todo){
            let index = this.todos.indexOf(todo); // получаем индекс задачи в массиве
            if(index>-1){
                this.todos.splice(index,1);
            }
        }

    }
}