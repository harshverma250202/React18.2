import { Alert, Snackbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { snackbarSliceActions } from "./store/slices/snackbarSlice";
import MainRoutes from "./routes";

function App() {
  const { isOpen, message, type } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();
  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => dispatch(snackbarSliceActions.close(""))}
      >
        <Alert
          onClose={() => dispatch(snackbarSliceActions.close(""))}
          severity={type}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <MainRoutes />
    </>
  );
}

export default App;
