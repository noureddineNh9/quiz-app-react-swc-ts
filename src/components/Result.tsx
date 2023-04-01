import { Box, Button, Modal, Typography } from "@mui/material";
import React, { SetStateAction, useState } from "react";
import Spin from "antd";

type Props = {};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  color: "#000",
  boxShadow: 24,
  p: 4,
};

interface ResultProps {
  open: boolean;
  close: React.Dispatch<SetStateAction<boolean>>;
  answers: { correct: number; wrong: number };
  score: number;
}

function Result({ open, close, answers, score }: ResultProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Results
          </Typography>
          <Typography
            component={"div"}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <Typography>You have Scored {score} points</Typography>
            <Typography>correct answers: {answers.correct}</Typography>
            <Typography>wrong answers: {answers.wrong}</Typography>
          </Typography>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            Play Again
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Result;
