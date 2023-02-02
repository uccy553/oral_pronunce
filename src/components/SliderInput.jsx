import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'

const Slider = () => {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div >
      <input
        type="range"
        min={1}
        max={200}
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <Tooltip content={value} />
    </div>
  );
};

export default Slider;
