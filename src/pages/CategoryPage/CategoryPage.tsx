import { FakeDataEntry } from "../../components/App/App"
import styles from "./CategoryPage.module.css"
import { Cards, Content } from "./components"

const CategoryPage = ({fakeData}:{fakeData: FakeDataEntry[]}) => {
    return (
        <div className={styles.category}>
            <Content />
            <Cards fakeData={fakeData}/>
        </div>
    )
}

export default CategoryPage
