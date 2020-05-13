import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import healingTop from '../assets/images/healing-top.jpg';
import healingBot from '../assets/images/healing-bot.jpg';
import Head from 'next/head';

import { NextSeo } from 'next-seo';
import "../styles.scss";


class Workshops extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Lectures - Elysium Island Festival 2020</title>
                    <meta title="description" content="Join us on the transformational experience... Check out the lectures." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'http://www.elysiumislandfestival.com/program/lectures.html',
                        title: 'Lectures - Elysium Island Festival 2020',
                        description: 'Join us on the transformational experience... Check out the lectures.',
                        images: [
                            {
                                url: 'https://www.example.ie/og-image.jpg',
                                width: 800,
                                height: 600,
                                alt: 'Og Image Alt',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="workshops content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                            <div className="holder__back-top">
                                <img className="" src={healingTop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>Lectures</span>
                            </div>
                            
                            <div className="paragraph__container">
                                <h2 className="work-in-progress">More info coming soon!</h2>
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