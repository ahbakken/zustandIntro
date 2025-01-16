import { Typography } from "@mui/material";

export const CompareRedux = () => {
  return (
    <>
      <Typography variant="h5" color="pink" sx={{ pb: 2 }}>
        Zustand vs Redux
      </Typography>
      <Typography variant="body1">
        Zustand:
        <br />
        + Ingen provider wrapping nødvendig
        <br />
        + Mindre boilerplate kode
        <br />
        + Enklere å sette opp
        <br />
        + Kan brukes med eller uten TypeScript
        <br />
        <br />
        Redux:
        <br />
        - Krever provider wrapping
        <br />
        - Mer boilerplate (actions, reducers, dispatch)
        <br />
        - Mer kompleks setup
        <br />
        - Større bundelsize
        <br />
        <br />
        Felles:
        <br />
        • Begge har god ytelse med selectors
        <br />
        • Begge støtter middleware
        <br />
        • Begge har DevTools støtte
        <br />
      </Typography>
    </>
  );
};
