import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import howT from '../assets/images/how-top.jpg';
import howB from '../assets/images/how-bot.jpg';

import Head from 'next/head';

import { NextSeo } from 'next-seo';
import "../styles.scss";

import ogImg from '../assets/images/og/howto.jpg';

import info from '../assets/images/eco/info.png';
import recycle from '../assets/images/eco/recycle.png';
import apple from '../assets/images/eco/apple.png';
import leaf from '../assets/images/eco/leaf.png';
import shower from '../assets/images/eco/shower.png';
import toilet from '../assets/images/eco/toilet.png';
import trashbag from '../assets/images/eco/trashbag.png';
import ecoHuman from '../assets/images/eco/eco-human.png';
import smoking from '../assets/images/eco/smoking.png';
import hands from '../assets/images/eco/hands.png';

class HowTo extends Component {

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
                    <title>How To Guide - Elysium Island Festival 2020</title>
                    <meta title="description" content="Guides and useful informations. Everything you need to know..." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/how-to.html',
                        title: 'How To Guide - Elysium Island Festival 2020',
                        description: 'Guides and useful informations. Everything you need to know...',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island guide, how to guide',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="how-to content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                        <div class="fb-share-button" data-href="https://elysiumislandfestival.com/how-to.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Fhow-to.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={howT} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>How To</span>
                            </div>
                            <div className="paragraph__container">
                                <h1 className="heading-primary">ON THE FESTIVAL GROUNDS</h1>
                                <h2 className="heading-secondary">Useful information. Everything you need to know</h2>
                                <p className="paragraph-w">Here you can find relevant information. How to get to the festival town? How to get to the island? What to do in a case of injury? Etc.</p>
                            </div>
                            <dl>
                                <div>
                                    <dt className="how-to--accordion">
                                        <span >How To get to festival?</span>
                                    </dt>
                                    <dd className="how-to--definition">
                                        <div>
                                            <p className="paragraph-w">There are multiple ways of reaching Elysium Island Festival and the Koh Chang island.</p>
                                            <p className="paragraph-subtitle">&raquo; By CAR</p>
                                            <p className="paragraph-w">If you chose to travel by car, you can simply assign Sremski Karlovci as your destination. To be specific, we would like you to arrive on the parking lot in front of the Danube Hotel in Sremski Karlovci. From there you ( with your camping equipment ) will be transported to the island with a boat.</p>
                                            <p className="paragraph-w">Type the following Coordinates to your GPS. (double check against Google Maps, keep in mind that other map softwares may not give you the exact same location)</p>
                                            <p className="paragraph-w">COORDINATES: 45.206434, 19.939140</p>
                                            <p className="paragraph-subtitle">&raquo; By PLANE</p>
                                            <p className="paragraph-w">If you chose to travel by plane, your options are to land either in Belgrade or in Nis. Belgrade is very close to Novi Sad and Sremski Karlovci so this is a recommended plane destination. From Belgrade/Nis you can grab a bus to Novi Sad, and then from there to Sremski Karlovci city.</p>
                                            <p className="paragraph-subtitle">&raquo; By BUS</p>
                                            <p className="paragraph-w">When you arrive to Novi Sad you can take the city bus (GSP Novi Sad) from the main bus station which is next to Novi Sad train station. Bus numbers are: 60, 61, 62. </p>
                                            <p className="paragraph-subtitle">&raquo; By TRAIN ( NOT AVALIABLE )</p>
                                            <p className="paragraph-w">Unfortunately this year traveling to Sremski Karlovci via train is not possible, as the railroad around the city is currently under construction. </p>
                                            <p className="paragraph-subtitle">&raquo; By BOAT (TO THE ISLAND)</p>
                                            <p className="paragraph-w">Once you arrive to the parking location, on the right-hand side of Hotel Danube, on the shore of river Danube, are docks where you can find a boat to take you to the Island.</p>
                                            <p className="paragraph-w">Transportation by boat to the island is not included in the price of the festival ticket.</p>
                                            <p className="paragraph-subtitle">&raquo; MAP</p>
                                            <iframe title="map" width="100%" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=45.21666%2C%2019.93744%20+(Elysium%20!)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>

