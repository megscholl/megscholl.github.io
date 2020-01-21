import React from 'react';
import './Blog.css';
import me from '../images/me.png';

let followMe = 'gibberish'

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
                    console.log(blogArr);

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

            console.log(this.state);

                let blogResults = blogs.map((e, index) => (
                    <div key={index} className="card" id="blog-posts">
                        <h2>{e.title}</h2>
                        <h5>{e.date}</h5>
                        {/* <div className="fakeimg" Style="height:200px;">Image</div> */}
                        <p>{e.post}</p>
                    </div>
                    ))

                    return (
                        <div className="blog-container">
                            <div className="header">
                                <h2>Meg Scholl, UX Developer</h2>
                            </div>

                            <div className="row">
                                <div className="leftcolumn">
                                    {blogResults}
                                </div>
                                <div className="rightcolumn">
                                    <div className="card">
                                        <h2>About Me</h2>
                                        <img src={me} className="selfimg" alt="" />
                                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                                    </div>
                                    <div className="card">
                                        <h3>Popular Post</h3>
                                        <div className="fakeimg">Image</div><br />
                                    </div>
                                    <div className="card">
                                        <h3>Follow Me</h3>
                                        <p>{followMe}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
            }
        }
    }



    // let blogResults = blogs.map((e, index) => (
                  
    //     <div key={index} className="card" id="blog-posts">
    //         <h2>{e.title}</h2>
    //         <h5>{e.date}</h5>
    //         {/* <div className="fakeimg" Style="height:200px;">Image</div> */}
    //         <p>{e.post}}</p>
    //     </div>
            
    // ))

    // return (
    //     <div className="blog-container">
    //         <div className="header">
    //                 <h2>Meg Scholl, UX Developer</h2>
    //         </div>
    //         <div className="row">
    //             <div className="leftcolumn">
    //         <div>{blogResults}</div>
    //             <div className="rightcolumn">
    //                 <div className="card">
    //                     <h2>About Me</h2>
    //                     <img src={me} className="selfimg" alt="" />
    //                     <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    //                 </div>
    //                 <div className="card">
    //                 <h3>Popular Post</h3>
    //                 <div className="fakeimg">Image</div><br />
    //                 </div>
    //                 <div className="card">
    //                     <h3>Follow Me</h3>
    //                     <p>{followMe}</p>
    //                 </div>
    //             </div> 
    //         </div>
    //     </div>
    // </div>

    // );