import React from 'react';
import {Link} from 'react-router-dom';

function Story({data}) {
    // const data = props.data;
    return (
        <article className="crayons-story cursor-pointer crayons-story--featured" id="featured-story-marker" data-content-user-id="642348">
            <Link to={{pathname: "/" + data.user.username + "/" + data.slug, state: data.id}} className="crayons-story__hidden-navigation-link" aria-labelledby={"article-link-" + data.id}>
                {data.title}
            </Link>
            <div role="presentation">
                {data.cover_image && <Link to={{pathname: "/" + data.user.username + "/" + data.slug, state: data.id}} className="crayons-story__cover" title={data.title}  style={{backgroundImage: "url("+data.cover_image+")"}}>
                    <span className="hidden">{data.title}</span>
                </Link>}
                <div className="crayons-story__body">
                    <div className="crayons-story__top">
                        <div className="crayons-story__meta">
                            <div className="crayons-story__author-pic">
                                <a href={"/"+data.user.username} className="crayons-avatar crayons-avatar--l">
                                    <img src={data.user.profile_image_90} alt={data.user.username + " profile"} className="crayons-avatar__image" loading="lazy" />
                                </a>
                            </div>
                            <div>
                                <p>
                                    <a href={"/"+data.user.username} className="crayons-story__secondary fw-medium">{data.user.name}</a>
                                </p>
                                <Link to={{pathname: "/" + data.user.username + "/" + data.slug, state: data.id}} className="crayons-story__tertiary fs-xs">
                                    <time dateTime="">{data.readable_publish_date}</time>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="crayons-story__indention">
                        <h3 className="crayons-story__title">
                            <Link to={{pathname: "/" + data.user.username + "/" + data.slug, state: data.id}} id={"article-link-" + data.id}>
                                <span>{data.title}</span>
                            </Link>
                        </h3>
                        <div className="crayons-story__tags">
                            {data.tag_list.map(tag => <Link to={"/t/" + tag} key={tag} className="crayons-tag"><span className="crayons-tag__prefix">#</span>{tag}</Link>)}
                        </div>
                        <div className="crayons-story__bottom">
                            <div className="crayons-story__details">
                                <Link to={{pathname: "/" + data.user.username + "/" + data.slug, state: data.id}} className="crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left">
                                    <svg className="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                                    </svg>
                                    <span title="Number of reactions">{data.public_reactions_count}<span className="hidden s:inline">&nbsp;reactions</span></span>
                                </Link>
                                <Link to={{pathname: "/" + data.user.username + "/" + data.slug + '#comments', state: data.id}} className="crayons-btn crayons-btn--ghost crayons-btn--s crayons-btn--icon-left">
                                <svg className="crayons-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                                    </svg>
                                    <span title="Number of comments">{data.comments_count}<span className="hidden s:inline">&nbsp;comments</span></span>
                                </Link>
                            </div>
                            <div className="crayons-story__save">
                                <small className="crayons-story__tertiary mr-2">{data.reading_time_minutes} min read</small>
                                <button type="button" id={"article-save-button-" + data.id} className="crayons-btn crayons-btn--s crayons-btn--secondary save-btn" data-initial-feed="true" data-reactable-id={data.id}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    ) 
}

function Stories({posts, failure}) {
    return (
        <div>
            {failure ?
                <div className="W tx-c pd20 b6 bord b-r5 mg-h16">You're offline :(</div> :
                posts.length === 0 ? <div className="W tx-c pd20 b6 bord b-r5 mg-h16">Loading...</div> : ""}
            {posts.length > 0 && posts.map(post => <Story key={post.id} data={post} />)}
        </div>
    )
}


export default Stories;