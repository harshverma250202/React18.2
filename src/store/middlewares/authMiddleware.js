// import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
// import {
//   forgotPasscode,
//   getUserInfoThunk,
//   loginWithEmail,
//   registerWithEmail,
//   resetPasscode,
// } from "../slices/authSlice";
// import { push } from "redux-first-history";
// import { getPath } from "../../router-paths";
// import { snackbarSliceActions } from "../slices/snackbarSlice";
// import {
//   openForgetPassModal,
//   closeResetPassModal,
//   openSignUpSuccessModal,
// } from "../slices/commonSlice";
// import { getUserFormInfoThunk } from "../slices/userFormSlice";

// export const authMiddleware = createListenerMiddleware();
// const authStartListening = authMiddleware.startListening;

// authStartListening({
//   matcher: isAnyOf(registerWithEmail.fulfilled),
//   effect: (action, listenerApi) => {
//     listenerApi.dispatch(
//       snackbarSliceActions.open({
//         type: "success",
//         message: "Sign up successful",
//       })
//     );
//     listenerApi.dispatch(push(getPath("login"), { isSignUpSuccess: true }));
//     listenerApi.dispatch(openSignUpSuccessModal());
//   },
// });

// authStartListening({
//   matcher: isAnyOf(loginWithEmail.fulfilled),
//   effect: (action, listenerApi) => {
//     listenerApi.dispatch(
//       snackbarSliceActions.open({
//         type: "success",
//         message: "Login successful",
//       })
//     );
//     listenerApi.dispatch(getUserFormInfoThunk()).catch(() => {
//       // Handle error
//     });
//     listenerApi.dispatch(push(getPath("home")));
//     listenerApi.dispatch(getUserInfoThunk()).catch(() => {
//       // Handle error
//     });
//   },
// });

// authStartListening({
//   matcher: isAnyOf(forgotPasscode.fulfilled),
//   effect: (action, listenerApi) => {
//     listenerApi.dispatch(
//       snackbarSliceActions.open({
//         type: "success",
//         message: "Verification link sent successfully",
//       })
//     );
//     listenerApi.dispatch(openForgetPassModal());
//   },
// });

// authStartListening({
//   matcher: isAnyOf(resetPasscode.fulfilled),
//   effect: (action, listenerApi) => {
//     listenerApi.dispatch(
//       snackbarSliceActions.open({
//         type: "success",
//         message: "Password reset successful",
//       })
//     );
//     listenerApi.dispatch(closeResetPassModal());
//     listenerApi.dispatch(push(getPath("login")));
//   },
// });

// authStartListening({
//   matcher: isAnyOf(loginWithEmail.fulfilled),
//   effect: (action, listenerApi) => {
//     const authToken = listenerApi.getState().supplyAuth?.token;
//     localStorage.setItem("authToken", JSON.stringify(authToken));
//   },
// });
