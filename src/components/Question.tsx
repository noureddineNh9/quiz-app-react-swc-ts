import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import Result from "./Result";

interface QuestionProps {
  questions: [
    {
      category: string;
      type: string;
      difficulty: string;
      question: string;
      correct_answer: string;
      available_answers: string[];
    }
  ];

  next: Dispatch<SetStateAction<boolean>>;
  setDisable: Dispatch<SetStateAction<boolean>>;
  disable: boolean;
  questionIndex: number;
}

function Question({ questions }: QuestionProps): any {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<{ correct: number; wrong: number }>({
    correct: 0,
    wrong: 0,
  });

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const checkAnswer = (event: any): void => {
    const answerValue = event.target.value;

    const correct_answer = questions[questionIndex].correct_answer;
    const answerButtons = document.querySelectorAll(
      ".answer-button"
    ) as NodeListOf<HTMLButtonElement>;

    if (answerValue) {
      if (answerValue === correct_answer) {
        event.currentTarget.style.border = "2px solid green";
        setScore((prev) => prev + 1);
        answers.correct = answers.correct + 1;
      } else {
        answers.wrong = answers.wrong + 1;
        answerButtons.forEach((button) => {
          if (button.value === correct_answer) {
            button.style.border = "2px solid green";
          }
        });
        event.currentTarget.style.border = "2px solid red";
      }
    }
    setTimeout(() => {
      setQuestionIndex((prev) => prev + 1);
      event.target.style.border = "";
      answerButtons.forEach((button) => {
        button.style.border = "";
      });
    }, 1000);
  };

  if (open) {
    return <Result open={open} close={handleClose} {...{ answers, score }} />;
  }

  if (questionIndex === questions.length - 1) {
    return (
      <>
        <Card variant="outlined">
          <CardContent>
            <Typography component="div">
              You have finished the quiz!
              <Button onClick={handleOpen}>Submit</Button>
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }

  return (
    <div>
      {[questions[questionIndex]].map((question, questionIndex) => (
        <div key={questionIndex}>
          <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
            {question.question}
          </Typography>
          <Typography component="div">
            {question.category} ({question.difficulty})
          </Typography>
          {question.available_answers.map((answer, questionIndex) => (
            <ButtonGroup key={questionIndex} orientation="vertical">
              <Button
                className="answer-button"
                value={answer}
                sx={{ margin: 2, width: "100%" }}
                defaultValue={answer}
                onClick={checkAnswer}
              >
                {answer}
              </Button>
            </ButtonGroup>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Question;
