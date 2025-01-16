import { Button, Typography } from "@mui/material";
import { useAdviceStore } from "./store/adviceStore";

export const GetAdvice = () => {
  const getAdvice = useAdviceStore((state) => state.fetchAdvice);
  const advice = useAdviceStore((state) => state.advice);
  return (
    <>
      <Button
        variant="contained"
        onClick={getAdvice}
        sx={{ mt: 5, maxWidth: 150, minWidth: 150 }}
      >
        Hent råd
      </Button>
      <Typography variant="body1" sx={{ pt: 2 }}>
        {advice.advice}
      </Typography>
    </>
  );
};
