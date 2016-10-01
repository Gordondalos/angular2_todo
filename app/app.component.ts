import { Component } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { TodoService } from './Components/shared/todo.service'
import { Todo } from './Components/shared/todo.model';
// import  { todos } from './Components/shared/todo.data';

// Анотация, она же декоратор
@Component ( {
    selector : 'todo-app',
    templateUrl : 'app/app.component.html',
    styleUrls : [ 'app/app.component.css' ],     // так как стилей может быть много передается массив, и все стили компонента в его папке
    providers : [ HttpModule, TodoService ]
} )
export class AppComponent {
    title:string;

    constructor ( todoService:TodoService ) {
        this.title = "Ангуляр 2do"; // В конструкторе обьявляются значения свойств
    }


}
