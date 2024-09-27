import { useState } from "react";

import Button from "../Button/Button";

import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const onLike = () => {
    setLikes((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setDislikes((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={onLike} />
          <p className="count">{likes}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDislike} />
          <p className="count">{dislikes}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
