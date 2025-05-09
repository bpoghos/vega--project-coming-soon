import { Carousel, Container } from "react-bootstrap"
import { TestimonialsContent } from "../../../../constants/constants"
import styles from "./Testimonials.module.scss"

const Testimonials: React.FC = () => {


    const TestimonialsData = [
        {
            id: 1,
            name: "Name Surname",
            job: "job opportunity",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation"
        },
        {
            id: 2,
            name: "2Name Surname",
            job: "job opportunity",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation"
        },
        {
            id: 3,
            name: "3Name Surname",
            job: "job opportunity",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation"
        },
        {
            id: 4,
            name: "4Name Surname",
            job: "job opportunity",
            text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididuntut laboret dolore magna aliqua enim minim veniam exercitation"
        },
    ]


    return (
        <section className={styles.testimonials}>
            <h2 className={styles.testimonialsTitle}>{TestimonialsContent.TITLE}</h2>
            <p className={styles.testimonialsSubtitle}><em>{TestimonialsContent.DESCRIPTION}</em></p>
            <Container>
                <Carousel interval={3000} wrap={true} className={styles.test} indicators={false}>
                    {TestimonialsData.map((item) => (
                        <Carousel.Item key={item.id}>
                            <figure className={styles.card}>
                                <img
                                    alt={`Avatar of ${item.name}`}
                                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                                />
                                <figcaption>
                                    <h3>{item.name}</h3>
                                    <span><em>{item.job}</em></span>
                                </figcaption>
                                <blockquote>
                                    <p>{item.text}</p>
                                </blockquote>
                            </figure>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </section>
    )
}

export default Testimonials
