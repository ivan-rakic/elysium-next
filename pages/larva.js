import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import lTop from '../assets/images/larva-top.jpg';
import lBot from '../assets/images/larva-bot.jpg';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import "../styles.scss";

import ogImg from '../assets/images/og/larva.jpg';

import acousticTree from '../assets/images/larva/acousticTree.jpg';
import atriohmChill from '../assets/images/larva/atriohmChill.jpg';
import aurorax from '../assets/images/larva/aurorax.jpg';
import ben from '../assets/images/larva/ben.jpg';
import bogy from '../assets/images/larva/bogy.jpg';
import cheda from '../assets/images/larva/cheda.jpg';
import coa from '../assets/images/larva/coa.jpg';
import daltonTT from '../assets/images/larva/daltonTT.jpg';
import druantia from '../assets/images/larva/druantia.jpg';
import flootingGrooves from '../assets/images/larva/flootingGrooves.jpg';
import innerChild from '../assets/images/larva/innerChild.jpg';
import lazanya from '../assets/images/larva/lazanya.jpg';
import lyabidelic from '../assets/images/larva/lyabidelic.jpg';
import manOfNoEgo from '../assets/images/larva/manOfNoEgo.jpg';
import marciana from '../assets/images/larva/marciana.jpg';
import milanko from '../assets/images/larva/milanko.jpg';
import nile from '../assets/images/larva/nile.jpg';
import poinfield from '../assets/images/larva/poinfield.jpg';
import psychoz from '../assets/images/larva/psychoz.jpg';
import psymania from '../assets/images/larva/psymania.jpg';
import shkomadji from '../assets/images/larva/shkomadji.jpg';
import skySoul from '../assets/images/larva/skySoul.jpg';
import soulfulBliss from '../assets/images/larva/soulfulBliss.jpg';
import stereoMantra from '../assets/images/larva/stereoMantra.jpg';
import sufisLife from '../assets/images/larva/sufisLife.jpg';
import tebra from '../assets/images/larva/tebra.jpg';
import thias from '../assets/images/larva/thias.jpg';
import zenitInDub from '../assets/images/larva/zenitInDub.jpg';

class Larva extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Larva - Elysium Island Festival 2020</title>
                    <meta title="description" content="Lineup for Larva - chill/alternative stage. Check out artists for the upcoming edition." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/larva.html',
                        title: 'Larva - Elysium Island Festival 2020',
                        description: 'Lineup for Larva - chill/alternative stage. Check out artists for the upcoming edition.',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium larva stage',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="larva content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary temple-holder u-margin-bottom-huge">
                            {/* <div className="holder__back-top">
                                <img className="" src={lTop} alt="" />
                            </div> */}
                            <div className="v__title-primary">
                                <span>Larva</span>
                            </div>
                            <main className="temple larva">
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/nenad-kecman" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Acoustic Tree">
                                        <img src={acousticTree} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Acoustic Tree</span>
                                        <p>Elysium Island</p>
                                    </figcaption>

                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/atriohm" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Atriohm in Chill">
                                        <img src={atriohmChill} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Atriohm in Chill</span>
                                        <p>Parvati Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/aurorax" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Aurorax">
                                        <img src={aurorax} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Aurorax</span>
                                        <p>Altar Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://www.mixcloud.com/bioelectronicnoise/" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Ben">
                                        <img src={ben} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Ben</span>
                                        <p>Axios Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://www.facebook.com/elysiumislandfestival" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Bogy">
                                        <img src={bogy} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Bogy</span>
                                        <p>Elysium Island</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/cheda-brooka-musica" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Cheda">
                                        <img src={cheda} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Cheda</span>
                                        <p>Tesseract Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/psidzulicahaludzicat" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Coa">
                                        <img src={coa} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Coa</span>
                                        <p> Zenit Galaxy Rec. </p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/dalton-trance-teleport" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Dalton Trance Teleport">
                                        <img src={daltonTT} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Dalton</span>
                                        <p>Mystic Sound  Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://www.mixcloud.com/Druantia/" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Druantia">
                                        <img src={druantia} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Druantia</span>
                                        <p>Axios Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/flooting-grooves" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Flooting Grooves">
                                        <img src={flootingGrooves} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Flooting Grooves</span>
                                        <p>Blue Hour Sounds</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/inner_child_of_sara" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Inner Child">
                                        <img src={innerChild} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Inner Child</span>
                                        <p>Inner Child</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/jungleisland" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Lazanya">
                                        <img src={lazanya} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Lazanya</span>
                                        <p>Jungle Island</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/lyabidelic" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Lyabidelic">
                                        <img src={lyabidelic} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Lyabidelic</span>
                                        <p>Jungle Island</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/manofnoego" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Man of no Ego">
                                        <img src={manOfNoEgo} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Man of no Ego</span>
                                        <p>Man of no Ego</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/marcianamusic" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Marciana">
                                        <img src={marciana} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Marciana</span>
                                        <p>Electric Power Pole Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/milanko-trifuncevic" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Milanko Trifuncević">
                                        <img src={milanko} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Milanko Trifuncević</span>
                                        <p>Takeover/Elysium Island</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/nile1984" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Nile">
                                        <img src={nile} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Nile</span>
                                        <p>Mystic Sound  Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/pointfield" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Pointfield">
                                        <img src={poinfield} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Pointfield</span>
                                        <p>Progg`n` RollRecords</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/zoranpsychoz" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Psychoz">
                                        <img src={psychoz} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Psychoz</span>
                                        <p>Avatar Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/psymania-belgrade" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Psymania">
                                        <img src={psymania} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Psymania</span>
                                        <p>Psymoon Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/marko-miskovic-146477543" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Shkomadji">
                                        <img src={shkomadji} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Shkomadji</span>
                                        <p>Jungle Island</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/skysoul_official" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Sky Soul">
                                        <img src={skySoul} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Sky Soul</span>
                                        <p>Iono Lounge</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/djsoulfulbliss" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Soulful Bliss">
                                        <img src={soulfulBliss} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Soulful Bliss</span>
                                        <p>Origin Moves</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/stereomantra" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="StereOMantra">
                                        <img src={stereoMantra} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>StereO Mantra</span>
                                        <p>OM Mantra Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/sufis-life" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Sufi's Life">
                                        <img src={sufisLife} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Sufi's Life</span>
                                        <p>Altar Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/tebra-official" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Tebra">
                                        <img src={tebra} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Tebra</span>
                                        <p>Ritual Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/elysium-island-festival" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Thias">
                                        <img src={thias} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Thias</span>
                                        <p>Elysium Island</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/zen-it-galaxy" className="larva--artist-link" target="_blank" rel="noopener noreferrer" title="Zenit in Dub">
                                        <img src={zenitInDub} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Zenit in Dub</span>
                                        <p>Zenit Galaxy Rec.</p>
                                    </figcaption>
                                </figure>


                            </main>


                            {/* <div className="holder__back-bottom">
                                <img className="" src={lBot} alt="" />
                            </div> */}
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Larva;