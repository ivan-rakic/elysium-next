import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ourT from '../assets/images/our-top.jpg';
import ourB from '../assets/images/our-bot.jpg';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import "../styles.scss";

import ogImg from '../assets/images/og/ourstory.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Our Story - Elysium Island Festival 2020</title>
                    <meta title="description" content="Find out the story behind Elysium Island Festival." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/our-story.html',
                        title: 'Our Story - Elysium Island Festival 2020',
                        description: 'Find out the story behind Elysium Island Festival.',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium festival, our story',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="about content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                            <div class="fb-share-button" data-href="https://elysiumislandfestival.com/our-story.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Four-story.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={ourT} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>Our Story</span>
                            </div>
                            <div className="paragraph__container">
                                <h1 className="heading-primary">ELYSIUM ISLAND JOURNEY</h1>
                                <h2 className="heading-secondary">Find out the story behind Elysium Island Festival</h2>
                                <p className="paragraph-w">It was 6 years ago when Elysium Island Festival started spreading its roots... and it enjoyed every step along the way. All those little steps and your belief is what makes this journey complete.</p>
                                <p className="paragraph-w">Located in the middle of Danube river, this tropical Island allows your inner child to emerge as you walk along the riverside and feel the sand surrounding your toes. With the very first step on Festival grounds, you will feel the magnetic pulse of the Island itself. In this heavenly home, we share a sense of connectedness, oneness and freedom, with the overall aim of raising awareness and nature conservation. Our Festival wants to encourage all of you to reconnect with your natural rhythm, and is a place where your creativity and dance can bloom freely.</p>
                                <p className="paragraph-w">Our strength is nature itself, as well as different types of cultural and musical programs. Far away from the city lights, here you can relax in hammocks in the shade of young willow trees, meditate in the charming sunrise or sunset view, enjoy the company of feathery residents, make art, and, for the restless ones - dance all day and all night long.</p>
                                <p className="paragraph-w">Taste the sun-sweet fruit of the Earth, or Smell the bloom of flowers in our beautiful Oasis. Do not miss an opportunity to See all palettes of colours this magnificent Island has to offer; do not fear to Touch the boundary between real and surreal. Listen closely, as you will surely Hear the Island's indistinct whisper - calling you to awaken your Intuition, the voice of your soul, and embrace your innate wisdom, potential and truth.</p>
                                <p className="paragraph-w">We invite you to activate all Six Senses in the next edition of Elysium Island Festival!</p>
                            </div>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={ourB} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;