import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import artGtop from '../assets/images/artG-top.jpg';
import artGbot from '../assets/images/artG-bot.jpg';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import ogImg from '../assets/images/og/art.jpg';


import "../styles.scss";


class CinemaAndTheatre extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Art Gallery - Elysium Island Festival 2020</title>
                    <meta title="description" content="Visionary builds what dreamers imagined." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/art-gallery.html',
                        title: 'Art Gallery - Elysium Island Festival 2020',
                        description: 'Visionary builds what dreamers imagined.',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island art gallery',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                        <div class="fb-share-button" data-href="https://elysiumislandfestival.com/art-gallery.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Fart-gallery.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={artGtop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>Art Gallery</span>
                            </div>
                            <div className="paragraph__container">
                                <h1 className="heading-primary">VISIONARY ELYSIUM GALLERY</h1>
                                <h2 className="heading-secondary">"Visionary builds what dreamers imagined"</h2>
                                <p className="paragraph-w">This year, at Elysium Island Gallery, you can admire a few great artists and their psychedelic visionary pieces of art!</p>
                                <h2 className="work-in-progress">More info coming soon!</h2>
                            </div>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={artGbot} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default CinemaAndTheatre;