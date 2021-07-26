import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Header from "./Header";
import Hamburger from "./Hamburger";
import SideNav from './SideNav';
import Listings from './Listings';
/**
 * TODO
 * syntax highlighter
 */
const tags_color = {
    webdev: {backgroundColor:"#562765", color:"#ffffff"},
    javascript: {backgroundColor:"#F7DF1E", color:"#000000"},
    react: {backgroundColor:"#222222", color:"#61DAF6"},
    github: {backgroundColor:"#191919", color:"#ffffff"}
}
function Article({data}) {
    let location = useLocation();
    // console.log(location);

    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setFailed(false);
                setArticle({});
                setLoading(true);
                const url = 'https://dev.to/api/articles/' + location.state;
                const api_response = await fetch(url);
                const article = await api_response.json();

                if (api_response.status !== 200) {
                    throw Error(api_response.error);
                }
                // console.log(article);
                setArticle(article);
                setLoading(false);
            } catch (error) {
                // console.log(error);
                setFailed(true);
            }
        }
        location.state && fetchArticle();
    }, [location.state])
    //
    const {SideNavToggler, isShowing} = data;
    return (
        loading ? <div className="W tx-c pd20 b6 bord b-r5 mg-h16">Loading...</div> :
        failed ? <div className="W tx-c pd20 b6 bord b-r5 mg-h16">An error occurred</div> :
        <>
            <Header toggler={SideNavToggler} />
            <Hamburger toggler={SideNavToggler} show={isShowing} />
            <div id="page-content">
                <div id="page-content-inner">
                    <div id="content-layout" className="grid-3-l-r">
                        <aside className="crayons-layout__sidebar-left" >
                            <div className="crayons-article-actions print-hidden">
  <div className="crayons-article-actions__inner">

      <button id="reaction-butt-like" aria-label="Like" aria-pressed="false" className="crayons-reaction crayons-reaction--like activated" data-category="like" title="Heart">
  <span className="crayons-reaction__icon crayons-reaction__icon--inactive">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="crayons-icon">
    <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
</svg>

  </span>
  
  <span className="crayons-reaction__count" id="reaction-number-like">679</span>
</button>

      <button id="reaction-butt-unicorn" aria-label="React with unicorn" aria-pressed="false" className="crayons-reaction crayons-reaction--unicorn activated" data-category="unicorn" title="Unicorn">
  <span className="crayons-reaction__icon crayons-reaction__icon--inactive">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" className="crayons-icon">
    <path d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z" fill="#08090A"></path>
    <path fillRule="evenodd" clip-rule="evenodd" d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z"></path>
</svg>

  </span>
  
  <span className="crayons-reaction__count" id="reaction-number-unicorn">161</span>
</button>

      <button id="reaction-butt-readinglist" aria-label="Add to reading list" aria-pressed="false" className="crayons-reaction crayons-reaction--readinglist activated" data-category="readinglist" title="Saved">
  <span className="crayons-reaction__icon crayons-reaction__icon--inactive">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="crayons-icon">
    <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
</svg>

  </span>
  
  <span className="crayons-reaction__count" id="reaction-number-readinglist">1514</span>
</button>


    <div className="align-center m:relative">
      <button id="article-show-more-button" aria-controls="article-show-more-dropdown" aria-expanded="false" aria-haspopup="true" className="dropbtn crayons-btn crayons-btn--ghost-dimmed crayons-btn--icon-rounded" aria-label="Share post options" data-initialized="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" className="dropdown-icon crayons-icon"><title>More...</title><path fillRule="evenodd" clip-rule="evenodd" d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"></path></svg>

      </button>

      <div id="article-show-more-dropdown" className="crayons-dropdown side-bar left-1 s:left-auto m:left-100">
        <div>
          <button id="copy-post-url-button" className="flex justify-between crayons-link crayons-link--block w-100 bg-transparent border-0" data-posturl="https://dev.to/ankit01oss/7-github-projects-essential-for-every-javascript-developer-258i">
            <span className="fw-bold">Copy Post URL</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="article-copy-icon" aria-hidden="true" className="crayons-icon mx-2 shrink-0"><title>Copy article link to the clipboard</title>
    <path d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"></path>
</svg>

          </button>
          <div id="article-copy-link-announcer" aria-live="polite" className="crayons-notice crayons-notice--success my-2 p-1" hidden="">Copied to Clipboard</div>
        </div>

        <div className="Desktop-only">
          <a target="_blank" className="crayons-link crayons-link--block" rel="noopener" href="https://twitter.com/intent/tweet?text=%227%20GitHub%20projects%20essential%20for%20every%20Javascript%20developer%20%F0%9F%91%A8%F0%9F%8F%BD%E2%80%8D%F0%9F%92%BB%20%F0%9F%9A%80%22%20by%20Ankit%20Anand%20%E2%9C%A8%20%23DEVCommunity%20%20https%3A%2F%2Fdev.to%2Fankit01oss%2F7-github-projects-essential-for-every-javascript-developer-258i">
            Share to Twitter
          </a>
          <a target="_blank" className="crayons-link crayons-link--block" rel="noopener" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fdev.to%2Fankit01oss%2F7-github-projects-essential-for-every-javascript-developer-258i&amp;title=7%20GitHub%20projects%20essential%20for%20every%20Javascript%20developer%20%F0%9F%91%A8%F0%9F%8F%BD%E2%80%8D%F0%9F%92%BB%20%F0%9F%9A%80&amp;summary=Javascript%20is%20so%20widely%20adopted%20that%20most%20developers%20can%27t%20avoid%20it%20entirely%20during%20the%20course%20of...&amp;source=DEV%20Community">
            Share to LinkedIn
          </a>
          <a target="_blank" className="crayons-link crayons-link--block" rel="noopener" href="https://www.reddit.com/submit?url=https%3A%2F%2Fdev.to%2Fankit01oss%2F7-github-projects-essential-for-every-javascript-developer-258i&amp;title=7%20GitHub%20projects%20essential%20for%20every%20Javascript%20developer%20%F0%9F%91%A8%F0%9F%8F%BD%E2%80%8D%F0%9F%92%BB%20%F0%9F%9A%80">
            Share to Reddit
          </a>
          <a target="_blank" className="crayons-link crayons-link--block" rel="noopener" href="https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fdev.to%2Fankit01oss%2F7-github-projects-essential-for-every-javascript-developer-258i&amp;t=7%20GitHub%20projects%20essential%20for%20every%20Javascript%20developer%20%F0%9F%91%A8%F0%9F%8F%BD%E2%80%8D%F0%9F%92%BB%20%F0%9F%9A%80">
            Share to Hacker News
          </a>
          <a target="_blank" className="crayons-link crayons-link--block" rel="noopener" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdev.to%2Fankit01oss%2F7-github-projects-essential-for-every-javascript-developer-258i">
            Share to Facebook
          </a>
        </div>

        <web-share-wrapper shareurl="https://dev.to/ankit01oss/7-github-projects-essential-for-every-javascript-developer-258i" sharetitle="7 GitHub projects essential for every Javascript developer 👨🏽‍💻 🚀" sharetext="Javascript is so widely adopted that most developers can't avoid it entirely during the course of..." template="web-share-button">
        </web-share-wrapper>
        <template id="web-share-button">
          <a href="#" className="dropdown-link-row crayons-link crayons-link--block">Share Post via...</a>
        </template>

        <a href="/report-abuse" className="crayons-link crayons-link--block">Report Abuse</a>
      </div>
    </div>
  </div>
</div>
                        </aside>
                        <main id="main-content" className="crayons-layout__content grid gap-4">
                            <div className="article-wrapper">
                                <article className="crayons-card crayons-article mb-4" id="article-show-container" data-article-id={article.id} data-author-id="" data-path={article.path} data-pinned-article-id="" data-buttons-initialized="true">
                                    <header className="crayons-article__header" id="main-title">
                                        <div className="crayons-article__cover">
                                            <img src={article.cover_image} alt={"Cover image for " + article.title} className="crayons-article__cover__image" />
                                        </div>
                                        <div className="crayons-article__header__meta">
                                            <h1 className="fs-3xl m:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-4 long">{article.title}</h1>
                                            <div className="mb-4 spec__tags">
                                                {article.tags.map(tag => <><Link to={"/t/" + tag} key={tag} className="crayons-tag mr-1" style={tags_color[tag] || {}}><span className="crayons-tag__prefix">#</span>{tag}</Link>&nbsp;</>)}
                                            </div>

                                            <div className="crayons-article__subheader">
                                                <Link to={{pathname: "/" + article.user.username}} className="flex items-center mr-2 mb-4 s:mb-0 fw-medium crayons-link">
                                                    <span className="crayons-avatar crayons-avatar--l mr-2"><img className="crayons-avatar__image" src={article.user.profile_image_90} alt="" /></span>
                                                    <span className="block m:hidden">{article.user.name}</span>
                                                </Link>
                                                <div className="profile-preview-card relative mr-4 mb-4 s:mb-0 fw-medium">
                                                    <button id="profile-preview-trigger" className="profile-preview-card__trigger px-0 crayons-btn crayons-btn--ghost hidden m:block" aria-label="Ankit Anand ✨ profile details" aria-expanded="false" aria-controls="profile-preview-content" aria-haspopup="true" data-initialized="true">{article.user.name}</button>
                                                    <div id="profile-preview-content" className="profile-preview-card__content crayons-dropdown" style={{"--card-color": "#1a1a1a", borderTop: "var(--su-7) solid var(--card-color)"}} data-testid="profile-preview-card">
                                                        <div className="gap-4 grid">
                                                            <div className="-mt-4">
                                                                <Link to={{pathname: "/" + article.user.username}} className="flex">
                                                                    <span className="crayons-avatar crayons-avatar--xl  mr-2 shrink-0">
                                                                        <img src={article.user.profile_image_90} className="crayons-avatar__image" alt="" loading="lazy" />
                                                                    </span>
                                                                    <span className="crayons-link crayons-subtitle-2 mt-5">{article.user.name}</span>
                                                                </Link>
                                                            </div>
                                                            <div className="color-base-70">{"Your curator..."}</div>
                                                            <div className="print-hidden">
                                                                <button name="button" type="button" data-info={{"id":"","className":"User","style":""}} className="crayons-btn follow-action-button whitespace-nowrap w-100 follow-user showing" data-verb="unfollow" data-click-initialized="true">Follow</button>&nbsp;
                                                            </div>
                                                            <div className="user-metadata-details">
                                                                <ul className="user-metadata-details-inner">
                                                                    <li>
                                                                    <div className="key">Email</div>
                                                                        <div className="value">
                                                                            <Link to={"mailto:user@email.com"} rel="noreferrer noopener" target="_blank">user@email.com</Link>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="key">Work</div>
                                                                        <div className="value">
                                                                            User works
                                                                            <span className="opacity-50"> at </span>
                                                                            <Link to={"http://www.example.com"} rel="noreferrer noopener" target="_blank">Company</Link>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="key">Location</div>
                                                                        <div className="value">Users Location</div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="key">Joined</div>
                                                                        <div className="value">
                                                                            <time dateTime="1970-01-01T12:00:00Z" className="date" title="Date joined">Joined date</time>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="fs-s mb-4 s:mb-0">
                                                    <time dateTime={article.published_timestamp} className="date-no-year" title="Date published">{article.readable_publish_date}</time>&nbsp;
                                                    <span className="mr-4">・{article.reading_time_minutes} min read</span>
                                                </span>
                                                <span id="action-space" className="mb-4 s:mb-0"></span>
                                            </div>
                                        </div>
                                    </header>

                                    <div className="crayons-article__main">
                                        <div className="crayons-article__body text-styles spec__body" data-article-id="741140" id="article-body">
                                            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                                {article.body_markdown}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </article>
                                {/* <div className="presentation flex">
                                    <div className="article b-r4 W">
                                        <div className="cover">
                                            <img src={article.cover_image} alt="" />
                                        </div>
                                        <div className="body pd20">
                                            <h1 className="mg0 mg-b16 title">{article.title}</h1>
                                            <div className="flex md mg-b16 grey">{article.tags.map(tag => <span key={tag} className="pd4 b-r4 mg-r8 bord">#{tag}</span>)}</div>
                                            <div className="top flex fx-a-center">
                                                <span className="user flex fx-a-center">
                                                    <span className="left bord mg-r8">
                                                        <img src={article.social_image} alt="" />
                                                    </span>
                                                    <span className="name b6 mg-r8">{article.user.name}</span>
                                                </span>
                                                <span className="time mg-r8">{article.readable_publish_date}</span> &bull; <span className="grey mg-l8">{article.reading_time_minutes} min read</span>
                                            </div>
                                            <div className="middle main pd20 lg">
                                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                                    {article.body_markdown}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </main>
                        <Listings id="index-right" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article;