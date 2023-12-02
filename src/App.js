import Header from "./components/header/Header";
import Lesson from "./page/Lesson";
import LessonCard from "./components/lessoncard/LessonCard";

import data from "./helper/data";

function App() {
  console.log(data);
  return (
    <div>
      <Header />
      <Lesson />
      <LessonCard data={data} />
    </div>
  );
}

export default App;
