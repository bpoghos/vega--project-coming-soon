import { FakeDataEntry } from "../../components/App/App"
import { LastProjects, Main, OurClients, Testimonials } from "./components"
import styles from "./HomePage.module.scss"


const HomePage = ({ fakeData }: { fakeData: FakeDataEntry[] }) => {


    return (
        <main role="main" className={styles.homePage}>
            <Main />
            <LastProjects fakeData={fakeData} />
            <OurClients />
            <Testimonials />
        </main>
    )
}

export default HomePage
