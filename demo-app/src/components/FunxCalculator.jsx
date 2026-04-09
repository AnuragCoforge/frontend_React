import React from "react";
import { useState } from "react";

function FunxCalculator() {
  const [fnum, setFnum] = useState();
  const [snum, setSnum] = useState();
  const [res, setRes] = useState();

  // const handleFnumChange=()=>{
  //     setFnum(event.target.fnum);
  // }

  return (
    <div class="shadow">
      <form action="" class="d-flex flex-column justify-content-center align-items-center">
        <div>
          <label for="fnum">FirstNum</label>
          <input
            type="number"
            name="fnum"
            value={fnum}
            onChange={(event) => {
              setFnum(Number(event.target.value));
            }}
          />
        </div>

        <div>
          <label for="snum">SecondNum</label>
          <input
            type="number"
            name="snum"
            value={snum}
            onChange={(event) => {
              setSnum(Number(event.target.value));
            }}
          />
        </div>

        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setRes(fnum + snum);
            }}
          >
            Add
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              setRes(fnum - snum);
            }}
          >
            Sub
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              setRes(fnum / snum);
            }}
          >
            Div
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              setRes(fnum * snum);
            }}
          >
            Mul
          </button>
        </div>
      </form>
      <h1>{res}</h1>
    </div>
  );
}

export default FunxCalculator;
