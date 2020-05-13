import React, { Component, useState, useCallback } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import nTop from '../assets/images/news-top.jpg';
import Link from 'next/link';

import NewsLeads from '../components/newsLeads';


import { NextSeo } from 'next-seo';
import '../styles.scss';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import Head from 'next/head';
import news5Main from '../assets/images/news/news5-main.jpg';
import news51 from '../assets/images/news/news5-1.jpg';
import news52 from '../assets/images/news/news5-2.jpg';
import news53 from '../assets/images/news/news5-3.jpg';

function News5() {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    function columns(containerWidth) {
        let columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 800) columns = 4;
        if (containerWidth >= 1400) columns = 5;
        return columns;
    }

    const PHOTO_SET = [
        {
            src: news53,
            width: 1,
            height: 1
        },
        {
            src: news52,
            width: 1,
            height: 1
        },
    ];

    return (
        <div>
            <Head>
                <title>Touch the Elysium Island ground - Elysium Island Festival 2020</title>
                <meta title="description" content="Get ready to reconnect with your natural rhythm this summer on Koh Chang Island!" />
            </Head>
            <NextSeo
                openGraph={{
                    type: 'website',
                    url: 'https://www.elysiumislandfestival.com/news5.html',
                    title: 'Psychedelic playground is READY! - Elysium Island Festival 2020',
                    description: 'Get ready to reconnect with your natural rhythm this summer on Koh Chang Island!',
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
                                <img className="news__holder-box__article--main-img" src={news5Main} alt="elysium island ground, elysium island beach" />
                                <h2 className="heading-primary">Psychedelic playground is READY!</h2>
                                <p className="paragraph-w">Get ready to reconnect with your natural rhythm this summer on Koh Chang Island! Don’t think twice, take a dance with us!</p>
                                <p className="paragraph-w">Here is an updated LINE UP for everyone's ears... Check it out!
                                    </p>
                                <p className="paragraph-w">
                                    <Link href='/program/temple' as="/program/temple" >
                                        <a>
                                            <p>&raquo; Temple (Main Stage)</p>
                                        </a>
                                    </Link>
                                </p>
                                <p className="paragraph-w">
                                    <Link href='/program/larva' as="/program/larva" >
                                        <a>
                                            <p>&raquo; Larva (Chill Stage)</p>
                                        </a>
                                    </Link>
                                </p>
                                <p className="paragraph-w">Prepare your feet for a long round of dancing! Expect nothing less than warm nights and hot music!</p>
                                <p className="paragraph-w">See you on the Island!</p>
                                <img className="news__holder-box__article--main-img" src={news51} alt="elysium island ground, elysium island beach" />
                                <p className="paragraph-w">While waiting for the summer, check out how it all looked like in our blasting 5 th edition! Let’s remember
nights we spent at the Elysium Island dancefloor!</p>
                                <p className="paragraph-w">Enjoy  <a href="https://www.youtube.com/watch?v=Uuk-acD9Dhg" target="_blank" rel="noopener noreferrer" title="Hadra - Elysium Tickets"> ELYSIUM ISLAND FESTIVAL 2019 TEASER!</a></p>
                                <Gallery photos={PHOTO_SET} onClick={openLightbox} columns={columns} direction={"column"} margin={5} />
                                <ModalGateway>
                                    {viewerIsOpen ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel
                                                currentIndex={currentImage}
                                                views={PHOTO_SET.map(x => ({
                                                    ...x,
                                                    srcset: x.srcSet,
                                                    caption: x.title
                                                }))}
                                            />
                                        </Modal>
                                    ) : null}
                                </ModalGateway>
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


export default News5;