import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import buttonReducer from "../features/button/button";
import formReducer from "../features/form/form";

export const store = configureStore({
  reducer: {
    button: buttonReducer,
    form: formReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});

setupListeners(store.dispatch);
