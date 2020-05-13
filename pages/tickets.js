import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import tickTop from '../assets/images/tickets-top.jpg';
import tickBot from '../assets/images/tickets-bot.jpg';
import imgHadra from '../assets/images/hadra-logo.png';
import Head from 'next/head';

import ogImg from '../assets/images/og/tickets.jpg';

import { NextSeo } from 'next-seo';
import '../styles.scss';

class Tickets extends Component {

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
                    <title>Tickets - Elysium Island Festival 2020</title>
                    <meta title="description" content="Learn how to find and purchase tickets. Locate your Festival ambassadors and more." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/tickets.html',
                        title: 'Tickets - Elysium Island Festival 2020',
                        description: 'Learn how to find and purchase tickets. Locate your Festival ambassadors and more.',
                        canonical: 'https://www.hadra.net/tickets/?event_id=46&&lang=2',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island festival tickets',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="tickets content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                        <div class="fb-share-button" data-href="https://elysiumislandfestival.com/tickets.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Ftickets.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={tickTop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>Tickets</span>
                            </div>
                            <div className="paragraph__container">
                                <h1 className="heading-primary">Tickets info</h1>
                                <h2 className="heading-secondary">Tickets for Elysium Island Festival 2020 are available at <a href="https://www.hadra.net/tickets/?event_id=46&&lang=2" target="_blank" rel="noopener noreferrer" title="Hadra Tickets">Hadra's Shop</a>, as well as at your local ambassador.</h2>

                            </div>
                            <div className="tickets__box">
                                <div className="tickets__holder">
                                    <span className="tickets__holder--title tickets__holder-title-reg">Regural price</span>
                                    <span className="tickets__holder--period expired-period">
                                        <p className="paragraph-subtitle">&raquo; Period 1 &laquo;</p>
                                        <p className="paragraph-w">45,00 € + bf until Nov. 26th, 2019</p>
                                    </span>
                                    <span className="tickets__holder--period expired-period">
                                        <p className="paragraph-subtitle">&raquo; Period 2 &laquo;</p>
                                        <p className="paragraph-w">70,00 € + bf until Feb. 8th, 2020</p>
                                    </span>
                                    <span className="tickets__holder--period expired-period">
                                        <p className="paragraph-subtitle">&raquo; Period 3 &laquo;</p>
                                        <p className="paragraph-w">80,00 € + bf until May 6th, 2020</p>
                                    </span>
                                    <span className="tickets__holder--period">
                                        <p className="paragraph-subtitle">&raquo; Period 4 &laquo;</p>
                                        <p className="paragraph-w">90,00 € + bf until July 21st, 2020</p>
                                    </span>
                                </div>
                                <div className="tickets__holder">
                                    <span className="tickets__holder--title tickets__holder-title-dis">Discounted price</span>
                                    <span className="tickets__holder--period expired-period">
                                        <p className="paragraph-subtitle">&raquo; Period 1 &laquo;</p>
                                        <p className="paragraph-w">45,00 € + bf until Nov. 26th, 2019</p>
                                    </span>
                                    <span className="tickets__holder--period expired-period">
                                        <p className="paragraph-subtitle">&raquo; Period 2 &laquo;</p>
                                        <p className="paragraph-w">55,00 € + bf until Feb. 8th, 2020</p>
                                    </span>
                                    <span className="tickets__holder--period expired-period">
                                        <p className="paragraph-subtitle">&raquo; Period 3 &laquo;</p>
                                        <p className="paragraph-w">65,00 € + bf until May 6th, 2020</p>
                                    </span>
                                    <span className="tickets__holder--period">
                                        <p className="paragraph-subtitle">&raquo; Period 4 &laquo;</p>
                                        <p className="paragraph-w">75,00 € + bf until July 21st, 2020</p>
                                    </span>
                                </div>
                            </div>
                            <dl>
                                <div>

                                    <dt className="how-to--accordion">
                                        <span>Ambassadors</span>
                                    </dt>
                                    <dd className="ambassadors--definition">
                                        <div className="ambassadors">
                                            <div className="ambassadors__holder">
                                                <span>
                                                    <p className="flag flag-srb">Serbia</p>
                                                    <p className="">
                                                        <a href="https://www.facebook.com/snailydelic/" target="_blank" rel="noopener noreferrer" title="Snailydelic">
                                                            Tamara Stefanovski
                                                        </a>
                                                    </p>
                                                    <p>mail: <a href="mailto:snailydelic@gmail.com">snailydelic@gmail.com</a>
                                                    </p>
                                                </span>

                                                <span>
                                                    <p className="flag flag-slo">Slovenia</p>
                                                    <p>
                                                        <a href="https://www.facebook.com/prim.zee.9" target="_blank" rel="noopener noreferrer" title="Primož Karba">
                                                            Primož Karba
                                                        </a>
                                                    </p>
                                                    <p>mail: <a href="mailto:mizzart@gmail.com">mizzart@gmail.com</a>

                                                    </p>
                                                </span>

                                                <span>
                                                    <p className="flag flag-cro">Croatia</p>
                                                    <p>
                                                        <a href="https://www.facebook.com/winpa.vin" target="_blank" rel="noopener noreferrer" title="Ivan Pavin">
                                                            Ivan Pavin
                                                        </a>
                                                    </p>
                                                    <p>mail: <a href="mailto:vinpawin@gmail.com">vinpawin@gmail.com</a>
                                                    </p>
                                                </span>

