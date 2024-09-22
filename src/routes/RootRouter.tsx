import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage/HomePage'
import CategoryPage from '../pages/CategoryPage/CategoryPage'
import SinglePage from '../pages/SinglePage/SinglePage'
import { FakeDataEntry } from '../components/App/App'
import AboutUs from '../pages/AboutUsPage/AboutUs'



const rootRouter = ({fakeData}: {fakeData: FakeDataEntry[]}) => {
    return (
        <Routes>
            <Route path='/' element={<HomePage fakeData={fakeData}/>} />
            <Route path='/projects' element={<CategoryPage fakeData={fakeData}/>} />
            <Route path='/projects/:id' element={<SinglePage  fakeData={fakeData}/>} />
            <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
    )
}

export default rootRouter
