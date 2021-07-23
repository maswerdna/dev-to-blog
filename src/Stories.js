import React from 'react';
import {Link} from 'react-router-dom';

function Story({data}) {
    // const data = props.data;
    return (
        <article className="article feed b-r5 ps-r cur-pt ov-h W">
            <Link to={{pathname: "/" + data.user.username + "/" + data.slug, state: data.id}} className="c-b">
                <div className="cover">
                    <img src={data.cover_image} alt="" />
                </div>
            </Link>
            <div className="body pd12">
                <div className="top flex">
                    <div className="left bord box-32">
                        <img src={data.user.profile_image_90} alt="" className="box-32" />
                    </div>
                    <div className="right dark md">
                        <div className="name b6">{data.user.name}</div>
                        <span className="time">{data.readable_publish_date}</span> &bull; <span className="grey">{data.reading_time_minutes} min read</span>
                    </div>
                </div>
                <div className="middle">
                    <h3><Link to={{pathname: "/" + data.user.username + "/" + data.slug, state: data.id}} className="c-b">{data.title}</Link></h3>
                    <div className="flex md grey">{data.tag_list.map(tag => <span key={tag} className="tag bord">#{tag}</span>)}</div>
                </div>
                <div className="bottom flex">
                    <div className="left md b6 mg-t10 dark">
                        <span className="tag"><span className="icon">&#x2749;</span> {data.comments_count}</span>
                        <span className="tag"><span className="icon">&#9825;</span> {data.public_reactions_count}</span>
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
                <div className="W tx-c pd20 b6 bord b-r5">You're offline :(</div> :
                posts.length === 0 ? <div className="W tx-c pd20 b6 bord b-r5">Loading...</div> : ""}
            {posts.length > 0 && posts.map(post => <Story key={post.id} data={post} />)}
        </div>
    )
}

export default Stories;