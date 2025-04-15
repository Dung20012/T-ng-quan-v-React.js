import React from 'react';

const Calculation = () => {
  const a = 10;
  const b = 10;

  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const multiply = (x, y) => x * y;
  const divide = (x, y) => y !== 0 ? (x / y).toFixed(2) : "Không thể chia cho 0";

  return (
    <div>
      <h1>Danh sách kết quả</h1>
      <ul>
        <li>10 + 10 = {add(a, b)}</li>
        <li>10 - 10 = {subtract(a, b)}</li>
        <li>10 * 10 ={multiply(a, b)}</li>
        <li>10 / 10 ={divide(a, b)}</li>
      </ul>
    </div>
  );
};

export default Calculation;
