import { useState } from "react";
import { Button } from "react-bootstrap";
// import { ConcertsDataProps } from "../../../../../../interface/interface";
import style from "./Card.module.scss";
import { formatFirestoreDate } from "../../../../../../configs/firebase/firebaseConfigs";
import { NewDataProps } from "../../../../../../components/App/data";


const Card = ({ building }: { building: NewDataProps }) => {
  // const { month, day, year } = formatFirestoreDate(concert.date);


  return (
    <>
      <tr className={style.cardRow}>
        <td>{building.title}</td>
        <td>{building.subtitle}</td>
        <td>{building.description}</td>
        <td>{building.category}</td>
        <td>
          <img
            src={building.profileImage}
            alt={building.title}
            className={style.profileImage}
          />
        </td>

        <td>{typeof building.date === "string" ? building.date : building.date.toLocaleDateString()}</td>
        <td>{building.location}</td>
        <td>{building.area}</td>
        <td>{building.client}</td>
        <td>{building.architect}</td>
        <td>{building.stage}</td>
        <td>
          {building.images.map((image, index) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              key={index}
              src={image}
              alt={`${building.id} image ${index + 1}`}
              className={style.multipleImage}
            />
          ))}

        </td>
      </tr>

      
    </>
  );
};

export default Card;
