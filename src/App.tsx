import "./App.css";
import Quiz from "./components/Quiz";
import results from "./question.json";

function App() {
  return (
    <>
      <Quiz quiz={results} />
    </>
  );
}

export default App;
