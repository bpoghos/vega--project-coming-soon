import styles from "./ClientsFeedback.module.scss";
import Carousel from 'react-bootstrap/Carousel';



interface Client {
    name: string;
    profession: string;
    feedback: string;
    image: string;
}


const ClientsFeedback = () => {

    const clientData: Client[]  = [
        {
            name: "John Dow",
            profession: "Web Developer",
            feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://i.pravatar.cc/300?img=1"
        },
        {
            name: "Jane Smith",
            profession: "Graphic Designer",
            feedback: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "https://i.pravatar.cc/300?img=2"
        },
        {
            name: "Michael Johnson",
            profession: "Project Manager",
            feedback: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: "https://i.pravatar.cc/300?img=3"
        },
        {
            name: "Emily Davis",
            profession: "Software Engineer",
            feedback: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://i.pravatar.cc/300?img=4"
        }
    ];



    return (
        <section className={styles.clientsFeedback}>
            <h2>Clients <br />Feedback</h2>
            <Carousel controls={false} indicators={false} pause={false} interval={6000} className={`carousel ${styles.carousel}`}>
                {clientData.map((client, index) => (
                    <Carousel.Item key={index} className={styles.carouselItem}>
                        <div className={styles.background}>
                            <div className={styles.box}></div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.imageBox}>
                                <img src={client.image} alt={`Client ${index + 1}`} className={styles.image} />
                            </div>
                            <div className={styles.feedback}>
                                <h3 className={styles.name}>{client.name}</h3>
                                <h5 className={styles.profession}>{client.profession}</h5>
                                <p className={styles.text}>{client.feedback}</p>
                            </div>
                        </div>

                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}

export default ClientsFeedback
