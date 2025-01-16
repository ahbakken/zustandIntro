import { Typography } from "@mui/material";

export const Sources = () => {
  const textColor = "#d8f9ff";
  return (
    <>
      <Typography variant="h5" color="pink" sx={{ pb: 2 }}>
        Kilder:
      </Typography>
      <ul>
        <li>
          <a
            href="https://zustand.docs.pmnd.rs/getting-started/introduction"
            style={{ color: textColor }}
          >
            Zustand nettside
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=14B85quRQhw"
            style={{ color: textColor }}
          >
            Why Everyone Loves Zustand
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=_ngCLZ5Iz-0"
            style={{ color: textColor }}
          >
            Zustand - Complete Tutorial
          </a>
        </li>
        <li>GPT 4o</li>
        <li>Claude 3.5 Sonnet</li>
      </ul>
    </>
  );
};
