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

  return (
    <div className="hw07-wrapper">
      <Feedback />
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
