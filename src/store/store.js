import { configureStore } from "@reduxjs/toolkit";
// import { authMiddleware } from "./middlewares/authMiddleware";
// import supplyAuthReducer from "./slices/authSlice";
import snackbarReducer from "./slices/snackbarSlice";

const store = configureStore({
  reducer: {
    // supplyAuth: supplyAuthReducer,
    snackbar: snackbarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  // .concat(authMiddleware.middleware),
});

export default store;
