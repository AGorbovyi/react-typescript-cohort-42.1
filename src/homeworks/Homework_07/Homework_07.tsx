import { useState } from "react";

import Button from "components/Button/Button";
import Feedback from "components/Feedback/Feedback";
import Input from "components/Input/Input";
import LoginForm from "components/LoginForm/LoginForm";
import SimpsonsCard from "components/SimpsonsCard//SimpsonsCard";
import Modal from "components/Modal/Modal";

import "./styles.css";

function Homework_07() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

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
    <div className="hw07-wrapper">
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

      <div className="input-container">
        <p className="title">Input form</p>
        <Input
          id="login-email"
          label="Email"
          placeholder="Enter your email"
          name="email"
        />
        <Input
          id="login-password"
          label="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
        />
      </div>

      <LoginForm />
      <SimpsonsCard
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        avatar={homerSimpson.avatar}
        hobby={homerSimpson.hobby}
        job={homerSimpson.job}
      />
      {/* <Modal /> */}
    </div>
  );
}

export default Homework_07;
