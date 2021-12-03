// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Counter from './Counter/Counter';
import InputForm from './InputForm/InputForm';

const App = () => {
  return (
    <>
      <h1> Состояние компонента</h1>
      <Counter initualValue="10" />
      <InputForm />
    </>
  );
};

export default App;