                                                <span>
                                                    <p className="flag flag-bos">Bosnia & Herzegovina</p>
                                                    <p>
                                                        <a href="https://www.facebook.com/dalai.damzah" target="_blank" rel="noopener noreferrer" title="Damir Zeljković">
                                                            Damir Zeljković
                                                        </a>
                                                    </p>
                                                    <p>mail: <a href="mailto:damzzah@yahoo.com">damzzah@yahoo.com</a>

                                                    </p>
                                                </span>

                                                <span>
                                                    <p className="flag flag-nma">North Macedonia & Albania</p>
                                                    <p>
                                                        <a href="https://www.facebook.com/mihail.solakov" target="_blank" rel="noopener noreferrer" title="Mihail Solakov">
                                                            Mihail Solakov
                                                        </a>
                                                    </p>
                                                    <p>mail: <a href="mailto:mihail1989solakov@gmail.com">mihail1989solakov@gmail.com</a>

                                                    </p>
                                                </span>
                                            </div>
                                            <div className="ambassadors__holder">
                                                <span>
                                                    <p className="flag flag-rom">Romania</p>
                                                    <p>
                                                        <a href="https://www.facebook.com/dotline01" target="_blank" rel="noopener noreferrer" title="Marius Latamescu">
                                                            Marius Latamescu
                                                        </a>
                                                    </p>
                                                    <p>mail: <a href="mailto:djlatam@gmail.com">djlatam@gmail.com</a>

                                                    </p>
                                                </span>

                                                <span>
                                                    <p className="flag flag-bul">Bulgaria</p>
                                                    <p>
                                                        <a href="https://www.facebook.com/demedium.synth.31" target="_blank" rel="noopener noreferrer" title="Desislav Georgiev">
                                                            Desislav Georgiev
                                                        </a>
                                                    </p>
                                                    <p>mail: <a href="mailto:aurorax@abv.bg">aurorax@abv.bg</a>
                                                    </p>
                                                </span>

                                                <span>
                                                    <p className="flag flag-mont">Montenegro</p>
                                                    <p>
                                                        <a href="https://www.facebook.com/talya.bathory.venera" target="_blank" rel="noopener noreferrer" title="Natalija Vukčević">
                                                            Natalija Vukčević
                                                        </a>
                                                    </p>
                                                    <p>mail: <a href="mailto:bathoryvennera@gmail.com">bathoryvennera@gmail.com</a>
                                                    </p>
                                                </span>

                                                <span>
                                                    <p className="flag flag-gre">Greece</p>
                                                    <p>
                                                        <a href="https://www.facebook.com/profile.php?id=1196771482" target="_blank" rel="noopener noreferrer" title="Djane SofiaX">
                                                            Djane SofiaX
                                                        </a>
                                                    </p>
                                                    <p>mail: <a href="mailto:djane.sofiax@gmail.com">djane.sofiax@gmail.com</a>
                                                    </p>
                                                </span>

                                                <span>
                                                    <p className="flag flag-earth">Traveling Ambassador</p>
                                                    <p>
                                                        <a href="https://www.facebook.com/profile.php?id=100004975579019" target="_blank" rel="noopener noreferrer" title="Nenad Dalton Djordjević">
                                                            Nenad Dalton Djordjević
                                                        </a>
                                                    </p>
                                                    <p>mail: <a href="mailto:daltongoa@gmail.com">daltongoa@gmail.com</a>
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </dd>
                                    <dt className="how-to--accordion">
                                        <span>Shuttle Bus</span>
                                    </dt>
                                    <dd className="how-to--definition">
                                        <div>
                                            <p className="paragraph-subtitle">More info coming soon!</p>
                                        </div>
                                    </dd>
                                    <dt className="how-to--accordion">
                                        <span>Info</span>
                                    </dt>
                                    <dd className="how-to--definition">
                                        <div>
                                            <p className="paragraph-w">&raquo; Membership subscription at Elysium NGO starts on Tuesday, November 12th 2019.</p>
                                            <p className="paragraph-w">&raquo; Elysium NGO memberships are limited, divided in four periods and two categories : Regular and Discounted.</p>
                                            <p className="paragraph-w">&raquo; As soon as Elysium NGO memberships from one period are sold out, we move to the next period of presale.</p>
                                            <p className="paragraph-subtitle">Discounted tickets valid for passport holder from the following countries : Serbia, Croatia, Slovenia, North Macedonia, Bosnia and Herzegovina, Montenegro, Albania, Romania and Bulgaria.</p>
                                            <p className="paragraph-subtitle">Please note that the passports will be checked at the gate. People with the wrong kind of ticket will be asked to pay the difference with the price at the gate.</p>
                                            <p className="paragraph-w">&raquo; Elysium NGO membership is issued in electronic form as an "E-Ticket" and include free entrance to ELYSIUM ISLAND FESTIVAL 2020 and access to campsite of the festival as well.</p>
                                            <p className="paragraph-subtitle">Price at the gate : 110,00 €</p>
                                            <p className="paragraph-subtitle">Number of visitors is limited to 500 </p>
                                            <p className="paragraph-subtitle">E.I.F. 2020 Ambassador’s pre-sales will be separated into TWO phases</p>
                                            <p className="paragraph-w">&raquo; 1st Ambassador’s PHASE: 65,00 € + ambassador fee, from February 9th, 2020 until May 6th, 2020</p>
                                            <p className="paragraph-w">&raquo; 2nd Ambassador’s PHASE: 75,00 € + ambassador fee, from May 7th, 2020 until July 21st, 2020</p>
                                            <p className="paragraph-notice"> Free entrance for Australia passport holders!</p>
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={tickBot} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Tickets;