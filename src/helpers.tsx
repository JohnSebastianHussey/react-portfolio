import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollOptions: ScrollToOptions = { top: 0, left: 0, behavior: 'instant' };
        window.scroll(scrollOptions);
    }, [pathname]);

    return null;
};

export default useScrollToTop;
