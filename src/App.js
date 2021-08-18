import { Button } from '@material-ui/core';
import React, { useState, useReducer } from 'react';
import { useSelector, useDispatch } from "react-redux";
import MainBoard from './components/mainBoard';

function App() {

  const dispatch = useDispatch();
  const players = useSelector(state => state.playersReducer)
  const tipsOpen = useSelector(state => state.tipToggleReducer)
  const corrWord = useSelector(state => state.correctWordReducer)

  return (
    <div>
      <MainBoard/>
      LAST UPDATED 08/18/2021
    </div>
  );
}
export default App;