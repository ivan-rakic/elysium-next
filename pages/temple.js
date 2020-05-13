import React, { Component } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import templeTop from '../assets/images/temple-top.jpg';
import templeBot from '../assets/images/temple-bot.jpg';
import Head from 'next/head';

import alek from '../assets/images/temple/alek.jpg';
import anta from '../assets/images/temple/anta.jpg';
import atriohm from '../assets/images/temple/atriohm.jpg';
import backToMars from '../assets/images/temple/backToMars.jpg';
import cheda from '../assets/images/temple/cheda.jpg';
import coa from '../assets/images/temple/coa.jpg';
import darkElf from '../assets/images/temple/darkElf.jpg';
import duka from '../assets/images/temple/duka.jpg';
import egonsEmbrace from '../assets/images/temple/egonsEmbrace.jpg';
import fantazma from '../assets/images/temple/fantazma.jpg';
import groovity from '../assets/images/temple/groovity.jpg';
import hierophants from '../assets/images/temple/hierophants.jpg';
import lector from '../assets/images/temple/lector.jpg';
import lyktum from '../assets/images/temple/lyktum.jpg';
import manda from '../assets/images/temple/manda.jpg';
import mita from '../assets/images/temple/mita.jpg';
import muscaria from '../assets/images/temple/muscaria.jpg';
import nile from '../assets/images/temple/nile.jpg';
import oakTales from '../assets/images/temple/oakTales.jpg';
import praheya from '../assets/images/temple/praheya.jpg';
import pura from '../assets/images/temple/pura.jpg';
import purist from '../assets/images/temple/purist.jpg';
import rezonant from '../assets/images/temple/rezonant.jpg';
import saleLnS from '../assets/images/temple/saleLnS.jpg';
import sattwa from '../assets/images/temple/sattwa.jpg';
import sickNoise from '../assets/images/temple/sickNoise.jpg';
import tesla from '../assets/images/temple/tesla.jpg';
import theseus from '../assets/images/temple/theseus.jpg';
import tianVSkalman from '../assets/images/temple/tianVSkalman.jpg';
import trikoze from '../assets/images/temple/trikoze.jpg';
import viaAxis from '../assets/images/temple/viaAxis.jpg';
import yachay from '../assets/images/temple/yachay.jpg';
import zarma from '../assets/images/temple/zarma.jpg';

import ogImg from '../assets/images/og/temple.jpg';

import { NextSeo } from 'next-seo';
import "../styles.scss";

