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
// Анотация, она же декоратор
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Ангуляр 2do"; // В конструкторе обьявляются значения свойств
        this.todos = ['Изучить Джаваскрипт', 'Изучить Ангуляр2', 'Изучить Экмоскрипт6', 'купить продукты'];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todo-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'] // так как стилей может быть много передается массив, и все стили компонента в его папке
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map