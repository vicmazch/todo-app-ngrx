import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// ENVIRONMENTS
import { environment } from '../environments/environment'; // Angular CLI environment

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// MIS REDUCERS
import { appReducers } from './app.reduce';

// MODULES
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';

// COMPONENTS
import { AppComponent } from './app.component';

TodoModule;
@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // MODULES
    TodoModule,
    // NGRX
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
