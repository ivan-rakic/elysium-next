import React, { Component } from 'react';
import Link from 'next/link';

import news3 from '../assets/images/news/news-3.jpg';
import news4 from '../assets/images/news/news-4.jpg';
import news5 from '../assets/images/news/news-5.jpg';
import news6 from '../assets/images/news/news-6.jpg';

class NewsLeads extends Component {
    render() {
        return (
            <div className="newsLeads">
                <h3 className="newsLeads__title">Latest News</h3>
                <figure className="newsLeads__lead-holder">
                    <Link href='/news6'>
                        <a className="newsLeads__lead-holder--link">
                            <img className="newsLeads__lead-holder--img" src={news6}></img>
                            <figcaption>
                                <h3 className="newsLeads__lead-holder--title">Stay healthy and take care of each other!</h3>
                                <div className="newsLeads__lead-holder--date">Mar.18.2020</div>
                            </figcaption>
                        </a>
                    </Link>
                </figure>
                <figure className="newsLeads__lead-holder">
                    <Link href='/news5'>
                        <a className="newsLeads__lead-holder--link">
                            <img className="newsLeads__lead-holder--img" src={news5}></img>
                            <figcaption>
                                <h3 className="newsLeads__lead-holder--title">Psychedelic playground is READY!</h3>
                                <div className="newsLeads__lead-holder--date">Mar.05.2020</div>
                            </figcaption>
                        </a>
                    </Link>
                </figure>
                <figure className="newsLeads__lead-holder">
                    <Link href='/news4'>
                        <a className="newsLeads__lead-holder--link">
                            <img className="newsLeads__lead-holder--img" src={news4}></img>
                            <figcaption>
                                <h3 className="newsLeads__lead-holder--title">Touch the Elysium Island ground</h3>
                                <div className="newsLeads__lead-holder--date">Feb.19.2020</div>
                            </figcaption>
                        </a>
                    </Link>
                </figure>
                <figure className="newsLeads__lead-holder">
                    <Link href='/news3'>
                        <a className="newsLeads__lead-holder--link">
                            <img className="newsLeads__lead-holder--img" src={news3}></img>
                            <figcaption>
                                <h3 className="newsLeads__lead-holder--title">Updated ambassador's list</h3>
                                <div className="newsLeads__lead-holder--date">Feb.10.2020</div>
                            </figcaption>
                        </a>
                    </Link>
                </figure>
            </div>
        );
    }
}

export default NewsLeads;