                                        </div>
                                    </dd>
                                    <dt className="how-to--accordion">
                                        <span>Camping on island</span>
                                    </dt>
                                    <dd className="how-to--definition">
                                        <div>
                                            <p className="paragraph-subtitle">&middot; CAMPING ON ISLAND</p>
                                            <p className="paragraph-w">Camp opens 1 day before festival starts. For 2020 edition that is July 28th.</p>
                                            <p className="paragraph-w">Elysium Island is an area of high Wild Fire Hazard Potential. It is strictly forbidden to use open flame and/or campfires.</p>
                                            <p className="paragraph-w">Technical water is available on the festival area but it is not suitable for drinking.</p>
                                            <p className="paragraph-w">Drinking water will be sold at affordable prices, but you can bring your own.</p>
                                            <p className="paragraph-w">Food will be sold at the festival, but you can bring your own as well.</p>
                                            <p className="paragraph-w">There are designated shower stalls at the festival.</p>
                                            <p className="paragraph-w">Please use only ECO FRIENDLY shower products to reduce pollution of the nature.</p>
                                            <p className="paragraph-w">A sufficient number of trash cans and garbage bags will be placed on the festival ground.</p>
                                            <p className="paragraph-w">Deposit for garbage will be charged separately. After you bring back a full bag of trash, money will be returned to you.</p>
                                            <p className="paragraph-w">Leave no trace is our motto and we must preserve the nature together. Keep the nature clean !!!</p>
                                            <p className="paragraph-w">There is no possibility to transport vehicle on the island. Festival land is free of exhaust gas.</p>
                                        </div>
                                    </dd>
                                    <dt className="how-to--accordion">
                                        <span>Ecology</span>
                                    </dt>
                                    <dd className="how-to--definition">
                                        <div>
                                            <p className="paragraph-w">Each year we re-strategize our ecological approach to festival organizing, and with each year there are new developments that enable us to progress toward our goal of keeping the nature impeccably clean and unaffected.</p>
                                            <p className="paragraph-w">Last year, we decided to introduce re-usable cups and food containers so as to significantly reduce the amount of garbage produced.</p>


                                            <p className="paragraph-w"> <img src={recycle} className="eco-icons" alt="recycle" />Each visitor will be charged a (1€) fee for each re-usable cup/food container they take for their drink/food. Each visitor that returns their cup or food container will receive a refund of the (1€) fee they were initially charged. This applies to each cup/food container taken from any of the bars or the kitchen.</p>
                                            <p className="paragraph-w"> <img src={recycle} className="eco-icons" alt="recycle" />As we wish to encourage you to take further steps in preserving the nature, this year we have introduced the (5€) garbage fee that each visitor will be charged at the entrance. We will also provide you with a garbage bag, which you should bring back full at the end of the Festival, in order to receive the (5€) garbage fee refund.</p>
                                            <p className="paragraph-w"> <img src={info} className="eco-icons" alt="info" />Please note that you may only receive back the amount you were initially charged.</p>

