import React, { useState } from 'react';
import { useHistory } from 'react-router';

function SearchBar() {
    const history = useHistory();
    //
    const [q, setQ] = useState('');
    const onChange = (event) => {
        setQ(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        q.trim() && q && history.push('/search', {q});
    }
    return (
        <div className="mg-h16 fx-auto t:bl mx-w-420" id="header-search">
            <form onSubmit={onSubmit} method="get" action="/search" acceptCharset="UTF-8">
                <input onChange={onChange} value={q} className="bord-1 b-r5 fw pd-7-8 form-bg f-16 sh-focus lh-24" type="text" name="q" placeholder="Search..." autoComplete="off" aria-label="search" />
            </form>
        </div>
    )
}

function Icons() {
    return (
        <div className="flex fx-a-center fh mg-la">
            <a className="flex icon-btn box-40 pd8 mg-h4 t:hd" id="search-link" aria-label="Search" href="/search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a4udf2f13lslmubl61zr9cl8enur4bkz" className="crayons-icon">
                    <title id="a4udf2f13lslmubl61zr9cl8enur4bkz">Search</title>
                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
                </svg>
            </a>
            <a href="/new" className="pd-8-16 mg-r8 t:bl c-btn bg-btn b-r5 sh-btn b5">Create Post</a>
            <a href="/connect" id="connect-link" className="flex icon-btn box-40 pd8 mg-h4" aria-label="Connect">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a8fne8rq4jpyf83tmg5zoyff8e0c36ma" className="nav-icon">
                    <title id="a8fne8rq4jpyf83tmg5zoyff8e0c36ma">Connect</title>
                    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 012 12zm4.828 8H12a8 8 0 10-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 11-8 0z"></path>
                </svg>
                <span className="crayons-indicator crayons-indicator--accent hidden" id="connect-number"></span>
            </a>
            <a href="/notifications" id="notifications-link" className="flex icon-btn box-40 pd8 mg-h4" aria-label="Notifications">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="afox6vyec8uahiheltr2ly5c26d2uxwm" className="nav-icon">
                    <title id="afox6vyec8uahiheltr2ly5c26d2uxwm">Notifications</title>
                    <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                </svg>
                <span className="crayons-indicator crayons-indicator--critical hidden" id="notifications-number"></span>
            </a>
            <div className="flex fx-a-center fh" id="">
                <button type="button" className="pd2 bord-2 mg-h8 nav-image cur-pt W c-w b-r50pc" id="" aria-label="Navigation menu" aria-expanded="false">
                    <span className="box-32 ov-h bl b-r50pc">
                        <img className="fw fh" alt="" id="nav-profile-image" src="https://res.cloudinary.com/practicaldev/image/fetch/s--qqLY3aAA--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/643615/049e9a1c-b89a-495a-8205-a4e3114ab3cb.jpeg" />
                    </span>
                </button>
                <div className="crayons-dropdown left-2 right-2 s:right-4 s:left-auto p-0 crayons-header__menu__dropdown inline-block"></div>
            </div>
        </div>
    )
}

function ProfileOptions() {
    return (
        <ul className="hd" id="">
            <li id="user-profile-link-placeholder" className="border-0 border-b-1 border-solid border-base-20 p-1 mb-1">
            <a id="first-nav-link" className="crayons-link crayons-link--block" href="/maswerdna">
                <div>
                <span className="fw-medium block">Samson Andrew</span>
                <small className="fs-s color-base-50">@maswerdna</small>
                </div>
            </a>
            </li>

            <li className="px-1 js-header-menu-admin-link hidden">
            <a href="/admin" className="crayons-link crayons-link--block" data-no-instant="">Admin</a>
            </li>
            <li className="px-1"><a href="/dashboard" className="crayons-link crayons-link--block">Dashboard</a></li>
            <li className="px-1"><a href="/mod" className="crayons-link crayons-link--block trusted-visible-block">Moderator Center</a></li>
            <li className="px-1"><a href="/new" className="crayons-link crayons-link--block">Create Post</a></li>
            <li className="px-1"><a href="/readinglist" className="crayons-link crayons-link--block">Reading list</a></li>
            <li className="border-0 border-b-1 border-solid border-base-20 px-1 pb-1">
            <a href="/settings" className="crayons-link crayons-link--block" id="second-last-nav-link">Settings</a>
            </li>

            <li className="px-1 py-1">
            <a href="/signout_confirm" className="crayons-link crayons-link--block" id="last-nav-link">Sign Out</a>
            </li>
        </ul>
    )
}




function Header() {
    return (
        <header className="hdr W h-56 pos-f t0 l0 r0 z100">
            <div className="flex h-56 fx-a-center t:pd">
                <button className="icon-btn cur-pt W mg-v0 mg-h8 bord-0 box-40 t:fx fx-j-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3xkri89y8zj0hr291vk98hif2361gt3" className="crayons-icon">
                        <title id="a3xkri89y8zj0hr291vk98hif2361gt3">Navigation menu</title>
                        <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                    </svg>
                </button>
                <a href="/" className="flex fx-a-center" aria-label="DEV Community Home">
                    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="40" rx="3" style={{fill: '#000'}}></rect>
                        <path d="M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z" style={{fill: '#fff'}}></path>
                    </svg>
                </a>
                <SearchBar />
                <Icons />
                <ProfileOptions />
            </div>
        </header>
    )
}

export default Header;