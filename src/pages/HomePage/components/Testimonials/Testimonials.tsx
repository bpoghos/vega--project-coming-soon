import { Carousel, Container } from "react-bootstrap"
import { TestimonialsContent } from "../../../../constants/constants"
import styles from "./Testimonials.module.css"

const Testimonials: React.FC = () => {
    return (
        <div className={styles.testimonials}>
            <h2>{TestimonialsContent.TITLE}</h2>
            <p>{TestimonialsContent.DESCRIPTION}</p>
            <Container>
                <Carousel interval={5000} wrap={true} className={styles.test}>
                    <Carousel.Item>
                        <div className={styles.card}>
                            <img alt="avatar" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
                            <h3>Name Surname</h3>
                            <span>job opportunity</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles.card}>
                            <img alt="avatar" src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png" />
                            <h3>Name Surname</h3>
                            <span>job opportunity</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default Testimonials
