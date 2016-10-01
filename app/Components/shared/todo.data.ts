import { InMemoryDbService } from 'angular2-in-memory-web-api';

// import { ITodo } from "./todo.model";
export class TodoSeedData implements InMemoryDbService {
     createDb () {
        let todos = [
            { id: 1, title : 'Изучть Ангуляр', done : false },
            { id: 2, title : 'Изучтиь Тайп скрипт', done : false },
            { id: 3, title : 'Изучить ES6', done : false },
            { id: 4, title : 'Отдохнуть', done : false }
        ];

        return { todos };
    }

    // constructor (public todos: ITodo){
    //     return this.todos;
    // }


}

