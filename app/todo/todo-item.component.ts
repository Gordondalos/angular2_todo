import { Component, Input } from '@angular/core';

@Component({
    selector: 'todo-item',
    templateUrl: './app/todo/todo-item.component.html',
    styleUrls: ['./app/todo/todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: string;
}
