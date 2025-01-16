import { Typography } from "@mui/material";

export const CompareConclution = () => {
  return (
    <>
      <Typography variant="h5" color="pink" sx={{ pb: 2 }}>
        Når velge hva?
      </Typography>
      <Typography variant="body1">
        Velg Context når:
        <br />
        • Enkle applikasjoner med få state-endringer
        <br />
        • Statisk data som sjelden endres
        <br />
        • Små/medium prosjekter med få utviklere
        <br />
        <br />
        Velg Zustand når:
        <br />
        • Medium kompleksitet i state management
        <br />
        • Rask utvikling og lite boilerplate er prioritert
        <br />
        • Mindre team som trenger fleksibilitet
        <br />
        • Performance er viktig
        <br />
        <br />
        Velg Redux når:
        <br />
        • Kompleks state management med mange actions
        <br />
        • Store team som trenger streng arkitektur
        <br />
        • Behov for omfattende DevTools
        <br />
        • Stort økosystem av middleware er nødvendig
        <br />• Legacy prosjekter som allerede bruker Redux
      </Typography>
    </>
  );
};
