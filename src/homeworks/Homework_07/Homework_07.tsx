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
  const [isModdalOpened, setIsModalOpened] = useState<boolean>(false);

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

  const openModal = (): void => {
  }
  
  const closeModal = (): void => {
  }

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


      <Button onClick={openModal} name="Open Modal"/>
    {isModdalOpened && (
    <Modal closeModal={closeModal}>
        <div className="succes-modal-wrapper">
          <div className="modal-info-container">
            <p className="modal-info">
              Your data has been saved successfully!!!
            </p>
            <img
              className="modal-icon"
              src="https://w7.pngwing.com/pngs/442/715/png-transparent-check-mark-computer-icons-icon-design-cheque-successful-angle-logo-grass-thumbnail.png"
              alt="Success Icon"
            />
          </div>
          <Button name="Close Modal" onClick={closeModal} />
        </div>
      </Modal>)}
    </div>
  );
}

export default Homework_07;
