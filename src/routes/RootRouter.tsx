import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
// import SinglePage from '../pages/SinglePage/SinglePage';
import Admin from '../pages/Admin/Admin';


const RootRouter = ({ isLogin }: { isLogin: boolean }) => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            {/* <Route path="/category/:id/single/:id" element={<SinglePage />} /> */}

            {/* Admin Login Route */}
            <Route path="/vega-admin" element={<Admin />} />

            {/* Admin Dashboard Route */}
            {/* <Route
                path="/trio-admin"
                element={
                    isLogin ? (
                        <ConcertsProvider>
                            <Admin />
                        </ConcertsProvider>
                    ) : (
                        <Navigate to="/vega-admin-login" replace />
                    )
                }
            /> */}
        </Routes>
    );
};

export default RootRouter;