import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const StarRating: React.FC<StarRatingProps> = ({ value, setValue }) => {
  const [hovered, setHovered] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    if (!clicked && hovered !== value) {
      setHovered(value);
    } else {
      setHovered(0);
    }
  };

  const handleClick = (index: number) => {
    setValue(index);
    setClicked(true);
  };

  const handleReset = () => {
    setValue(0);
    setHovered(0);
    setClicked(false);
  };

  return (
    <div>
      <div>
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={`text-3xl ${
                (index <= value && !hovered) || index <= hovered
                  ? 'text-primary'
                  : 'text-background'
              } hover:text-primary`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => handleClick(index)}
            >
              <FaStar />
            </button>
          );
        })}
      </div>
      <button type="button" onClick={handleReset} className="reset-button">
        Reset
      </button>
    </div>
  );
};

export default StarRating;
