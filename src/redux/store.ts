import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import pokemonReducer from "./slices/pokemonslice";
import watcherSaga from "./saga/saga.watcher";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { pokemon: pokemonReducer },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
