import { cardInfo } from "../constants";
import { Button } from "./Button";

export const JobCard = () => {

  const imageStyle = (index) => ({
    background: cardInfo[index].gradient
  });

  return (
    <>
      {cardInfo.map((cardInfo, index) => (
        <article key={index} className="card grid-center">
          <div className="flex">
            <img
              src={cardInfo.image}
              className="icon"
              width={32}
              height={32}
              alt=""
              aria-hidden="true"
              loading="lazy"
              style={imageStyle(index)}
            />
            <h3 className="position">{cardInfo.position}</h3>
          </div>
          <Button cardInfo={cardInfo} button={Button.button} />
        </article>
      ))}
    </>
  );
}

