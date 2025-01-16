import { Button, Typography } from "@mui/material";
import { logSlide } from "../utils/util";

export const UsingStoreInUtil = () => {
  return (
    <>
      <Typography variant="h5" color="pink" sx={{ pb: 2 }}>
        Bruk store utenfor komponenter
      </Typography>
      <img
        src="src/public/images/usingStoreUtil.png"
        alt="create store"
        style={{ maxWidth: "100%" }}
      />
      <Button variant="contained" onClick={logSlide} sx={{ mt: 2 }}>
        log side
      </Button>
    </>
  );
};
