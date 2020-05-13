import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import pTop from '../assets/images/participate-top.jpg';
import pBot from '../assets/images/participate-bot.jpg';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import "../styles.scss";

import ogImg from '../assets/images/og/participate.jpg';

class Participate extends Component {

    componentDidMount() {
        var acc = document.getElementsByClassName("how-to--accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("how-to--accordion-active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Participate - Elysium Island Festival 2020</title>
                    <meta title="description" content="Learn how to apply and become a part of the Elysium Island Festival family!" />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/participate.html',
                        title: 'Participate - Elysium Island Festival 2020',
                        description: 'Learn how to apply and become a part of the Elysium Island Festival family!',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island festival participation, elysium participate',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="participate content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                            <div class="fb-share-button" data-href="https://elysiumislandfestival.com/participate.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Fparticipate.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={pTop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>Participate</span>
                            </div>
                            <div className="paragraph__container">
                                <h1 className="heading-primary">
                                    <span className="heading-primary--main">
                                        Become a part of E.I.F. 2020 Family
                                </span>
                                </h1>
                                <p className="paragraph-w">Are you a musician, performer, artist, painter, actor, yoga teacher, lecturer, do you have a shop
                                that fits our flea corner, or just want to contribute to the construction and creation of the festival?
If you find yourself in any of the above professions, just fill out the appropriate form below and become a part of the Family. </p>
                                <p className="paragraph-w">Elysium Island is waiting for you!</p>


                                <a href="https://forms.gle/6TeqRu7kQ3ZwrA1x5" target="_blank" rel="noopener noreferrer" title="Festival Program" className="btn-participate">
                                    <p>&raquo; Festival Program &laquo;</p>
                                </a>
                                <p className="paragraph-w">The time has come to color the festival with new vibes, visions, and performances.
                                Every year is a special and new opportunity to grow and share our values together.
This upcoming edition has different areas of the festival program you can apply for.</p>
                                <a href="https://forms.gle/WutkDvrGPrxPB4nm6" target="_blank" rel="noopener noreferrer" title="Volunteer Application" className="btn-participate">
                                    <p>&raquo; Volunteer Application &laquo;</p>
                                </a>
                                <p className="paragraph-w">Elysium Island crew invites you to support our local team in building a unique place on the Mother Earth.
This is a great occasion for talented and creative individuals and groups to join our team.</p>
                                <a href="https://forms.gle/QeM4uofHxucZRUv97" target="_blank" rel="noopener noreferrer" title="Art Corner/Flea Market" className="btn-participate">
                                    <p>&raquo; ArtCorner/Flea Market &laquo;</p>
                                </a>
                                <p className="paragraph-w">The ArtCorner presents a very important piece of the Elysium Island puzzle, and we would like you to bring your crafts to it.
If you have a shop with clothes, accessories, or any other handmade pieces... this is the right corner for you.</p>
                            </div>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={pBot} alt="" />
                            </div>
                        </div>

                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Participate;