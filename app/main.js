"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
//import { InMemoryBackendService } from 'angular-in-memory-web-api';
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var app_module_1 = require('./app.module');
var todo_data_1 = require("./Components/shared/todo.data");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [
    http_1.HttpModule,
    { provide: http_1.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
    { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: todo_data_1.TodoSeedData }
]);
//# sourceMappingURL=main.js.map