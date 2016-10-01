import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';

import {AppComponent}   from './app.component';
import {TodoListComponent}   from './Components/todo-list/todo-list.component';
import {TodoItemComponent}   from './Components/todo-item/todo-item.component';
import {TodoFormComponent} from "./Components/todo-form/todo-from-component";


@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, TodoListComponent, TodoItemComponent, TodoFormComponent],
    bootstrap: [AppComponent],
})
export class AppModule {
}
