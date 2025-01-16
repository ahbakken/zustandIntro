import { Typography } from "@mui/material";

export const CreateStore = () => {
  return (
    <>
      <Typography variant="h5" color="pink" sx={{ pb: 2 }}>
        Sett opp store
      </Typography>
      <img
        src="src/public/images/createStore.png"
        alt="create store"
        style={{ maxWidth: "100%" }}
      />
      <Typography variant="body2" sx={{ pt: 2 }}>
        - Store er en hook
        <br />
        - Primitives, objekter og funksjoner
        <br />- set funksjon merger state
      </Typography>
    </>
  );
};
