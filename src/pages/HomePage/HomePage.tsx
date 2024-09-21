import { FakeDataEntry } from "../../components/App/App"
import { LastProjects, Main, OurClients, Testimonials } from "./components"
import styles from "./HomePage.module.css"


const HomePage = ({fakeData}: {fakeData:FakeDataEntry[]}) => {


    return (
        <div>
            <Main />
            <LastProjects fakeData={fakeData}/>
            {/* <OurClients /> */}
            {/* <Testimonials /> */}
        </div>
    )
}

export default HomePage
