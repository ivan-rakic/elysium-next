import React, { Component } from 'react';

import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Head from 'next/head';
import img19 from '../assets/images/2019/09.jpg';
import img18 from '../assets/images/2018/23.jpg';
import img17 from '../assets/images/2017/18.jpg';
import img16 from '../assets/images/2016/12.jpg';

import { NextSeo } from 'next-seo';

import ogImg from '../assets/images/og/gallery.jpg';

import "../styles.scss";



class Gallery extends Component {


    render() {

        return (
            <div>
                <Head>
                    <title>Gallery - Elysium Island Festival 2020</title>
                    <meta title="description" content="Check out photo gallery from previous editions of the Festival!" />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/gallery.html',
                        title: 'Gallery - Elysium Island Festival 2020',
                        description: 'Check out photo gallery from previous editions of the Festival!',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island gallery',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">

                        <div className="h__holder-primary leads__holder-hor u-margin-bottom-huge">
                            <div className="v__title-primary">
                                <span>Gallery</span>
                            </div>

                            <div className="leads__holder-hor--lead">
                                <Link href='/2019' as="2019">
                                    <a>
                                        <img className="leads__holder-hor--lead-image" src={img19} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">2019</h4>
                                        <p className="leads__holder-hor--lead-subtitle">Visit Gallery</p>
                                    </a>
                                </Link>
                            </div>
                            <div className="leads__holder-hor--lead">
                                <Link href='/2018' as="2018">
                                    <a>
                                        <img className="leads__holder-hor--lead-image" src={img18} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">2018</h4>
                                        <p className="leads__holder-hor--lead-subtitle">Visit Gallery</p>
                                    </a>
                                </Link>
                            </div>
                            <div className="leads__holder-hor--lead">
                                <Link href='/2017' as="2017">
                                    <a>
                                        <img className="leads__holder-hor--lead-image" src={img17} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">2017</h4>
                                        <p className="leads__holder-hor--lead-subtitle">Visit Gallery</p>
                                    </a>
                                </Link>
                            </div>
                            <div className="leads__holder-hor--lead">
                                <Link href='/2016' as="2016">
                                    <a>
                                        <img className="leads__holder-hor--lead-image" src={img16} alt="" />
                                        <h4 className="leads__holder-hor--lead-title">2016</h4>
                                        <p className="leads__holder-hor--lead-subtitle">Visit Gallery</p>
                                    </a>
                                </Link>
                            </div>

                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Gallery;