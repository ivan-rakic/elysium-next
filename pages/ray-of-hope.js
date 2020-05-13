import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import rTop from '../assets/images/ray-top.jpg';
import rBot from '../assets/images/ray-bot.jpg';

import ray17 from '../assets/images/ray-17.png';
import ray18 from '../assets/images/ray-18.png';
import ray19 from '../assets/images/ray-19.png';

import ogImg from '../assets/images/og/ray.jpg';

import { NextSeo } from 'next-seo';
import '../styles.scss';


class RayOfHope extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Ray of Hope - Elysium Island Festival 2020</title>
                    <meta title="description" content="Ray of Hope is the Festival’s official publication, designed to cover all cultural events of
the Festival and many more…" />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/ray-of-hope.html',
                        title: 'Ray of Hope - Elysium Island Festival 2020',
                        description: 'Ray of Hope is the Festival’s official publication, designed to cover all cultural events of the Festival and many more…',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium publication, ray of hope',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                        <div class="fb-share-button" data-href="https://elysiumislandfestival.com/ray-of-hope.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Fray-of-hope.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={rTop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>Ray Of Hope</span>
                            </div>
                            <div className="paragraph__container">
                                <h1 className="heading-primary">Elysium Island Festival Magazine</h1>
                                <p className="paragraph-w">Ray of Hope, the first publication of the Elysium Island Festival was designed to cover all cultural events of the festival as a whole. The necessity for festival newspapers arose with the need for more cultural content at the festival itself. And we've prepared a lot of things, such as cinema, theater, gallery, workshops, yoga and hopefully so much more. Ray of Hope is really our beginning of hope that the events of psychedelic trance music in Serbia would take on features of a cultural event which you would attend, not only as a connoisseur of music, but also as an individual immersed into the psychedelic trance culture itself.</p>
                                <p className="paragraph-w">The newspaper will be distributed at the festival. In it you will be able to get information about the festival lineup, the schedule of movies in the cinema, the timetables of the theater performances and the workshops, without the pressure of a half-dead phone battery, listening to the Danube River waves with your feet in the sand. You will be able to find out more about our first festival steps as well and the tribe of people involved in the process, through interviews with deco teams, musicians and organizers. Perhaps you will also find your place in all of this.</p>
                            </div>
                            <div className="rayOfHope-content">
                                <div className="rayOfHope-content__magazine">
                                    <div>
                                        <a href="https://drive.google.com/file/d/1GPQcg9cEh6ZE36AjS73ccqiqJyligx-O/view" target="_blank" rel="noopener noreferrer" title="Ray Of Hope 1st Edtion">
                                            <h2>The Beginning of Hope <span>(1st edition)</span>
                                            </h2>
                                            <img className="" src={ray17} alt="The Beginning of Hope" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/12-x43RspjL5YX47XnKCdCVGbjA2EAlA7/view" target="_blank" rel="noopener noreferrer" title="Ray Of Hope 2st Edtion">
                                            <h2>Step Through the Gates of this Paradise Island
                                            <span>(2nd edition)</span>
                                            </h2>
                                            <img className="" src={ray18} alt="Step Through the Gates of this Paradise Island" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1V-PnVBFz3GI6oA_5TqIW3TnIGdKWfzE6/view" target="_blank" rel="noopener noreferrer" title="Ray Of Hope 3st Edtion">
                                            <h2>Celebrating the 5 Year Journey
                                            <span>(3rd edition)</span>
                                        </h2>
                                            <img className="" src={ray19} alt="Celebrating the 5 Year Journey" />
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={rBot} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div >
        );
    }
}

export default RayOfHope;