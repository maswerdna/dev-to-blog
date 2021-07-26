import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Stories from './Stories';
import SideNav from './SideNav';
import Listings from './Listings';
import Hamburger from './Hamburger';

function Home({data}) {
    const {query, failure, posts, handleChange, SideNavToggler, isShowing} = data;
    return (
        <>
            <Header toggler={SideNavToggler} />
            <Hamburger toggler={SideNavToggler} show={isShowing} />
            <div id="page-content">
                <div id="page-content-inner">
                    <div id="content-layout" className="grid-3-l-r">
                        <SideNav id="index-left" />
                        <main id="main-content">
                            <Navbar query={query} onChange={handleChange} />
                            <div id="homepage-feed" style={{minHeight: '90vh'}}>
                                <div id="rendered-article-feed">
                                    <Stories posts={posts} failure={failure} />
                                </div>
                            </div>
                        </main>
                        <Listings id="index-right" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;