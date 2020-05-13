import React, { Component, useState, useCallback } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import nTop from '../assets/images/news-top.jpg';
import Link from 'next/link';

import NewsLeads from '../components/newsLeads';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import '../styles.scss';


import news6Main from '../assets/images/news/news6-main.jpg';

function News6() {

    return (
        <div>
            <Head>
                <title>Stay healthy and take care of each other - Elysium Island Festival 2020</title>
                <meta title="description" content="As the world is facing troubling times, we are reaching out to confirm that you are all fine and healthy..." />
            </Head>
            <NextSeo
                openGraph={{
                    type: 'website',
                    url: 'https://www.elysiumislandfestival.com/news6.html',
                    title: 'Stay healthy and take care of each other - Elysium Island Festival 2020',
                    description: 'As the world is facing troubling times, we are reaching out to confirm that you are all fine and healthy...',
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
            <div className="content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">
                    <div className="v__holder-primary u-margin-bottom-huge ">
                        <div className="v__title-primary">
                            <span>News</span>
                        </div>
                        <div className="news__holder-box">

                            <article className="news__holder-box__article">
                                <img className="news__holder-box__article--main-img" src={news6Main} alt="elysium island ground, elysium island beach" />
                                <h2 className="heading-primary">Stay healthy and take care of each other!</h2>
                                <p className="paragraph-w">Dear Islanders, </p>
                                <p className="paragraph-w">As the world is facing troubling times, we are reaching out to confirm that you are all fine and healthy and to thank you for the trust you’ve placed in Elysium Island Festival so far.

                                In the last weeks we found ourselves in the situation, that one month ago, we could not have imagined that we will think about today.

                                Considering this current pandemic situation, we feel the need to give you some word about the Festival itself...
                                    </p>

                                <p className="paragraph-w">We are working hard and still, there is no rescheduling in our plans. For now, there is no reason to talk about the cancellation or postponement

                                of the Festival ‘cause it’s still more than 4 months away… We will carefully watch the progression of the situation and inform you proactively.…

Nobody knows the exact scenario, but we all hope this will not last long. </p>
                                <p className="paragraph-w">While having all of you in our minds, we continue with our regular festival work. So, very soon, expect some fresh and interesting news.

                                This might feel like an isolated time for many of us, but it's actually one of the best times to stay connected and to find inspiration in music, art, and creativity.
It is the right time to show empathy, solidarity, and responsibility and to fine-tune our lives by taking care of each other. </p>
                                <p className="paragraph-w">Stay healthy!</p>
                            </article>
                            <div className="news__holder-box__leads">
                                <NewsLeads />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div >
    );
}


export default News6;