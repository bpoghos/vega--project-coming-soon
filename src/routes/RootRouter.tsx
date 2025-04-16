import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage/HomePage'
import CategoryPage from '../pages/CategoryPage/CategoryPage'
// import AboutUs from '../pages/AboutUsPage/AboutUs'



const rootRouter = (/* {fakeData}: {fakeData: FakeDataEntry[]} */) => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/category/:id' element={<CategoryPage />} />
            {/* <Route path='/category/:id/single/:id' element={<SinglePag />} /> */}
            {/* <Route path='/aboutus' element={<AboutUs />} /> */}
        </Routes>
    )
}

export default rootRouter
