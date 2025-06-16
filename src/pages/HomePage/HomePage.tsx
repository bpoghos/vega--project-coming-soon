import { AboutUsPreview, LastProjects, Main, OurClients, Testimonials } from "./components"
import ClientsFeedback from "./components/ClientsFeedback/ClientsFeedback"
import ContactUs from "./components/ContactUs/ContactUs"

import styles from "./HomePage.module.scss"


const HomePage = () => {

    return (
        <main role="main" className={styles.homePage}>
            <Main />
            <AboutUsPreview />
            <LastProjects />
            <OurClients />
            <ClientsFeedback />
            <ContactUs />
        </main>
    )
}

export default HomePage
