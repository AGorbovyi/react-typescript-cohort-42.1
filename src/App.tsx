import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from "pages/UserApp/Home/Home";
import Login from "pages/UserApp/Login/Login";
import About from "pages/UserApp/About/About";
import ContactUsPage from "pages/UserApp/ContactUsPage/ContactUsPage";


// HOMEWORKS
import Homework_06 from "homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_08 from "homeworks/Homework_08/Homework_08";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_11 from "homeworks/Homework_11/Homework_11";

// LESSONS
import Lesson_06 from "lessons/Lesson_06/Lesson_06";
import Lesson_07 from "lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";

//CONSULTATIONS
// import Consultation_03 from "consultations/Consultation_03/Consultation_03";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
      {/* <Lesson_06 /> */}
      {/* <Homework_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Homework_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Homework_09 /> */}
      {/* <Lesson_11 /> */}
      {/* <Homework_11 /> */}
    </BrowserRouter>
  );
}

export default App;
