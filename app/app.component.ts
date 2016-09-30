import { Component } from '@angular/core';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { Todo } from './Components/shared/todo.model';



// Анотация, она же декоратор
@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],     // так как стилей может быть много передается массив, и все стили компонента в его папке
    // directives: ['TodoListComponent']
})
export class AppComponent {
    title: string;
    todos: Todo[];

    constructor(){
        this.title = "Ангуляр 2do"; // В конструкторе обьявляются значения свойств
        this.todos = []
    }

    onTodoAdded(zagolovok: string){
        this.todos.push(new Todo(zagolovok));

    }
}
