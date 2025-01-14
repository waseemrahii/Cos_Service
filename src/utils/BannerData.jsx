import { useLocation, useNavigate } from 'react-router-dom';

export const BannerData = (defaultPageName) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    const getPageName = () => {
        const path = location.pathname;
        
        const segments = path.split('/').filter(Boolean);
        const mainRoute = segments[0] || '';

        // Show "Register" when on the root or register page
        const pageName = path === '/' || mainRoute === 'register'
            ? 'Register'
            : mainRoute.charAt(0).toUpperCase() + mainRoute.slice(1);
        
        return pageName;
    };

    return {
        handleNavigation,
        getPageName
    };
};
