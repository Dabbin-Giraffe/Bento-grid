import React from 'react'
import "./Bento2.css";

import aiContainer from "../../assets/images/illustration-ai-content.webp";
import audienceGrowth from "../../assets/images/illustration-audience-growth.webp";
import consistentSchedule from "../../assets/images/illustration-consistent-schedule.webp";
import createPost from "../../assets/images/illustration-create-post.webp";
import fiveStars from "../../assets/images/illustration-five-stars.webp";
import growFollowers from "../../assets/images/illustration-grow-followers.webp";
import multiplePlatforms from "../../assets/images/illustration-multiple-platforms.webp";
import schedulePosts from "../../assets/images/illustration-schedule-posts.webp";


const Bento = () => {
    return (
        <div className="wrapper">

            <div className="bento-grid">
                <div className="item">
                    <div className="lg-text">  Create and schedule content <em>quicker.</em>
                    </div>
                    <img src={createPost} alt="" />
                </div>
                <div className="item">
                    <p className="xlg-text">  Social Media <span className='emphasis'>10x </span>
                    <em>Faster with AI</em>
                        </p>
                    <img src={fiveStars} alt="" />
                    <p className="sm-text">  Over 4,000 5-star reviews                </p>
                </div>

                <div className="item">
                    <p className="med-text">  Schedule to social media.
                    </p>
                    <img src={schedulePosts} alt="" />
                    <p className="sm-text">  Optimize post timings to publish content at the perfect time for your audience.
                    </p>
                </div>

                <div className="item">
                    <p className="lg-text">  Write your content using AI.
                    </p>
                    <img src={aiContainer} alt="" />
                </div>

                <div className="item">
                    <img src={multiplePlatforms} alt="" />
                    <p className="med-text">  Manage multiple accounts and platforms.
                    </p>
                </div>

                <div className="item">
                    <p className="med-text">
                        Maintain a consistent posting schedule.
                    </p>
                    <img src={consistentSchedule} alt="" />
                </div>

                <div className="item">
                        <span className="xlg-text">{">"}56%</span>
                    <p className="sm-text">
                        faster audience growth
                    </p>
                    <img src={audienceGrowth} alt="" />
                </div>

                <div className="item">
                    <img src={growFollowers} alt="" />
                    <p className="lg-text">  Grow followers with non-stop content.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bento