                                            <h3 className="eco-subtitle">More Eco Precautions</h3>
                                            <div className="eco-paragraphs">
                                                <p className="paragraph-w"> <img src={apple} className="eco-icons" alt="apple" />Please, take care of our Mother Nature - the Island is rich in diverse flora and fauna (fish, swans, ducks, willow trees, festival flower plants, apple tree) so we have to take in consideration their presence.</p>
                                                <p className="paragraph-w"> <img src={trashbag} className="eco-icons" alt="trash bag" />Please, ensure that your waste always ends up in the bunks spread across the festival ground - a
                                                    sufficient number of trash cans and garbage bags will be placed on the festival land.</p>
                                                <p className="paragraph-w">
                                                    <img src={smoking} className="eco-icons" alt="smoking" />
                                                    If you are a smoker, always carry and use your portable ashtrays you got at the entrance.</p>
                                                <p className="paragraph-w">
                                                    <img src={leaf} className="eco-icons" alt="river leaf" />
                                                    Pay attention to the Danube river - it’s safe for swimming but this ecosystem doesn’t particularly appreciate chemicals.</p>
                                                <p className="paragraph-w">
                                                    <img src={toilet} className="eco-icons" alt="Eco human" />
                                                    Don’t drop anything but human waste and toilet paper in the toilets. No wet wipes, diapers, feminine products etc.</p>
                                                <p className="paragraph-w">
                                                    <img src={shower} className="eco-icons" alt="shower" />
                                                    Showers are provided at the festival, but please use ONLY ECO FRIENDLY shower products to
                                                    reduce pollution of the nature.
                                                 </p>
                                            </div>
                                            <div className="u-center-text">
                                                <img src={hands} className="eco-icons-hands" alt="info" />
                                                <p className="paragraph-w u-center-text"> Leave no trace! Keep nature clean!</p>
                                            </div>
                                        </div>
                                    </dd>
                                    <dt className="how-to--accordion">
                                        <span>Emergency! What to do?</span>
                                    </dt>
                                    <dd className="how-to--definition">
                                        <div>
                                            <p className="paragraph-w">Injuries, accidents or internal discomfort - we have a First Aid tent, as well as a PsyCare tent set up on the festival grounds.</p>
                                            <p className="paragraph-w">In case of any other problem, or serious injury, you can always ask for help at the Info Point.</p>
                                        </div>
                                    </dd>
                                    <dt className="how-to--accordion">
                                        <span>Kids/Children</span>
                                    </dt>
                                    <dd className="how-to--definition">
                                        <div>
                                            <p className="paragraph-w">Visitors younger than 18 are not allowed to attend the festival area without parents or a legal guardian.</p>
                                            <p className="paragraph-w">Entrance for children up to 12 years is free of charge.</p>
                                            <p className="paragraph-w">Parents need to register children at <a href="mailto:elysium.island.festival@gmail.com"> elysium.island.festival@gmail.com</a></p>
                                        </div>
                                    </dd>
                                    <dt className="how-to--accordion">
                                        <span>Pets</span>
                                    </dt>
                                    <dd className="how-to--definition">
                                        <div>
                                            <p className="paragraph-w">Only pets that are usually considered “peaceful” (“pets” referring to “dogs”) may enter the territory of the Festival, and only accompanied by their owner. However, it is not recommended to bring pets to the Festival, so we advise you to leave them at home or use the services of a pet care kennel. It is not prohibited to bring your furry friend along to the island, however, please keep in mind that dogs are not a part of the Island's ecosystem and, as such, may interfere with the island's wildlife. The Island is right next to the Special Nature Reserve “Koviljsko-petrovaradinski rit” which is home to many rare and endangered species. Should you still want to bring your pet, you are required to possess all the items listed below before they are allowed to enter the territory of the Event:</p>
                                            <p className="paragraph-subtitle">(1) valid inoculation certificates with an anti-rabies jab not older than 1 (one) year</p>
                                            <p className="paragraph-subtitle">(2) a leash, mouth guard, dog-collar and a pendant with the owner’s phone number (on which they can be reached throughout the Festival)</p>
                                            <p className="paragraph-w">The above-mentioned items will be checked at the entrance, and should any of them be lacking, the pet will not be allowed in. By bringing the pet to the festival, the owner acknowledges his/her responsibility to take care of the pet.</p>
                                        </div>
                                    </dd>
                                    <dt className="how-to--accordion">
                                        <span>About Wristbands</span>
                                    </dt>
                                    <dd className="how-to--definition">
                                        <div>
                                            <p className="paragraph-w">Please note that you can only enter Festival grounds with the wristband you get at the entrance. The wristbands are not exchangeable, non-refundable and non-transferable. Do not, by any means, remove the wristband placed on you by the organizers before the event ends.</p>
                                            <p className="paragraph-w">Wristbands that have been removed, transferred, damaged or in any way tampered with, become INVALID.</p>
                                            <p className="paragraph-w">By showing and/or wearing the wristband on the Festival grounds you agree to the Terms & Conditions of the Festival, which you have understood and accepted before entering. In particular, you expressly consent to your appearance in photographs, video and/or audio recordings on scene, and accept that such recordings may be made public without your further permission.</p>
                                            <p className="paragraph-w">By showing and/or wearing the wristband on the Festival grounds you agree to the Terms & Conditions of the Festival, which you have understood and accepted before entering. In particular, you expressly consent to your appearance in photographs, video and/or audio recordings on scene, and accept that such recordings may be made public without your further permission.</p>
                                            <p className="paragraph-w">The wristband entitles you to stay on the Festival grounds from 28th July 2020, Tuesday (Gate opens) to 2nd August 2020, Sunday (End of the Festival). The wristband entitles you to visit all the programs of the festival, including both music stages Temple & Larva,  Cinema & Theatre, Healing Area, Art Gallery and ArtCorner/flea market, as well as free camping and use of the designated shower stalls and toilets.</p>
                                        </div>
                                    </dd>
                                    <dt className="how-to--accordion">
                                        <span>Terms & Conditions</span>
                                    </dt>
                                    <dd className="how-to--definition">
                                        <div>
                                            <p className="paragraph-w">You are coming to the festival at your own risk.</p>
                                            <p className="paragraph-w">Visitors without a festival bracelet will have to leave the festival area.</p>
                                            <p className="paragraph-w">It is forbidden to consume or have in your possession any illegal drugs.</p>
                                            <p className="paragraph-w">The Festival is not responsible for lost or stolen belongings. Take care of your belongings!</p>
                                            <p className="paragraph-w">It is forbidden to carry out any commercial or advertising activities without the permission of the organizers.</p>
                                            <p className="paragraph-w">A sound and film recording will be produced by the Festival. Every person who appears on the recordings can be name-checked only with their agreement, however they may not make any claims to the makers of the recordings or the organizers of the Festival.</p>
                                            <p className="paragraph-w">Film and sound recordings of the concerts, programs, can only be made with the agreement of the organizers. You are allowed to take photos or videos but commercial media publications can only be made with the agreement of the organizers.</p>
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={howB} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HowTo;