import React, { useState } from "react";
import Box from "../Box";
import "./styles.css";

const board = [[], [], []];

function Game() {
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  function changeTurn(row, col) {
    setTurn((turn) => (turn === "X" ? "O" : "X"));

    board[row][col] = turn;
    let w = checkForWin();

    if (!w) {
    } else {
      setWinner(`Kazanan: ${w}`);
    }
  }

  function checkForWin() {
    //satıra göre
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      //console.log(row);
      if (row[0] === row[1] && row[1] === row[2] && row[0]) {
        return row[0];
      }
    }
    //sütuna göre
    for (let i = 0; i < board.length; i++) {
      const el0 = board[0][i];
      const el1 = board[1][i];
      const el2 = board[2][i];

      if (el0 === el1 && el1 === el2 && el0) {
        return el0;
      }
    }
    const sag0 = board[0][0];
    const sag1 = board[1][1];
    const sag2 = board[2][2];

    if (sag0 === sag1 && sag1 === sag2 && sag0) {
      return sag0;
    }
    const sol0 = board[0][2];
    const sol1 = board[1][1];
    const sol2 = board[2][0];

    if (sol0 === sol1 && sol1 === sol2 && sol0) {
      return sol0;
    }

    return false;
  }

  return (
    <div id="game">
      <div id="winnerText">"{winner}"</div>
      <div className="row">
        <Box row={0} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box row={1} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box row={2} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
    </div>
  );
}

export default Game;
