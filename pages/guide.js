import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import gTop from '../assets/images/guide-top.jpg';
import gBot from '../assets/images/guide-bot.jpg';
import Head from 'next/head';

import ogImg from '../assets/images/og/guide.jpg';

import { NextSeo } from 'next-seo';
import "../styles.scss";

class Guide extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Guide - Elysium Island Festival 2020</title>
                    <meta title="description" content="Guides and useful information. Everything you need to know…" />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/guide.html',
                        title: 'Guide - Elysium Island Festival 2020',
                        description: 'Guides and useful information. Everything you need to know…',
                        images: [
                            {
                                url: ogImg,
                                width: 120,
                                height: 630,
                                alt: 'elysium guide',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="guide content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                            <div class="fb-share-button" data-href="https://elysiumislandfestival.com/guide.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Fguide.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={gTop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>Guide</span>
                            </div>
                            <div className="small-leads">
                                <ul>
                                    <li>
                                        <Link href='/our-story' as="our-story" >
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">Our Story</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/participate' as="/participate" >
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">Participate</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/how-to' as="/how-to">
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">How To</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/faq' as="/faq" >
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">FAQ</p>
                                            </a>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="paragraph__container">
                                <h1 className="heading-primary">A WALK THROUGH THE ISLAND</h1>
                                <h2 className="heading-secondary">Every step you take reveals a new horizont... Step into ours</h2>
                                <p className="paragraph-w">Open your eyes, your ears, your mind and, with all your heart, step through the gates of this paradise
island! Koh Chang Island, Monkey Island, Serbian Thailand - all these are different local names for the same, magical sandbar located on the Danube river right across the city of Sremski Karlovci.</p>
                                <p className="paragraph-w">With your first step on the island, you will witness the power of Mother Nature itself - fine sand, colorful shade of young willow trees, oasis of greenery, ducks, swans, friendly snakes and frogs, wild cane that
restlessly springs from here and there from the Danube blight... This, and more, is what makes the Elysium Island so special. The festival offers a great meditative scenery, charming view on the natural wealth and the wide place for dancing, making art, rest, and so much more...</p>
                            </div>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={gBot} alt="" />
                            </div>
                            {/* <div className="v__arrow-primary">
                            </div> */}
                        </div>
                        {/* <div className="h__holder-primary leads__holder-hor u-margin-bottom-huge">
                            <div className="leads__holder-hor--lead">
                                <Link href='/guide/about'>
                                    <a>
                                        <img className="leads__holder-hor--lead-image" src={img3} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">About Festival</h4>
                                        <p className="leads__holder-hor--lead-subtitle paragraph">Find out more about Elysium festival</p>
                                    </a>
                                </Link>
                            </div>
                            <div className="leads__holder-hor--lead">
                                <Link href='/guide/participate'>
                                    <a>
                                        <img className="leads__holder-hor--lead-image" src={img2} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">Participate</h4>
                                        <p className="leads__holder-hor--lead-subtitle paragraph">Learn how to apply and participate</p>
                                    </a>
                                </Link>
                            </div>
                            <div className="leads__holder-hor--lead">
                                <Link href='/guide/faq'>
                                    <a>
                                        <img className="leads__holder-hor--lead-image" src={img1} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">FAQ</h4>
                                        <p className="leads__holder-hor--lead-subtitle paragraph">Everything you need to know.</p>
                                    </a>
                                </Link>
                            </div>
                            <div className="leads__holder-hor--lead">
                                <Link href='/guide/how-to'>
                                    <a>
                                        <img className="leads__holder-hor--lead-image" src={img3} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">How To</h4>
                                        <p className="leads__holder-hor--lead-subtitle paragraph">Need directions other other info?</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    */}</section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Guide;