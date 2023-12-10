import Header from "./components/header/Header";
import Lesson from "./page/Lesson";
import LessonCard from "./components/lessoncard/LessonCard";
import React, { useState } from "react";
import data from "./helper/data";

function App() {
  const [item, setItem] = useState(data);

  console.log(data);
  return (
    <div>
      <Header />
      <Lesson />
      <div className="card">
        <h1 className="today">{item.length} lessons today</h1>
        <LessonCard data={item} />
        <div className="button">
          <button onClick={() => setItem([])}>Clear List</button>
        </div>
      </div>
    </div>
  );
}

export default App;
