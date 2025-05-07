import { AboutUsPreview, LastProjects, Main, OurClients, Testimonials } from "./components"

import styles from "./HomePage.module.scss"


const HomePage = () => {

    return (
        <main role="main" className={styles.homePage}>
            <Main />
            <AboutUsPreview />
            {/* <LastProjects /> */}
            {/* <OurClients /> */}
            {/* <Testimonials /> */}
        </main>
    )
}

export default HomePage