class ElysiumTemple extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Temple - Elysium Island Festival 2020</title>
                    <meta title="description" content="Lineup for Temple - main stage. Check out artists for the upcoming edition." />
                </Head>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://www.elysiumislandfestival.com/temple.html',
                        title: 'Temple - Elysium Island Festival 2020',
                        description: 'Lineup for Temple - main stage. Check out artists for the upcoming edition.',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium temple stage',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary temple-holder u-margin-bottom-huge">
                            <div className="v__title-primary">
                                <span>Temple</span>
                            </div>
                            <main className="temple">
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="http://www.zenit-galaxy.com/2010/11/dj-alek.html" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Alek">
                                        <img src={alek} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Alek</span>
                                        <p>Zenit Galaxy Rec.</p>
                                    </figcaption>

                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="#" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Anta">
                                        <img src={anta} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Anta</span>
                                        <p>Save The Rave</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/atriohm" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Atriohm">
                                        <img src={atriohm} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Atriohm</span>
                                        <p>Parvati Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/backtomars" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Back To Mars">
                                        <img src={backToMars} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Back To Mars</span>
                                        <p>Occulta Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/cheda-brooka-musica" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Cheda">
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
                                    <a href="https://soundcloud.com/psidzulicahaludzica" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Coa">
                                        <img src={coa} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Coa</span>
                                        <p>Zenit Galaxy Rec.</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/darkelfmusic" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Dark Elf">
                                        <img src={darkElf} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Dark Elf</span>
                                        <p>Sonic Loom Music</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/pseudofractal" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Duka">
                                        <img src={duka} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Duka</span>
                                        <p>Zenit Galaxy Rec.</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/egonsembrace" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Egon's Embrace">
                                        <img src={egonsEmbrace} alt="" className="temple--artist-img" />
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Egon's Embrace</span>
                                        <p>Sangoma Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/fantazmaforestdelic" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Fantazma">
                                        <img src={fantazma} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Fantazma</span>
                                        <p>Forestdelic Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/groovity-music" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Groovity">
                                        <img src={groovity} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Groovity</span>
                                        <p>Blue Hour Sounds</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/the-hierophants" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Hierophants">
                                        <img src={hierophants} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Hierophants</span>
                                        <p>Sangoma Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/djlector" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Lector">
                                        <img src={lector} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Lector</span>
                                        <p>Jungle Island</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/lyktum" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Lyktum">
                                        <img src={lyktum} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Lyktum</span>
                                        <p>Iono Music</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/djmanda" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Manda">
                                        <img src={manda} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Manda</span>
                                        <p>Zenit Galaxy Rec.</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/dmtrije" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Mita">
                                        <img src={mita} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Mita</span>
                                        <p>Zenit Galaxy Rec.</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/paramuscaria" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Muscaria">
                                        <img src={muscaria} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Muscaria</span>
                                        <p>Sonic Loom Music</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/nile1984" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Nile">
                                        <img src={nile} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Nile</span>
                                        <p>Samaa Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/mihail-solakov" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Oak Tales">
                                        <img src={oakTales} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Oak Tales</span>
                                        <p>Forestdelic Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/praheya" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Praheya">
                                        <img src={praheya} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Praheya</span>
                                        <p>Banyan Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/pura-zenitgalaxy" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Pura">
                                        <img src={pura} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Pura</span>
                                        <p>Zenit Galaxy Rec.</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/puristmusic" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Purist">
                                        <img src={purist} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Purist</span>
                                        <p>Sangoma Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/rezonantsangoma" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Rezonant">
                                        <img src={rezonant} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Rezonant</span>
                                        <p>Sangoma Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/salelns" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Sale L&S">
                                        <img src={saleLnS} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Sale L&S</span>
                                        <p>Liquid & Solid</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/sattwa" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Sattwa">
                                        <img src={sattwa} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Sattwa</span>
                                        <p>Zenit Galaxy Rec.</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/sick-noise" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Sick Noise">
                                        <img src={sickNoise} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Sick Noise</span>
                                        <p>Free Radical Rec.</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/tesla-principle" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Tesla Principle">
                                        <img src={tesla} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Tesla Principle</span>
                                        <p>Boom Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/strampir" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Theseus">
                                        <img src={theseus} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Theseus</span>
                                        <p>Digital Drugs Coalition</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/tiann_music" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Tiann vs Kaleman">
                                        <img src={tianVSkalman} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Tiann vs Kaleman</span>
                                        <p>Forestdelic Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/trikoze" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Trikoze">
                                        <img src={trikoze} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Trikoze</span>
                                        <p>Enchanted Forests</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/viaaxis" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Via Axis">
                                        <img src={viaAxis} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Via Axis</span>
                                        <p>Sangoma Records</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/yachaytrance" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Yachay">
                                        <img src={yachay} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Yachay</span>
                                        <p>Hierophants</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <div className="temple--marker">
                                    </div>
                                    <a href="https://soundcloud.com/zarma1" className="temple--artist-link" target="_blank" rel="noopener noreferrer" title="Zarma">
                                        <img src={zarma} alt="" className="temple--artist-img" />
                                        <figcaption className="temple--title"></figcaption>
                                    </a>
                                    <figcaption className="temple--title">
                                        <span>Zarma</span>
                                        <p>Jungle Island</p>
                                    </figcaption>
                                </figure>

                            </main>


                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ElysiumTemple;