import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import healingTop from '../assets/images/healing-top.jpg';
import healingBot from '../assets/images/healing-bot.jpg';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import "../styles.scss";

import ogImg from '../assets/images/og/healing.jpg';


class Workshops extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Healing Area - Elysium Island Festival 2020</title>
                    <meta title="description" content="Join us on the transformational experience... 'Turn on your inner light and illuminate the world.'" />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'http://www.elysiumislandfestival.com/healing-area.html',
                        title: 'Healing Area - Elysium Island Festival 2020',
                        description: 'Join us on the transformational experience... "Turn on your inner light and illuminate the world".',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island healing area',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="workshops content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                        <div class="fb-share-button" data-href="https://elysiumislandfestival.com/healing-area.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Fhealing-area.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={healingTop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>Healing Area</span>
                            </div>
                            <div className="small-leads">
                                <ul>
                                    <li>
                                        <Link href='/workshop' as="/workshop">
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">Workshops</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/lectures' as="/lectures">
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">Lectures</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/healingProgram' as="/healing-program">
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">Healing Program</p>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="paragraph__container">
                                <h1 className="heading-primary">WORKSHOPS & HEALING PROGRAM</h1>
                                <h2 className="heading-secondary">Join us on the transformational experience... <br /> "Turn on your inner light and illuminate the world"</h2>
                                <p className="paragraph-w">For the 6th edition, the Festival has prepared different arts, crafts, healing and other workshops.
Join our various artists, performers and educators in a path of learning and creating something that you maybe have never created or done before.</p>
                                <p className="paragraph-w">Feel free to take part in the creative act of your choice!</p>
                            </div>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={healingBot} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Workshops;