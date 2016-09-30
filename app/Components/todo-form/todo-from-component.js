"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TodoFormFomponent = (function () {
    function TodoFormFomponent() {
        this.added = new core_1.EventEmitter();
    }
    TodoFormFomponent.prototype.add = function (title) {
        if (title) {
            this.added.emit(title);
        }
    };
    TodoFormFomponent.prototype.addTodo = function (event) {
        if (event) {
            if (event.type === 'keyup' && event.which === 13) {
                this.added.emit(event.target.value);
            }
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TodoFormFomponent.prototype, "added", void 0);
    TodoFormFomponent = __decorate([
        core_1.Component({
            selector: 'todo-form',
            templateUrl: 'app/Components/todo-form/todo-form.components.html',
            styleUrls: ['app/Components/todo-form/todo-form.components.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TodoFormFomponent);
    return TodoFormFomponent;
}());
exports.TodoFormFomponent = TodoFormFomponent;
//# sourceMappingURL=todo-from-component.js.map