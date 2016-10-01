import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {HttpModule,  XHRBackend  } from '@angular/http';
 //import { InMemoryBackendService } from 'angular-in-memory-web-api';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

import { AppModule } from './app.module';
import { TodoSeedData } from "./Components/shared/todo.data";

const platform = platformBrowserDynamic ();
platform.bootstrapModule ( AppModule, [
    HttpModule,
    { provide : XHRBackend, useClass : InMemoryBackendService },
    { provide : SEED_DATA, useClass : TodoSeedData }
] );
