import React from 'react';

const ColorBox = () => {
  const colors = ['red', 'blue', 'green'];

  const boxStyle = (color) => ({
    width: '200px',
    height: '200px',
    backgroundColor: color,
    margin: '10px',
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {colors.map((color, index) => (
          <div key={index} style={boxStyle(color)}></div>
        ))}
      </div>
    </div>
  );
};

export default ColorBox;
