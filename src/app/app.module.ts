import { NgModule, NO_ERRORS_SCHEMA, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { DatabaseService } from './database.service';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './serializer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingComponent
  ],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forFeature([TodoEffects]),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({stateKey:'router'})
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
