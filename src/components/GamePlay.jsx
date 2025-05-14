import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <main className="pt-[70px]">
      <div className="flex justify-around items-end flex-wrap gap-4">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="mt-10 flex flex-col items-center gap-4">
        <button
          onClick={resetScore}
          className="text-black bg-white border border-black rounded px-5 py-2 text-lg"
        >
          Reset Score
        </button>
        <button
          onClick={() => setShowRules((prev) => !prev)}
          className="text-white bg-black border border-transparent rounded px-5 py-2 text-lg"
        >
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>

      {showRules && <Rules />}
    </main>
  );
};

export default GamePlay;
