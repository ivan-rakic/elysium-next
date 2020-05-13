import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import nTop from '../assets/images/news-top.jpg';
import Head from 'next/head';


import { NextSeo } from 'next-seo';
import '../styles.scss';

import NewsLeads from '../components/newsLeads';

import news2Main from '../assets/images/news/news2-main.jpg';

class News extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>THIRD PHASE of TICKETS SALE - Elysium Island Festival 2020</title>
                    <meta title="description" content="Dear Elysium Island lovers, we want to thank you all for your support..." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/news2.html',
                        title: 'THIRD PHASE of TICKETS SALE - Elysium Island Festival 2020',
                        description: 'Dear Elysium Island lovers, we want to thank you all for your support...',
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
                                    <img className="news__holder-box__article--main-img" src={news2Main} alt="elysium island tickets, festival tickets third phase" />
                                    <h2 className="heading-primary">1st and 2nd phase tickets are SOLD OUT! 3rd phase is ON!</h2>
                                    <p className="paragraph-w">Dear Elysium Island lovers, we want to thank you all for your support! Early bird tickets as well as 2nd phase tickets are SOLD OUT!</p>
                                    <p className="paragraph-w">Now, we move on to the THIRD PHASE of TICKETS SALE!</p>
                                    <p className="paragraph-w">Please bear in mind that we have two categories of tickets:</p>
                                    <p className="paragraph-w">CAT1 / Regular price</p>
                                    <p className="paragraph-w">CAT2 / Discounted price*</p>
                                    <p className="paragraph-w">* Discounted price tickets are valid for passport holders from the following countries: Serbia, Croatia, Slovenia, North Macedonia, Bosnia and Herzegovina, Montenegro, Albania, Romania, Bulgaria and Greece.</p>
                                    <p className="paragraph-w">The current ticket price at Hadra’s website is 80,00 EUR regular price, and for countries with a discount is 65,00 EUR + service fee.</p>
                                    <p className="paragraph-w">Follow <a href="https://www.hadra.net/tickets/elysium-island-festival-2020.php?page=&&event_id=46&&lang=2" target="_blank" rel="noopener noreferrer" title="Hadra - Elysium Tickets">this link</a> and become a part of the Elysium Island tribe!</p>
                                </article>
                                <div className="news__holder-box__leads">
                                    <NewsLeads />
                                </div>
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