import React from 'react';
import './Blog.css';
import me from '../images/me.png';
import SocialIcons from '../Icons/Social.js';

let aboutMe = 'My name is Meg, and I am a UX Web Developer. I enjoy learning new aspects of my job, including Agile Scrum project management, Photoshop, and keeping up with trends on development and ux design. I live in the Nashville area with my family and my two cats, Missy and Andy. I love photography, traveling, severe weather, true crime (SSDGM!), everything outdoors, and staying active and healthy.';

let emojis = `🐈✌️⛈️☕🏞️🌮👩🏼‍💻💕`;

export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsLoaded: true,
            blogs: [],
            error: null
        }
    }

    componentDidMount = () => {
        fetch('./Blog.json')
        .then(res => res.json())
        .then(
            (result) => {
                let blogArr = result.data;
                // console.log(blogArr);
                this.setState({
                    resultsLoaded: true,
                    blogs: blogArr
                })
                return blogArr
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {error, resultsLoaded, blogs} = this.state;

        if (error) {
            return (
                <div>Error: {error.message}</div>
            );
        } else if (!resultsLoaded) {
            return (
                <div>Loading.....</div>
            );
        } else {

        let blogResults = blogs.map((e, index) => (
            <div key={index} className="card" id="blog-posts">
                <h2>{e.title}</h2>
                <h5>{e.date}</h5>
                {/* <div className="fakeimg" Style="height:200px;">Image</div> */}
                <p className="posts">{e.post}</p>
                <p className="posts">{e.post2}</p>
                <p className="posts">{e.post3}</p>
                <p className="posts">{e.post4}</p>
                <p className="posts">{e.post5}</p>
            </div>
            ))

            return (
                <div className="blog-container">
                    <div className="header">
                        <h2>Blog</h2>
                    </div>
                    <div className="row column-container">
                        <div className="leftcolumn">
                            {blogResults}
                        </div>
                        <div className="rightcolumn">
                            <div className="card">
                                <h2>About Me</h2>
                                <img src={me} className="selfimg" alt="" />
                                <div className="about-section">
                                    <p>{aboutMe}</p>
                                    <p className="emojis">{emojis}</p>
                                </div>
                            </div>
                            {/* <div className="card">
                                <h3>Popular Post</h3>
                                <img src={me} alt="" className="selfimg" />
                                <br />
                            </div> */}
                            <div className="card">
                                <h3>Follow Me</h3>
                                {/* <p className="followme">{followMe}</p> */}
                                <div>{SocialIcons()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}