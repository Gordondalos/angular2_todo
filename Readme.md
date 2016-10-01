# Установка Агруляра
+ Берем из документации четыре файла
systemjs.config.js, package.json, tsconfig.json, typings.json
складываем в корень проекта
+ npm install
+ Создать файл index.html этого содержания
    
    ```html
    <html>
        <head>
        <title>Angular QuickStart</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles.css">
        <!-- 1. Load libraries -->
         <!-- Polyfill(s) for older browsers -->
        <script src="node_modules/core-js/client/shim.min.js"></script>
        <script src="node_modules/zone.js/dist/zone.js"></script>
        <script src="node_modules/reflect-metadata/Reflect.js"></script>
        <script src="node_modules/systemjs/dist/system.src.js"></script>
        <!-- 2. Configure SystemJS -->
        <script src="systemjs.config.js"></script>
        <script>
          System.import('app').catch(function(err){ console.error(err); });
        </script>
        </head>
        <!-- 3. Display the application -->
        <body>
        <my-app>Loading...</my-app>
        </body>
    </html>
    

+ Сдеать файл с названием оканчивающимся ...component.ts, в нем
нужно определить класс и аннотацию как описано ниже, чтобы
написать анатацию нужно ее импортировать из ангуляра (1 строка)

    
    import { Component } from '@angular/core';   
   
    @Component({
        selector: 'todo-list',
        templateUrl: 'app/Components/todo-list/todo-list.component.html',
        styleUrls: ['app/Components/todo-list/todo-list.component.css'],
    
    })
    
    export class TodoListComponent {          
        
    }


+ В классе определяем конструктор и нужные поля, определяя их тип

    
    export class TodoListComponent { 
          myFirst: string;
          
          constructor(myFirst){
          this.myFirst = myFirst;
        }      
    }
    
+ чтобы передавать вниз данные нужно импортировать из ангуляра инпут
    
    
    import { Component, Input } from '@angular/core';
    
и использовать потом его в нутри класса

     @Input()todos: Todo[]; 
     
после анотации инпут указывается передаваемая переменная и ее тип


+ чтобы передать вверх событие нужно импортировать аутпут и
эвентэмитер


    import { Component, Output, EventEmitter } from '@angular/core';
    
потом в классе сформировать новый эмитер

    @Output() added = new EventEmitter();
    
и вызвать его при помощи обычного метода

    
    add(title: string){
            if(title){
                this.added.emit(title);
            }
        }
        
потом его нужно поймать в родительском хтмл, причем то что мы передали
внути дочернего элемента он передаст в метод родительского элемента

    <todo-item (added)="onTodoDeleted(title)"></todo-item>
    

## Создание сервиса

Создили в папке shared файл todos.service.ts
В сервисе используется декоратор @Injectable()
его нужно ипортировать и добаить его над классом

    import { Injectable } from '@angular/core';
    
и добавим его перед классом
    
    @Injectable()
    export class TodoService{
        getTodos(): ITodo[]{
            return todos;
        }
    }

так как нам нужен список задач мы его импортировали из даты
и нам нуджен тип данных которые возвращает сервис

    import { ITodo } from './todo.model';
    import { todos } from './todo.data';
    
то есть вот этот код будет возвращать элементы соответсвующие
интерфейсу ITodo

     getTodos(): ITodo[]{
         return todos;
     }
     
### Применяем сервис

в нужном файле его импортируем

    import { TodoService } from '../shared/todo.service';
    
чтобы получать даные при инициализации нужно использовать
метод OnInit, но это можно сделать и в конструкторе, но это плохой тон
для этого нам нужно импортировать это метод выполняя интерфейс onInit

    import { Component, OnInit } from '@angular/core';
    
имплементируем интерфейс в классе, для этого реализуем метод инит, и реализуем
в нем получение данных из сервиса.


    export class TodoListComponent implements OnInit{
        ngOnInit(){
                this.todos = this.todoService.getTodos();
                console.log('ngOnInit');
            }
    }
    
чтобы внедрить сервис в компонент нужно сделать инекцию зависимостей, для этого
нужно определить конструктор и в него передать
параметр - переменную этого сервиса, типа этого сервиса

     constructor(private todoService: TodoService){
            this.todos = [];
            console.log('Constructed');
        }
        
если не указать что переданный параметр privet, то нужно определить свойство
в этом классе с одноименным названием, а если указать то нчего лишнего делать 
не нужно, так как тайп скрипт автоматом сделает это свойство


После того как мы указали сервис в конструкторе нам нужно его зарегестрировать
для этого в анатации добавляем свойство providers:

    @Component({
        selector: 'todo-list',
        templateUrl: 'app/Components/todo-list/todo-list.component.html',
        styleUrls: ['app/Components/todo-list/todo-list.component.css'],
        providers: [TodoService]        
    })



