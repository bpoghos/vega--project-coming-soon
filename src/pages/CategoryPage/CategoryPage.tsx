// import { FakeDataEntry } from "../../components/App/App"
import Cards from "./components/Cards/Cards"
import styles from "./CategoryPage.module.scss"


const CategoryPage = (/* {fakeData}:{fakeData: FakeDataEntry[]} */) => {
    return (
        <main className={styles.category}>
            <Cards/>
        </main>
    )
}

export default CategoryPage
