import React from 'react';
import {Link} from 'react-router-dom';


function Navbar({query, onChange}) {
    return (
        <header className="flex header justify-between items-center p-2 px-3 m:p-0 m:px-0 m:pb-2">
            <h1 className="crayons-subtitle-2">Posts</h1>

            <nav className="crayons-tabs hidden s:flex" aria-label="View posts by">
                <ul className="crayons-tabs__list">
                    <li>
                        <Link data-text="Feed" to="/" className={"crayons-tabs__item" + (query === "/" ? ' crayons-tabs__item--current' : '')}>Feed</Link>
                    </li>
                    <li>
                        <Link data-text="Week" to="/top/week" className={"crayons-tabs__item" + (query === "/top/week" ? ' crayons-tabs__item--current' : '')}>Week</Link>
                    </li>
                    <li>
                        <Link data-text="Month" to="/top/month" className={"crayons-tabs__item" + (query === "/top/month" ? ' crayons-tabs__item--current' : '')}>Month</Link>
                    </li>
                    <li>
                        <Link data-text="Year" to="/top/year" className={"crayons-tabs__item" + (query === "/top/year" ? ' crayons-tabs__item--current' : '')}>Year</Link>
                    </li>
                    <li>
                        <Link data-text="Infinity" to="/top/infinity" className={"crayons-tabs__item" + (query === "/top/infinity" ? ' crayons-tabs__item--current' : '')}>Infinity</Link>
                    </li>
                    <li>
                        <Link data-text="Latest" to="/latest" className={"crayons-tabs__item" + (query === "/latest" ? ' crayons-tabs__item--current' : '')}>Latest</Link>
                    </li>
                </ul>
            </nav>

            <select className="right s:hidden f-16 pd5 b-r5 sh-focus" value={query} onChange={onChange}>
                <option value="/">Feed</option>
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