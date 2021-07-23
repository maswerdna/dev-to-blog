import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
/**
 * TODO
 * syntax highlighter
 */

function Article() {
    let location = useLocation();
    // console.log(location);

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setFailed(false);
                setData({});
                setLoading(true);
                const url = 'https://dev.to/api/articles/' + location.state;
                const api_response = await fetch(url);
                const data = await api_response.json();

                if (api_response.status !== 200) {
                    throw Error(api_response.error);
                }
                // console.log(data);
                setData(data);
                setLoading(false);
            } catch (error) {
                // console.log(error);
                setFailed(true);
            }
        }
        location.state && fetchArticle();
    }, [location.state])
    //
    return (
        loading ? <div className="W tx-c pd20 b6 bord b-r5">Loading...</div> :
        failed ? <div className="W tx-c pd20 b6 bord b-r5">An error occurred</div> :
        <div className="presentation flex">
            <div className="article b-r4 W">
                <div className="cover">
                    <img src={data.cover_image} alt="" />
                </div>
                <div className="body pd20">
                    <h1 className="mg0 mg-b16 title">{data.title}</h1>
                    <div className="flex md mg-b16 grey">{data.tags.map(tag => <span key={tag} className="pd4 b-r4 mg-r8 bord">#{tag}</span>)}</div>
                    <div className="top flex fx-a-center">
                        <span className="user flex fx-a-center">
                            <span className="left bord mg-r8">
                                <img src={data.social_image} alt="" />
                            </span>
                            <span className="name b6 mg-r8">{data.user.name}</span>
                        </span>
                        <span className="time mg-r8">{data.readable_publish_date}</span> &bull; <span className="grey mg-l8">{data.reading_time_minutes} min read</span>
                    </div>
                    <div className="middle main pd20 lg">
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {data.body_markdown}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;