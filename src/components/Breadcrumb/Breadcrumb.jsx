import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router';
import './Breadcrumb.css';

function Breadcrumb() {
    const paths = useLocation();
    const [path, setPath] = useState('');

    useEffect(() => {
        const now = paths.pathname.replace('/', '');
        setPath(now);
    }, [paths.pathname]);

    const showPath = (path) => {
        if (path.length === 0) return null;
        return (
            <div className='breadcrumb'>
                <p> <Link to={'/'}>home</Link> / {path}</p>
            </div>
        )
    }

    return (
        showPath(path)
    );
}

export default Breadcrumb;