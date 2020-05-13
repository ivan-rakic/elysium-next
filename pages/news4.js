import React, { Component, useState, useCallback } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import nTop from '../assets/images/news-top.jpg';


import { NextSeo } from 'next-seo';
import '../styles.scss';
import Head from 'next/head';
import NewsLeads from '../components/newsLeads';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

import news4Main from '../assets/images/news/news4-main.jpg';
import news41 from '../assets/images/news/news4-1.jpg';
import news42 from '../assets/images/news/news4-2.jpg';

function News4() {

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
            src: news41,
            width: 6,
            height: 4
        },
        {
            src: news42,
            width: 6,
            height: 4
        },
    ];
    return (
        <div>
            <Head>
                <title>Touch the Elysium Island ground - Elysium Island Festival 2020</title>
                <meta title="description" content="Elysium Island is taking you on a six-year journey, in the sandy oasis..." />
            </Head>
            <NextSeo
                openGraph={{
                    type: 'website',
                    url: 'https://www.elysiumislandfestival.com/news4.html',
                    title: 'Touch the Elysium Island ground - Elysium Island Festival 2020',
                    description: 'Elysium Island is taking you on a six-year journey, in the sandy oasis...',
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
                                <img className="news__holder-box__article--main-img" src={news4Main} alt="elysium island ground, elysium island beach" />
                                <h2 className="heading-primary">Touch the Elysium Island ground</h2>
                                <p className="paragraph-w">Elysium Island is taking you on a six-year journey, in the sandy oasis, to awake each of your senses through the transformational experience. For five days, you can enjoy the finest dusty sand beaches, in the middle of the Danube, one of the biggest rivers in Europe, while enjoying your favorite type of art, music, dance, performances...</p>
                                <p className="paragraph-w">Now, pay attention to one of the first of your six senses... touch!</p>
                                <p className="paragraph-w">In the heavenly surroundings, you can walk barefoot all day long and feel how the finest sand is touching your toes. All across the island, you can walk across the sandy surfaces and touch some of the untouched parts of nature. Get into touch with nature! From these spots, you can catch beautiful landscapes of the sunset and let the sun touch your skin. Lay down in hammocks in the willow forest, let your eyes touch the sky, listen to sounds, even touch the music...</p>
                                <p className="paragraph-w">“Touching a flower is touching life; touching the sun is touching life; touching the skin, touching the sand, all of this means touching life! No touch, no life!” (M.M.I.)</p>
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
        </div>
    );
}


export default News4;