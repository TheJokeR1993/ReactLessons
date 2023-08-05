import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import buttonReducer from "../features/button/button";
import formReducer from "../features/form/form";
import { dogApi } from "../services/dogs";

export const store = configureStore({
  reducer: {
    button: buttonReducer,
    form: formReducer,
    [dogApi.reducerPath]: dogApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(dogApi.middleware),
});

setupListeners(store.dispatch);
