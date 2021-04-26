import React from "react";
import "./style.css";

interface inputs {
  groupName: string;
  id: number;
  score: number;
}

interface Props {
  round: number;
  inputs: inputs[];
}

const GroupScores: React.FC<Props> = ({ round, inputs }): JSX.Element => {
  const arr = fillArr(round);
  console.log(inputs);
  return (
    <div>
      <div className="table w-50 m-auto">
        <table className="table table-dark">
          <tbody>
            {inputs.map((input) => {
              return (
                <tr key={input.id}>
                  <th scope="row">{input.groupName}</th>
                  <td>{inputs[0].score}</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
function fillArr(num: number): number[] {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}
export default GroupScores;
