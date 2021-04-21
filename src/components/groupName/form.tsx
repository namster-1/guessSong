import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SongGame from "../game/songGame";
import "./style.css";

interface inputs {
  groupName: string;
  id: undefined | number;
}

const Form: React.FC = (): JSX.Element => {
  const [inputs, setInputs] = useState<inputs[]>([
    {
      groupName: "",
      id: 0,
    },
  ]);
  const [second, setSecond] = useState<string>("15");
  const [rounds, setRounds] = useState<number>(1);
  const time: number[] = [15, 30, 45, 60];
  const round: number[] = [1, 2, 3, 4];
  const plusInputField = () => {
    setInputs([
      ...inputs,
      {
        groupName: "",
        id: inputs.length,
      },
    ]);
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
  };

  const minusInputField = (index: number): void => {
    let removeField = [...inputs];
    if (index > 0) {
      removeField.splice(index, 1);
      setInputs(removeField);
    } else {
      setInputs(removeField);
    }
  };
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <div className="w-100 m-auto">
              <div className="text-center">
                <h1>choose how many group do you want and name them</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group w-75 text-center m-auto">
                  {inputs.map((input: any, index: number) => {
                    return (
                      <div key={index} className="bg-info mt-3">
                        <label htmlFor="groupName">{index + 1} group</label>
                        <input
                          placeholder="enter your group name here"
                          className="form-control w-50 m-auto"
                          key={index}
                          id="groupName"
                          value={input.groupName}
                          onChange={(e: any) => {
                            const inputValue = [...inputs];
                            inputValue[index].groupName = e.target.value;
                            setInputs(inputValue);
                          }}
                        />
                        <button
                          className="btn btn-success m-2"
                          onClick={() => plusInputField()}
                          type="submit"
                        >
                          add group <AiFillPlusCircle />
                        </button>
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={() => minusInputField(index)}
                        >
                          remove group <AiFillMinusCircle />
                        </button>
                      </div>
                    );
                  })}
                  <label className="d-block" htmlFor="timer">
                    enter time in seconds
                  </label>
                  <select
                    id="timer"
                    onChange={(e) => setSecond(e.target.value)}
                    className="form-control w-25 m-auto"
                  >
                    {time.map(
                      (times: number, idx: number): JSX.Element => {
                        return (
                          <option key={idx} value={times}>
                            {times}
                          </option>
                        );
                      }
                    )}
                  </select>
                  <label htmlFor="round">choose amount of rounds</label>
                  <select
                    id="round"
                    onChange={(e: any) => setRounds(e.target.value)}
                    className="form-control w-25 m-auto"
                  >
                    {round.map((round, idx) => {
                      return (
                        <option key={idx} value={round}>
                          {round}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </form>
              <div className="text-center">
                <Link to="/play">
                  <button className="btn btn-success m-2">
                    play <AiFillPlayCircle />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/play" exact>
          <SongGame
            timerValue={parseInt(second)}
            inputs={inputs}
            round={rounds}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default Form;
