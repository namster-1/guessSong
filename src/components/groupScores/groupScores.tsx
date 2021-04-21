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
  return (
    <div>
      <div className="table w-50 m-auto">
        <table className="table table-dark">
          <thead>
            <tr>
              {arr.map((round, idx) => {
                return <td key={idx}>{round}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
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
