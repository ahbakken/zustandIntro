import { Typography } from "@mui/material";

export const UsingStoreForklaring = () => {
  return (
    <>
      <Typography variant="h5" color="pink" sx={{ pb: 2 }}>
        Bruk store
      </Typography>
      <Typography variant="body2" sx={{ pb: 2 }}>
        - Bruk useStore hook i alle komponenter
        <br />
        - Ikke behov for provider
        <br />
        - Velg state du vil ha og omponenten re-rendrer når state endrer seg
        <br />
        - Kan skille actions og state
        <br />
      </Typography>
      <img
        src="src/public/images/usingStoreSeparate.png"
        alt="create store"
        style={{ maxWidth: "100%" }}
      />
    </>
  );
};
