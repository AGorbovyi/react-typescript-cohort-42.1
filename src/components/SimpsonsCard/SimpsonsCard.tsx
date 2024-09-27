// import { homerSimpson, getFullName } from "./data";
// import getHomerHobby from "./data";
// import getHomerHobby, { homerSimpson, getFullName } from "./data";
// Импорт всего что экспортируется из файла
// import * as simpsonsData from "./data";
import { CardProps } from "./types";

import "./styles.css";

// function SimponsCard(props) {
function SimponsCard({
  firstName,
  lastName,
  avatar,
  job,
  hobby = "No Hobby",
}: CardProps) {
  // PROPS
  // 1. props - это обьект
  // 2. props - возможность передвать данные из одного компонента(родительского компонента) в другой(дочерний)

  // const image = <img className="avatar" src={homerSimpson.avatar} alt="Avatar" />;
  // const userhobby = getHomerHobby();
  // console.log(simpsonsData.default()); //  это getHomerHobby. default - это то что вы экспортировали как default

  const getSimpsonName = () => {
    return `${firstName} ${lastName}`;
  };

  return (
    <div className="card-wrapper">
      {/* {image} */}
      {/* {homerSimpson.avatar ? (
        <img className="avatar" src={homerSimpson.avatar} alt="Avatar" />
      ) : (
        <img
          className="avatar"
          src={
            "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png"
          }
          alt="Avatar"
        />
      )} */}
      {/* Условный рендеринг */}
      {/* {homerSimpson.avatar && <img className="avatar" src={""} alt="Avatar" />} */}
      <img className="avatar" src={avatar} alt="Avatar" />
      <p className="card-item">Full name: {getSimpsonName()} </p>
      <p className="card-item">Job: {job}</p>
      <p className="card-item">Hobby: {hobby}</p>
    </div>
  );
}

export default SimponsCard;
