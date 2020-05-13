import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import nTop from '../assets/images/news-top.jpg';


import { NextSeo } from 'next-seo';
import '../styles.scss';
import Head from 'next/head';
import NewsLeads from '../components/newsLeads';

import news3Main from '../assets/images/news/news3-main.jpg';

class News extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>An updated ambassadors list! - Elysium Island Festival 2020</title>
                    <meta title="description" content="Elysium Island now has an ambassador in Greece! Welcome, djane SofiaX!" />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/news3.html',
                        title: 'An updated ambassadors list! - Elysium Island Festival 2020',
                        description: 'Elysium Island now has an ambassador in Greece! Welcome, djane SofiaX!',
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
                                    <img className="news__holder-box__article--main-img" src={news3Main} alt="elysium island ambassadors" />
                                    <h2 className="heading-primary">An updated ambassador's list!</h2>
                                    <p className="paragraph-w">Elysium Island now has an ambassador in Greece! Welcome, djane SofiaX!</p>
                                    <p className="paragraph-w">From now on, you can grab your tickets via Hadra’s website or from your local ambassadors in following countries:</p>

                                    <span className="flag flag-srb paragraph-w">Serbia</span>
                                    <p className="paragraph-w">
                                        Tamara Stefanovski<br />
                                        e-mail: snailydelic@gmail.com</p>

                                    <span className="flag flag-slo paragraph-w">Slovenia</span>
                                    <p className="paragraph-w">
                                        Primož Karba<br />
                                        e-mail: mizzart@gmail.com</p>
                                    <span className="flag flag-cro paragraph-w">Croatia</span>
                                    <p className="paragraph-w">Ivan Pavin<br />
                                        e-mail: vinpawin@gmail.com</p>
                                    <span className="flag flag-bos paragraph-w">Bosnia & Herzegovina</span>
                                    <p className="paragraph-w">Damir Zeljković<br />
                                        e-mail: damzzah@yahoo.com</p>
                                    <span className="flag flag-nma paragraph-w">North Macedonia and Albania</span>
                                    <p className="paragraph-w">Mihail Solakov<br />
                                        e-mail: mihail1989solakov@gmail.com</p>
                                    <span className="flag flag-rom paragraph-w">Romania</span>
                                    <p className="paragraph-w">Marius Latamescu<br />
                                        e-mail: djlatam@gmail.com</p>
                                    <span className="flag flag-bul paragraph-w">Bulgaria</span>
                                    <p className="paragraph-w">Desislav Georgiev<br />
                                        e-mail: aurorax@abv.bg</p>
                                    <span className="flag flag-mont paragraph-w">Montenegro</span>
                                    <p className="paragraph-w">Natalija Vukčević<br />
                                        e-mail: bathoryvennera@gmail.com</p>
                                    <span className="flag flag-earth paragraph-w">Traveling Ambassador</span>
                                    <p className="paragraph-w">Nenad Dalton Djordjević<br />
                                        e-mail: daltongoa@gmail.com</p>
                                    <span className="flag flag-gre paragraph-w">Greece</span>
                                    <p className="paragraph-w">Djane SofiaX<br />
                                        e-mail: djane.sofiax@gmail.com</p>
                                    <p className="paragraph-w">Grab your tickets on time and don't miss out on this sandy adventure!</p>
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
}

export default News;