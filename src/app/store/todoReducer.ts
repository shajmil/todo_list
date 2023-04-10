import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
import { environment } from 'src/environments/environment';
    
  
  export interface AppState {
  
  }
  
  export const Todoreducers: ActionReducerMap<AppState> = {
  
  };
  
  
  export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];