import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Head from 'next/head';
import programTop from '../assets/images/program-top.jpg';
import programBot from '../assets/images/program-bot.jpg';

import ogImg from '../assets/images/og/program.jpg';

import { NextSeo } from 'next-seo';
import "../styles.scss";

class Program extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Program - Elysium Island Festival 2020</title>
                    <meta title="description" content="Welcome to our sandy playground! Find out more about lineup, performances, arts, movie
nights, workshops, healing program etc." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/program.html',
                        title: 'Program - Elysium Island Festival 2020',
                        description: 'Welcome to our sandy playground! Find out more about lineup, performances, arts, workshops, healing program etc.',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island festival program',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="program content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">

                        <div className="welcome__holder">
                            <div className="welcome__holder--content">
                                <h2 className="u-margin-bottom-small">
                                    Program
                                    </h2>
                            </div>
                        </div>

                        <ul className="program__program-links">
                            <li>
                                <Link href='/temple' as="/temple" >
                                    <a className="program__program-links--temple">
                                        <p className="">Temple</p>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/larva' as='/larva' >
                                    <a className="program__program-links--larva">
                                        <p className="">Larva</p>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="program__workshop-links">
                            <li>
                                <Link href='/cinema-and-theater' as="/cinema-and-theater" >
                                    <a className="program__workshop-links--cinema">
                                        <p className="">Cinema & Theater</p>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/healing-area' as="/healing-area">
                                    <a className="program__workshop-links--healing">
                                        <p className="">Healing Area</p>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/art-gallery' as="/art-gallery">
                                    <a className="program__workshop-links--art">
                                        <p className="">Art Gallery</p>
                                    </a>
                                </Link>
                            </li>
                        </ul>


                        {/* <div className="v__holder-primary u-margin-bottom-huge">
                            <div className="holder__back-top">
                                <img className="" src={programTop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>PROGRAM</span>
                            </div>
                            <div className="small-leads">
                                <ul>
                                    <li>
                                        <Link href='/temple' as="/program/temple" >
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">Temple</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/larva' as='/program/larva' >
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">Larva</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/cinema-and-theater' as="/program/cinema-and-theater" >
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">Cinema & Theater</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/healing-area' as="/program/healing-area">
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">Healing Area</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/art-gallery' as="program/art-gallery">
                                            <a className="small-leads--button">
                                                <p className="small-leads-title">Art Gallery</p>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="paragraph__container">
                                <h2 className="heading-primary">Free your mind and awake all of your senses<br />
                                    through this transformational adventure at our sandy playground!</h2>
                            </div>
                            <div className="holder__back-bottom">
                                <img className="" src={programBot} alt="" />
                            </div>
                        </div> */}
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Program;