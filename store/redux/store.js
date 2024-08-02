import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});


//In this method is not used this project but  code part added and commentted to use. Context API is used in this project.
