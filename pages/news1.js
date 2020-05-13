import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import nTop from '../assets/images/news-top.jpg';
import Head from 'next/head';

import { NextSeo } from 'next-seo';
import '../styles.scss';

import NewsLeads from '../components/newsLeads';

import news1Main from '../assets/images/news/news1-main.jpg';
import video1 from '../assets/images/news/news1.mp4';

class News extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>Elysium Island GIVAWAY! - Elysium Island Festival 2020</title>
                    <meta title="description" content="The year 2019. was very exciting and full of improvements and success..." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/news1.html',
                        title: 'Elysium Island GIVAWAY! - Elysium Island Festival 2020',
                        description: 'The year 2019. was very exciting and full of improvements and success...',
                        images: [
                            {
                                url: news1Main,
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
                                    <img className="news__holder-box__article--main-img" src={news1Main} alt="festival guests, elysium island people" />
                                    <h2 className="heading-primary">Elysium Island GIVAWAY!</h2>
                                    <p className="paragraph-subtitle">January 7th, 2020</p>
                                    <p className="paragraph-w">The year 2019. was very exciting and full of improvements and success. Elysium People or how we like to call you "Islanders", thank you for being with us all these years! Who is going to be the new face in the 6th edition? Maybe you? Let’s see who!</p>
                                    <p className="paragraph-w">We would like to make a small contribution to the magic of Holidays this year. Elysium Island has decided to give away 2 free tickets for the 6th edition in exchange for a little game!</p>
                                    <p className="paragraph-w">All you need to do in order to participate in this game is to post a PHOTO of YOURSELF on the island in the comment section below this post. You may use photos from any previous edition of the Elysium Island Festival, and the photo itself can be a selfie or a photo someone has taken of you on the festival grounds.</p>
                                    <p className="paragraph-w">Please note that using official Elysium Island Festival photos is prohibited and that only photos taken into consideration will be the ones posted as comments on this post.</p>
                                    <p className="paragraph-w">Two photos with the most likes will win a ticket for Elysium Island Festival 2020!</p>
                                    <p className="paragraph-w">The game is on until 14th of January!</p>
                                    <p className="paragraph-w">Let's play!</p>
                                    <h2 className="heading-secondary">WINNERS of Elysium Island GIVEAWAY!</h2>
                                    <p className="paragraph-subtitle">Update on: January 14th, 2020</p>
                                    <p className="paragraph-w">Well done, Islanders!</p>
                                    <p className="paragraph-w">We are announcing the WINNERS of Elysium Island giveaway! Two tickets for our next edition in 2020. go to Andrija Gajić and Boris Ranković! Congratulations! In order to claim your tickets, please send us a direct message.</p>
                                    <p className="paragraph-w">Big thanks to all of you who participated! Great job! We loved your photos and hope we will all be making more beautiful memories in the next edition. Don't worry, there are many more surprises to come, so make sure you follow us in order to stay
informed!</p>
                                    <p className="paragraph-w">See you on the Island in 2020!</p>
                                    <p className="paragraph-w">Wish you all happy holidays!</p>
                                    <video className="" autoPlay loop muted>
                                        <source src={video1} type="video/mp4" />
                                        Your browser is not supported!
                                    </video>
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