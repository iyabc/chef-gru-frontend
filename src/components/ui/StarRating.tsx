import React from 'react';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const StarRating: React.FC<StarRatingProps> = ({ value, setValue }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`text-3xl ${
              index <= value ? 'text-primary' : 'text-background'
            } hover:text-primary`}
            onMouseEnter={() => !clicked && setValue(index)}
            onClick={() => {
              setValue(index);
              setClicked(true);
            }}
          >
            <FaStar />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
