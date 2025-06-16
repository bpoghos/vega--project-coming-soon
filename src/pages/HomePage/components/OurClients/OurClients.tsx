import { Container } from "react-bootstrap";
import { OurClientsContent } from "../../../../constants/constants";
import styles from "./OurClients.module.scss";

const OurClients: React.FC = () => {
  const logoData = [
    "https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png",
    "https://e7.pngegg.com/pngimages/361/627/png-clipart-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/768px-Wikimedia-logo.png",
    "https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJe_mCEynMS8WdCoofU7AyWV93nmRtQf4o3w&usqp=CAU",
    "https://w7.pngwing.com/pngs/505/437/png-transparent-superman-logo-superman-logo-batman-superman-logo-comics-heroes-text-thumbnail.png",
    "https://e7.pngegg.com/pngimages/779/61/png-clipart-logo-idea-cute-eagle-leaf-logo-thumbnail.png",
    "https://e7.pngegg.com/pngimages/361/627/png-clipart-leaf-logo-green-leaves-green-and-teal-leaf-logo-text-maple-leaf.png",
  ];

  return (
    <section className={styles.ourClients}>
      <Container className={styles.container}>
        <div className={styles.subtitleWrapper}>
          <h6 className={styles.subtitle}>
            <em>{OurClientsContent.SUBTITLE}</em>
          </h6>
        </div>
        <hr className={styles.separator} />
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{OurClientsContent.TITLE}</h2>
        </div>
      </Container>

      {/* Animated Carousel */}
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {/* Duplicate the logoData to create a seamless loop */}
          {logoData.map((logo, index) => (
            <div className={styles.carouselItem} key={`original-${index}`}>
              <img
                className={styles.carouselImage}
                src={logo}
                alt={`Client logo ${index + 1}`}
              />
            </div>
          ))}
          {logoData.map((logo, index) => (
            <div className={styles.carouselItem} key={`duplicate-${index}`}>
              <img
                className={styles.carouselImage}
                src={logo}
                alt={`Client logo duplicate ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;