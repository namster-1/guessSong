import React, { useState, useEffect } from "react";
import { words } from "../words/words";
import "./style.css";
import GroupScores from "../groupScores/groupScores";
interface inputs {
  groupName: string;
  id: undefined | number;
  scored?: number;
}
interface Props {
  timerValue: number;
  inputs: inputs[];
  round: number;
}
const SongGame: React.FC<Props> = ({
  timerValue,
  inputs,
  round,
}): JSX.Element => {
  const [timer, setTimer] = useState<any>(timerValue);
  const [word, setWord] = useState<string>("");
  const [answered, setAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>(false);
  const [nextGroup, setNextGroup] = useState<number>(0);
  const [groupScore, setGroupScore] = useState<any[]>([]);
  const wordsArr = WordsToArr(words);
  useEffect(() => {
    setWord(chooseRandomWord(wordsArr));
    setGroupScore([
      {
        ...inputs[nextGroup],
        score: score + 1,
      },
    ]);
  }, [answered]);
  useEffect(() => {
    const countDown = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      clearTimeout(countDown);
      setEndGame(true);
      setNextGroup(nextGroup + 1);
    }
    return () => clearTimeout(countDown);
  }, [timer]);
  const handleAnswered = () => {
    setScore(score - 1);
    setAnswered(true);
    if (answered === true) {
      setAnswered(false);
    }
  };
  const handleCorrectAnswer = () => {
    setScore(score + 1);
    setAnswered(true);
    if (answered === true) {
      setAnswered(false);
    }
  };
  if (endGame === false) {
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <div
            onClick={handleAnswered}
            className="w-50 bg-danger song-game text-center"
          >
            <h1>{score}</h1>
          </div>
          <div className="w-25 text-center">
            <h1>{timer}</h1>
            <h1>{word}</h1>
          </div>
          <div
            onClick={handleCorrectAnswer}
            className="w-50 bg-success song-game text-center"
          >
            <h1>{score}</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return <GroupScores round={round} inputs={groupScore} />;
  }
};
function WordsToArr(words: string): string[] {
  const Words = words.split(" ");
  const arrWords = Words;

  return arrWords;
}
function chooseRandomWord(arr: string[]): string {
  const id = Math.floor(Math.random() * arr.length);
  return arr[id];
}

export default SongGame;
