import React from 'react';
import {Link} from 'react-router-dom';


function Navbar(props) {
    const query = props.query;
    return (
        <header className="header flex fx-a-center fx-j-sb m:pb-2">
            <h1 className="subtitle-2 left mg0">Posts</h1>
            <nav className="navbar flex mg0 pd0 right min-640">
                <ul className="flex mg0 pd0 cur-pt">
                    <li>
                        <Link to="/dev-to-blog" className={query === "/" ? 'active' : ''}>Feed</Link>
                    </li>
                    <li>
                        <Link to="/top/week" className={query === "/top/week" ? 'active' : ''}>Week</Link>
                    </li>
                    <li>
                        <Link to="/top/month" className={query === "/top/month" ? 'active' : ''}>Month</Link>
                    </li>
                    <li>
                        <Link to="/top/year" className={query === "/top/year" ? 'active' : ''}>Year</Link>
                    </li>
                    <li>
                        <Link to="/top/infinity" className={query === "/top/infinity" ? 'active' : ''}>Infinity</Link>
                    </li>
                    <li>
                        <Link to="/latest" className={query === "/latest" ? 'active' : ''}>Latest</Link>
                    </li>
                </ul>
            </nav>
            <select className="right max-640 f-16 pd5 b-r5 sh-focus" value={query} onChange={props.onChange}>
                <option value="/dev-to-blog">Feed</option>
                <option value="/top/week">Week</option>
                <option value="/top/month">Month</option>
                <option value="/top/year">Year</option>
                <option value="/top/infinity">Infinity</option>
                <option value="/latest">Latest</option>
            </select>
        </header>
    )
}

export default Navbar;