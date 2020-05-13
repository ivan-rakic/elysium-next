import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import faqT from '../assets/images/faq-top.jpg';
import faqB from '../assets/images/faq-bot.jpg';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import ogImg from '../assets/images/og/faq.jpg';

import "../styles.scss";

class Faq extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>F.A.Q. - Elysium Island Festival 2020</title>
                    <meta title="description" content="Frequently asked questions and answers regarding Elysium Island Festival." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/faq.html',
                        title: 'F.A.Q. - Elysium Island Festival 2020',
                        description: 'Frequently asked questions and answers regarding Elysium Island Festival.',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island festival faq, festival faq',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="faq content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                        <div class="fb-share-button" data-href="https://elysiumislandfestival.com/faq.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Ffaq.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={faqT} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>F.a.q.</span>
                            </div>
                            <div className="paragraph__container">
                                <p className="paragraph-subtitle">&raquo; How and where to buy tickets?</p>
                                <p className="paragraph-w">You can purchase a ticket on Hadra's website, as well as from your local ambassadors. For further info check out our <Link href="/tickets"><a className="internal-link"> Tickets section </a></Link>.</p>
                                <p className="paragraph-subtitle">&raquo; When and where does Elysium Island Festival take place?</p>
                                <p className="paragraph-w">The Festival is located on Koh Chang Island, an island in the middle of Danube river, near Sremski Karlovci in Serbia. The Festival's 6th edition starts on July 29, 2020 and finishes on Aug 02, 2020.</p>
                                <p className="paragraph-subtitle">&raquo; How do I get to the festival location?</p>
                                <p className="paragraph-w">There are multiple ways to get to the location, depending on where you are coming from. Short answer - the festival is located on these GPS coordinates: 45.206434, 19.939140.
Once you arrive to the parking location, you will see signs that will escort you to the BOAT location! Transportation by boat to the island is not included in the price of the festival ticket.</p>
                                <p className="paragraph-w">For a detailed instruction on how to get to the festival, you can check out our <Link href="/guide/how-to"><a className="internal-link"> How to Guide. </a></Link> </p>
                                <p className="paragraph-subtitle">&raquo; Is it possible to transport car/van on the island?</p>
                                <p className="paragraph-w">There is no possibility to transport vehicle to the island. Festival land is free of exhaust gas. As there is no 'land connection', only way to get to the island is by boat.</p>
                                <p className="paragraph-subtitle">&raquo; Is there drinking water on the Island?</p>
                                <p className="paragraph-w">No, there is no drinking water on the Island. You can bring your own supplies or purchase water at one of our Bars to affordable prices.</p>
                                <p className="paragraph-subtitle">&raquo; Are there any interesting sights in the area?</p>
                                <p className="paragraph-w">We can freely say that Sremski Karlovci city is a beautiful sight itself, however, there are also various sights that you can visit. Stražilovo, which is a wooded valley in the Fruška Gora mountain, is about 5km far from Sremski Karlovci. There is also a Museum of Beekeping right here in Sremski Karlovci, as well as multiple wineries. </p>
                            </div>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={faqB} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Faq;