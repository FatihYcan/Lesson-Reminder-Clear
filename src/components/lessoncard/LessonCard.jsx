import React from "react";
import CardStyle from "./lesson.module.css";

const LessonCard = ({ data, clearLessons }) => {
  return (
    <div className={CardStyle["card"]}>
      <h1 className={CardStyle["today"]}>{data.length} lessons today</h1>
      <div className={CardStyle["content"]}>
        {data.map(({ id, name, hour, image }) => (
          <div key={id} className={CardStyle["title"]}>
            <img
              className={CardStyle["img"]}
              src={image}
              alt="img"
              width={"100px"}
            />
            <div className={CardStyle["lesson"]}>
              <h3 className={CardStyle["name"]}>
                <span>Lesson Name: </span>
                {name}
              </h3>
              <h3>
                <span>Lesson Hour: </span>
                {hour}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <button onClick={clearLessons}>Clear List</button>
    </div>
  );
};

export default LessonCard;
