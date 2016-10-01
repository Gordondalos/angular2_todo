"use strict";
// import { ITodo } from "./todo.model";
var TodoSeedData = (function () {
    function TodoSeedData() {
    }
    TodoSeedData.prototype.createDb = function () {
        var todos = [
            { id: 1, title: 'Изучть Ангуляр', done: false },
            { id: 2, title: 'Изучтиь Тайп скрипт', done: false },
            { id: 3, title: 'Изучить ES6', done: false },
            { id: 4, title: 'Отдохнуть', done: false }
        ];
        return { todos: todos };
    };
    return TodoSeedData;
}());
exports.TodoSeedData = TodoSeedData;
//# sourceMappingURL=todo.data.js.map