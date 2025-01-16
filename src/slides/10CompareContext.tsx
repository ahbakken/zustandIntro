import { Typography } from "@mui/material";

export const CompareContext = () => {
  return (
    <>
      <Typography variant="h5" color="pink" sx={{ pb: 2 }}>
        Zustand vs React Context
      </Typography>
      <Typography variant="body1">
        Zustand:
        <br />
        + Enkel å sette opp - ingen providers
        <br />
        + Innebygget state management
        <br />
        + Bedre ytelse - kun komponenter som bruker state re-rendres
        <br />
        + Mindre boilerplate kode
        <br />
        <br />
        React Context:
        <br />
        - Krever context provider wrapping
        <br />
        - Kun state management gjennom useState/useReducer
        <br />
        - Hele provider treet re-rendres ved endring
        <br />
        - Mer boilerplate kode for kompleks state
        <br />
      </Typography>
    </>
  );
};
