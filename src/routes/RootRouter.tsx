import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
// import SinglePage from '../pages/SinglePage/SinglePage';
import Admin from '../pages/Admin/Admin';
import LoginPage from '../configs/adminConfigs/LoginPage';
import { useAuth } from '../configs/adminConfigs/AuthContext';


const RootRouter = () => {
    const { isLogin } = useAuth();
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            {/* <Route path="/category/:id/single/:id" element={<SinglePage />} /> */}


            <Route path="/vega-admin-login" element={<LoginPage />} />
            <Route path="/vega-admin" element={isLogin ? <Admin /> : <Navigate to="/vega-admin-login" replace />} />

            {/* Redirect to home if no route matches */}
        </Routes>
    );
};

export default RootRouter;