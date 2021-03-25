import {
  Action, applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import gamesReducer from './games-reducer';
import teamsReducer from './teams-reducer';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
RootState,
unknown,
Action<string>>;

const rootReducer = combineReducers({
  games: gamesReducer,
  teams: teamsReducer
});
export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export type AppDispatch = typeof store.dispatch;

export default store;
