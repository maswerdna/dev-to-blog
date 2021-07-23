import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Stories from './Stories';
import SideNav from './SideNav';
import Listings from './Listings';

function Home({data}) {
    const {query, failure, posts, handleChange} = data;
    return (
        <>
            <Header />
            <div id="page-content">
                <div id="page-content-inner">
                    <div id="content-layout" className="grid-3-l-r">
                        <div id="index-left">
                            <SideNav />
                        </div>
                        <main id="index-main">
                            <Navbar query={query} onChange={handleChange} />
                            <div id="homepage-feed" style={{minHeight: '90vh'}}>
                                <div id="rendered-article-feed">
                                    <Stories posts={posts} failure={failure} />
                                </div>
                            </div>
                        </main>
                        <div id="index-right">
                            <Listings />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;