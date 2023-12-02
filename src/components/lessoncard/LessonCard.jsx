import CardStyle from "./lesson.module.css";

const LessonCard = ({ data }) => {
  return (
    <div className={CardStyle["card"]}>
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
  );
};

export default LessonCard;
