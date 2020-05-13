import React, { Component, useState, useCallback } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

import { NextSeo } from 'next-seo';

import "../styles.scss";
import Head from 'next/head';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

import img01 from '../assets/images/2017/01.jpg';
import img02 from '../assets/images/2017/02.jpg';
import img03 from '../assets/images/2017/03.jpg';
import img04 from '../assets/images/2017/04.jpg';
import img05 from '../assets/images/2017/05.jpg';
import img06 from '../assets/images/2017/06.jpg';
import img07 from '../assets/images/2017/07.jpg';
import img08 from '../assets/images/2017/08.jpg';
import img09 from '../assets/images/2017/09.jpg';
import img10 from '../assets/images/2017/10.jpg';
import img11 from '../assets/images/2017/11.jpg';
import img12 from '../assets/images/2017/12.jpg';
import img13 from '../assets/images/2017/13.jpg';
import img14 from '../assets/images/2017/14.jpg';
import img15 from '../assets/images/2017/15.jpg';
import img16 from '../assets/images/2017/16.jpg';
import img17 from '../assets/images/2017/17.jpg';
import img18 from '../assets/images/2017/18.jpg';
import img19 from '../assets/images/2017/19.jpg';
import img20 from '../assets/images/2017/20.jpg';
import img21 from '../assets/images/2017/21.jpg';
import img22 from '../assets/images/2017/22.jpg';
import img23 from '../assets/images/2017/23.jpg';
import img24 from '../assets/images/2017/24.jpg';
import img25 from '../assets/images/2017/25.jpg';
import img26 from '../assets/images/2017/26.jpg';
import img27 from '../assets/images/2017/27.jpg';
import img28 from '../assets/images/2017/28.jpg';
import img29 from '../assets/images/2017/29.jpg';
import img30 from '../assets/images/2017/30.jpg';
import img31 from '../assets/images/2017/31.jpg';
import img32 from '../assets/images/2017/32.jpg';

function Gallery2017() {


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
            src: img01,
            width: 3,
            height: 5
        },
        {
            src: img02,
            width: 5,
            height: 3
        },
        {
            src: img03,
            width: 4,
            height: 3
        },
        {
            src: img04,
            width: 4,
            height: 3
        },
        {
            src: img05,
            width: 3,
            height: 4
        },
        {
            src: img06,
            width: 5,
            height: 3
        },
        {
            src: img07,
            width: 4,
            height: 3
        },
        {
            src: img08,
            width: 4,
            height: 3
        },
        {
            src: img09,
            width: 4,
            height: 3
        },
        {
            src: img10,
            width: 4,
            height: 3
        },
        {
            src: img11,
            width: 3,
            height: 4
        },
        {
            src: img12,
            width: 4,
            height: 3
        },
        {
            src: img13,
            width: 3,
            height: 4
        },
        {
            src: img14,
            width: 4,
            height: 3
        },
        {
            src: img15,
            width: 4,
            height: 3
        },
        {
            src: img16,
            width: 5,
            height: 3
        },
        {
            src: img17,
            width: 5,
            height: 3
        },
        {
            src: img18,
            width: 5,
            height: 3
        },
        {
            src: img19,
            width: 4,
            height: 3
        },
        {
            src: img20,
            width: 3,
            height: 2
        },
        {
            src: img21,
            width: 4,
            height: 2
        },
        {
            src: img22,
            width: 5,
            height: 3
        },
        {
            src: img23,
            width: 5,
            height: 3
        },
        {
            src: img24,
            width: 5,
            height: 3
        },
        {
            src: img25,
            width: 5,
            height: 3
        },
        {
            src: img26,
            width: 5,
            height: 3
        },
        {
            src: img27,
            width: 5,
            height: 3
        },
        {
            src: img28,
            width: 5,
            height: 3
        },
        {
            src: img29,
            width: 3,
            height: 4
        },
        {
            src: img30,
            width: 5,
            height: 3
        },
        {
            src: img31,
            width: 5,
            height: 3
        },
        {
            src: img32,
            width: 5,
            height: 3
        }
    ];

    return (
        <div>
            <Head>
                <title>Gallery 2017 - Elysium Island Festival 2020</title>
                <meta title="description" content="Photo gallery for Elysium Island Festival 2017 edition." />
            </Head>
            <NextSeo
                openGraph={{
                    type: 'website',
                    url: 'https://www.elysiumislandfestival.com/2017.html',
                    title: 'Gallery 2017 - Elysium Island Festival 2020',
                    description: 'Photo gallery for Elysium Island Festival 2017 edition.',
                }}
            />
            <Header />
            <div className="gallery content-section">
                <section className="row u-padding-bottom-big u-padding-top-big">

                    <div className="h__holder-primary u-margin-bottom-huge">
                        <div className="v__title-primary">
                            <span>2017</span>

                        </div>
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
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}


export default Gallery2017;