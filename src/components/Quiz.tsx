import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Question from "./Question";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

interface question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  available_answers: string[];
}

interface QuizProps {
  quiz: {
    results: question[];
  };
}

function Quiz({ quiz }: QuizProps) {
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Question questions={quiz.results} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Quiz;
