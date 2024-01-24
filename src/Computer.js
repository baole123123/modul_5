import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseInt(num1) - parseInt(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseInt(num1) * parseInt(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = parseInt(num1) / parseInt(num2);
    setResult(quotient);
  };
  const handleReset = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <input type="number" value={num1} onChange={handleNum1Change} style={{ width: '300px', height: '20px' }} />
        <br></br>
        <input type="number" value={num2} onChange={handleNum2Change} style={{ width: '300px', height: '20px' }} />
        <br></br>

        <button onClick={handleAddition} style={{ width: '50px', height: '25px' }}>+</button>
        <button onClick={handleSubtraction} style={{ width: '50px', height: '25px' }}>-</button>
        <button onClick={handleMultiplication} style={{ width: '50px', height: '25px' }}>x</button>
        <button onClick={handleDivision} style={{ width: '50px', height: '25px' }}>/</button>
        <h2>Kết quả: {result}</h2>

        <button onClick={handleReset} style={{ width: '50px', height: '25px' }}>Xóa</button>
      </div>
    </div>

  );
}

export default Calculator;
