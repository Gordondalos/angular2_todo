import { Component, Input } from '@angular/core';


@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo/todo-list.component.html',
    styleUrls: ['app/todo/todo-list.component.css'],
    //inputs: ['todos'] // Это способ №1
})

export class TodoListComponent {
     @Input()todos: string[];     // Это способ передачи номер 2 из родителя ребенку, при помощи декоратора импут
}