import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TodoListComponent }   from 'app/Components/todo-list/todo-list.component';
import { TodoItemComponent }   from 'app/Components/todo-item/todo-item.component';
import {TodoFormFomponent} from "app/Components/todo-form/todo-from-component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, TodoListComponent,TodoItemComponent, TodoFormFomponent ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }
