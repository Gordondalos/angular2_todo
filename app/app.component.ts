import { Component } from '@angular/core';
import { TodoListComponent } from './todo/todo-list.component';



// Анотация, она же декоратор
@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],     // так как стилей может быть много передается массив, и все стили компонента в его папке
    directives: ['TodoListComponent']
})
export class AppComponent {
    title: string;
    todos: string[];

    constructor(){
        this.title = "Ангуляр 2do"; // В конструкторе обьявляются значения свойств
        this.todos = ['Изучить Джаваскрипт','Изучить Ангуляр2','Изучить Экмоскрипт6','купить продукты']
    }
    addTodo(event: any){
        if(event.type === 'keyup' && event.which === 13){
            this.todos.push(event.target.value);
        }

    }
    test(input: HTMLInputElement){
        this.todos.push(input.value);
        input.value ='';
    }
}
