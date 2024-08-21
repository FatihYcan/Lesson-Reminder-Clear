import React, { useState } from "react";
import Header from "./components/header/Header";
import Lesson from "./page/Lesson";
import LessonCard from "./components/lessoncard/LessonCard";
import data from "./helper/data";

function App() {
  const [lessons, setLessons] = useState(data);
  // console.log(lessons);

  const clearLessons = () => {
    setLessons([]);
  };

  return (
    <div>
      <Header />
      <Lesson />
      <LessonCard data={lessons} clearLessons={clearLessons} />
    </div>
  );
}

export default App;
