import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import cinTop from '../assets/images/cinema-Top.jpg';
import cinBot from '../assets/images/cinema-Bot.jpg';
import Head from 'next/head';

import ogImg from '../assets/images/og/cinema.jpg';

import { NextSeo } from 'next-seo';

import "../styles.scss";

class CinemaAndTheatre extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Cinema and Theater - Elysium Island Festival 2020</title>
                    <meta title="description" content="Very important piece of the puzzle. Experience an artistic corner under the open sky." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/cinema-and-theater.html',
                        title: 'Cinema and Theater - Elysium Island Festival 2020',
                        description: 'Very important piece of the puzzle. Experience an artistic corner under the open sky.',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island cinema, elysium island festival theater',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="cinema content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                        <div class="fb-share-button" data-href="https://elysiumislandfestival.com/cinema-and-theater.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Fcinema-and-theater.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={cinTop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>Cinema & Theater</span>
                            </div>
                            <div className="paragraph__container u-center-text">
                                <h1 className="heading-primary">ACTS, PLAYS, MOVIE NIGHTS</h1>
                                <h2 className="heading-secondary">Very important piece of the puzzle. Experience an artistic corner under the open sky</h2>
                                <p className="paragraph-w">Among rich musical and other program, you can enjoy various theatre plays, performances, acts and movies every night right on the Festival ground, in the peaceful environment of Chai corner, among the willow trees and under the stars!</p>
                                <p className="paragraph-w">Come to experience the special energy of cinema, theatre and performance!</p>
                            </div>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={cinBot} alt="" />
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