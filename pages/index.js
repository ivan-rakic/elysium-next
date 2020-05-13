import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Home from '../components/home';
import Banner from '../components/Banner';
import Footer from '../components/Layout/Footer';

import $ from 'jquery';
import Head from 'next/head';

import ogImg from '../assets/images/og/home.jpg';

import '../styles.scss';

import { NextSeo } from 'next-seo';

class HomePage extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>Elysium Island Festival 2020</title>
                    <meta title="description" content="Elysium Island Festival - 2020 edition at Koh Chang Island." />
                </Head>
               <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com',
                        title: 'Elysium Island Festival 2020',
                        description: 'Elysium Island Festival - 2020 edition at Koh Chang Island.',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island fesival',
                            }
                        ],
                    }}
                />
                <Header />
                <Banner />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default HomePage;