import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';
import { TodoFormСomponent } from './Components/todo-form/todo-from-component';

@NgModule ( {
    imports : [ BrowserModule ],
    declarations : [ AppComponent, TodoListComponent, TodoItemComponent, TodoFormСomponent ],
    bootstrap : [ AppComponent ],
} )
export class AppModule {
}
