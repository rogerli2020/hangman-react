import { Button } from '@material-ui/core';
import React, { useState, useReducer } from 'react';
import { useSelector, useDispatch } from "react-redux";
import MainBoard from './components/mainBoard';

function App() {
  return (
    <div>
      <MainBoard/>
      LAST UPDATED 08/30/2021
    </div>
  );
}

export default App;