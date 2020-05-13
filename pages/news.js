import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import nTop from '../assets/images/news-top.jpg';
import nBot from '../assets/images/news-bot.jpg';

import msg from '../assets/images/SVG/new-message.svg';
import Head from 'next/head';

import ogImg from '../assets/images/og/news.jpg';

import { NextSeo } from 'next-seo';
import '../styles.scss';

import news1 from '../assets/images/news/news1.jpg';
import news2 from '../assets/images/news/news-2.jpg';
import news3 from '../assets/images/news/news-3.jpg';
import news4 from '../assets/images/news/news-4.jpg';
import news5 from '../assets/images/news/news-5.jpg';
import news6 from '../assets/images/news/news-6.jpg';

class News extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>News - Elysium Island Festival 2020</title>
                    <meta title="description" content="Latest news and articles regarding Elysium Island Festival. Keep your eyes peeled for the fresh
info!" />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/news.html',
                        title: 'News - Elysium Island Festival 2020',
                        description: 'Latest news and articles regarding Elysium Island Festival. Keep your eyes peeled for the fresh info!',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium news',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                            <div class="fb-share-button" data-href="https://elysiumislandfestival.com/news.html" data-layout="button" ><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Fnews.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={nTop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>News</span>
                            </div>
                            <div className="paragraph__container">

                                <h2 className="heading-primary">Latest news and articles</h2>
                                <section className="news">

                                    <figure className="news--article">
                                        <Link href='/news6'>
                                            <a className="news--link">
                                                <span className="news--date">Mar.18.2020</span>
                                                <img className="news--img" src={news6}></img>
                                                <figcaption>
                                                    <h3 className="news--title">Stay healthy and take care of each other!</h3>
                                                    <p className="news--description">As the world is facing troubling times, we are reaching out to confirm that you are all fine and healthy...</p>
                                                </figcaption>
                                            </a>
                                        </Link>
                                    </figure>

                                    <figure className="news--article">
                                        <Link href='/news5'>
                                            <a className="news--link">
                                                <span className="news--date">Mar.05.2020</span>
                                                <img className="news--img" src={news5}></img>
                                                <figcaption>
                                                    <h3 className="news--title">Psychedelic playground is READY!</h3>
                                                    <p className="news--description">Get ready to reconnect with your natural rhythm this summer on Koh Chang Island!</p>
                                                </figcaption>
                                            </a>
                                        </Link>
                                    </figure>
                                    <figure className="news--article">
                                        <Link href='/news4'>
                                            <a className="news--link">
                                                <span className="news--date">Feb.19.2020</span>
                                                <img className="news--img" src={news4}></img>
                                                <figcaption>
                                                    <h3 className="news--title">Touch the Elysium Island ground</h3>
                                                    <p className="news--description">Elysium Island is taking you on a six-year journey, in the sandy oasis...</p>
                                                </figcaption>
                                            </a>
                                        </Link>
                                    </figure>
                                    <figure className="news--article">
                                        <Link href='/news3'>
                                            <a className="news--link">
                                                <span className="news--date">Feb.10.2020</span>
                                                <img className="news--img" src={news3}></img>
                                                <figcaption>
                                                    <h3 className="news--title">Updated ambassador's list</h3>
                                                    <p className="news--description">Elysium Island now has an ambassador in Greece! Welcome, Djane SofiaX!</p>
                                                </figcaption>
                                            </a>
                                        </Link>
                                    </figure>
                                    <figure className="news--article">
                                        <Link href='/news2'>
                                            <a className="news--link">
                                                <span className="news--date">Feb.09.2020</span>
                                                <img className="news--img" src={news2}></img>
                                                <figcaption>
                                                    <h3 className="news--title">1st and 2nd phase tickets are SOLD OUT! 3rd phase is ON!</h3>
                                                    <p className="news--description">Dear Elysium Island lovers, we want to thank you all for your support!</p>
                                                </figcaption>
                                            </a>
                                        </Link>
                                    </figure>
                                    <figure className="news--article">
                                        <Link href='/news1'>
                                            <a className="news--link">
                                                <span className="news--date">Jan.14.2020</span>
                                                <img className="news--img" src={news1}></img>
                                                <figcaption>
                                                    <h3 className="news--title">Elysium Island GIVAWAY!</h3>
                                                    <p className="news--description">We would like to make a small contribution to the magic of Holidays this year.</p>
                                                </figcaption>
                                            </a>
                                        </Link>
                                    </figure>
                                </section>

                            </div>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={nBot} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default News;