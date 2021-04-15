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
      id: undefined,
    },
  ]);
  const plusInputField = () => {
    setInputs([
      ...inputs,
      {
        groupName: "",
        id: undefined,
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
                      <div key={index} className="bg-danger mt-3">
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
          <SongGame />
        </Route>
      </Switch>
    </Router>
  );
};

export default Form;
