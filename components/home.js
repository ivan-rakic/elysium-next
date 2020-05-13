import React, { Component } from 'react';
import Subscribe from './Subscribe';
import Link from 'next/link';
import ourStory from '../assets/images/home-ourstory.jpg';
import participate from '../assets/images/home-participate.jpg';
import howTo from '../assets/images/home-howto.jpg';
import faq from '../assets/images/home-faq.jpg';
import program from '../assets/images/home-program.jpg';
import news from '../assets/images/home-news.jpg';
import rayOfHope from '../assets/images/home-rayOfHope.jpg';

class Home extends Component {


    render() {
        return (
            <div className="home-holder">
                <div className="cta__holder">
                    <div className="cta__holder--shade">
                        <div className="cta__holder--shade-left">
                            <p>Elysium Island Festival at Koh Chang Island at Jul 29 - Aug 02, 2020!</p>
                            <p>Tickets: Now Available! </p>
                        </div>
                        <div className="cta__holder--shade-right">
                            <Link href="/tickets">
                                <a className="btn-tickets">
                                    <p>Tickets</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home-back">
                    <main className="main-home u-padding-bottom-huge">
                        <section className="row u-padding-top-huge">
                            <div className="welcome__holder">
                                <div className="welcome__holder--content">
                                    <h2 className="u-margin-bottom-small">
                                        ELYSUIM ISLAND FESTIVAL 6th EDITION
                                    </h2>
                                    <p className="paragraph">THANK YOU ALL for your support and for being with us through years of growing!</p>
                                    <p className="paragraph">See you again in 2020, under the willow trees...</p>
                                    <p className="paragraph">Elysium Island is waiting for you!</p>
                                </div>
                            </div>
                        </section>
                        <section className="row">
                            <div className="h__holder-primary leads__holder">
                                <div className="leads__holder--lead">
                                    <Link href="/our-story" as="/guide/our-story">
                                        <a>
                                            <img className="leads__holder--lead-image" src={ourStory} alt="" />
                                            <h4 className="leads__holder--lead-title">
                                                <span>Our Story</span>
                                            </h4>
                                            <p className="leads__holder--lead-subtitle">Find out the story behind Elysium Island Festival</p>
                                        </a>

                                    </Link>
                                </div>
                                <div className="leads__holder--lead">
                                    <Link href="/participate">
                                        <a>
                                            <img className="leads__holder--lead-image" src={participate} alt="" />
                                            <h4 className="leads__holder--lead-title">
                                                <span>Participate</span>
                                            </h4>
                                            <p className="leads__holder--lead-subtitle">Find a suitable category to apply and participate</p>
                                        </a>

                                    </Link>
                                </div>
                                <div className="leads__holder--lead">
                                    <Link href="/how-to">
                                        <a>
                                            <img className="leads__holder--lead-image" src={howTo} alt="" />
                                            <h4 className="leads__holder--lead-title"><span>How To</span></h4>
                                            <p className="leads__holder--lead-subtitle">Need directions or other info?</p>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <section className="row">
                            <div className="v__holder-primary leads__holder-hor">
                                <div className="leads__holder-hor--lead">
                                    <Link href="/program">
                                        <a>
                                            <img className="leads__holder-hor--lead-image" src={program} alt="" />
                                            <h4 className="leads__holder-hor--lead-title">Program</h4>
                                            <p className="leads__holder-hor--lead-subtitle ">Music, Performances, Movies, Arts, Crafts...</p>
                                        </a>
                                    </Link >
                                </div>
                                <div className="leads__holder-hor--lead">
                                    <Link href="/news">
                                        <a>
                                            <img className="leads__holder-hor--lead-image" src={news} alt="" />
                                            <h4 className="leads__holder-hor--lead-title">News</h4>
                                            <p className="leads__holder-hor--lead-subtitle ">Keep your eyes peeled for the fresh info!</p>
                                        </a>

                                    </Link >
                                </div>
                                <div className="leads__holder-hor--lead">
                                    <Link href="/ray-of-hope">
                                        <a>
                                            <img className="leads__holder-hor--lead-image" src={rayOfHope} alt="" />
                                            <h4 className="leads__holder-hor--lead-title">Ray of Hope</h4>
                                            <p className="leads__holder-hor--lead-subtitle">The Festival's official newspaper</p>
                                        </a>

                                    </Link >
                                </div>
                                <div className="leads__holder-hor--lead">
                                    <Link href="/faq">
                                        <a>
                                            <img className="leads__holder-hor--lead-image" src={faq} alt="" />
                                            <h4 className="leads__holder-hor--lead-title">F.A.Q.</h4>
                                            <p className="leads__holder-hor--lead-subtitle ">Everything you need to know</p>

                                        </a>

                                    </Link >
                                </div>
                            </div>
                        </section>
                        <section className="row u-padding-bottom-huge subscirbe-responsive">
                            <div className="h__holder-primary ">
                                <Subscribe />
                            </div>
                        </section>
                    </main>
                </div>
            </div >
        );
    }
}

export default Home;