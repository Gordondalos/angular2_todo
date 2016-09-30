import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
    selector: 'todo-item',
    templateUrl: 'app/Components/todo-item/todo-item.component.html',
    styleUrls: ['app/Components/todo-item/todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: Todo;

    @Output() deleted = new EventEmitter();

    toggleDone(checked: boolean){
        this.todo.done = checked;
        // this.todo.done = !this.todo.done;
    }


    /*Данный метод генерирует событие emit которое распространяется вверх
    * для это мы импортируем Аутпут ( 1 строка)
    * создаем новое событие
    * @Output() deleted = new EventEmitter();
    * в данном случае назвали его deleted
    * и в этом методе вызвали его эмит передав наш обьект
    * */
    deleteThisTodo(){
        this.deleted.emit(this.todo);
    }
}
