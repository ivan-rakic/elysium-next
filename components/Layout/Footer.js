import React, { Component } from 'react';
import snail from '../../assets/images/sponsors/snailydelic.png';
import psychedelicMagazine from '../../assets/images/sponsors/psychedelicmagazine.png';
import forestdelic from '../../assets/images/sponsors/forestdelic.png';
import zenItGalaxy from '../../assets/images/sponsors/zenItGalaxy.png';
import hadra from '../../assets/images/sponsors/hadra.png';
import fakiri from '../../assets/images/sponsors/fakiriSaJuga.png';
import mushroomSound from '../../assets/images/sponsors/mushroomSound.png';
import smudge from '../../assets/images/sponsors/smudge.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                {/* <div className="u-center-text u-padding-top-huge u-margin-bottom-small">
                    <span className="heading-secondary">Sponsors and Partners</span>
                </div> */}
                <div className="footer__sponsors footer__row">
                    <figure className="footer__sponsors-figure">
                        <a href="https://www.facebook.com/snailydelic/" target="_blank" rel="noopener noreferrer" title="Snailydelic">
                            <img src={snail} alt="Snailydelic" className="footer__sponsors-image" />
                            <figcaption className="footer__sponsors-caption">Snailydelic</figcaption>
                        </a>
                    </figure>
                    <figure className="footer__sponsors-figure">
                        <a href="http://psychedelicmagazine.com/" target="_blank" rel="noopener noreferrer" title="Psychedelic Magazine">
                            <img src={psychedelicMagazine} alt="Psychedelic Magazine" className="footer__sponsors-image" />
                            <figcaption className="footer__sponsors-caption">Psychedelic Magazine</figcaption>
                        </a>
                    </figure>
                    <figure className="footer__sponsors-figure">
                        <a href="https://www.forestdelic.com/" target="_blank" rel="noopener noreferrer" title="Forestdelic Records">
                            <img src={forestdelic} alt="Forestdelic Records" className="footer__sponsors-image" />
                        </a>
                        <figcaption className="footer__sponsors-caption">Forestdelic Records</figcaption>
                    </figure>
                    <figure className="footer__sponsors-figure">
                        <a href="https://www.facebook.com/smudge.csp/" target="_blank" rel="noopener noreferrer" title="Smudge - Custom Screenprints">
                            <img src={smudge} alt="Psychedelic Magazine" className="footer__sponsors-image" />
                            <figcaption className="footer__sponsors-caption">Smudge - Custom Screenprints</figcaption>
                        </a>
                    </figure>
                    <figure className="footer__sponsors-figure">
                        <a href="http://www.zenit-galaxy.com/" target="_blank" rel="noopener noreferrer" title="Zen.IT Galaxy">
                            <img src={zenItGalaxy} alt="Zen.IT Galaxy" className="footer__sponsors-image" />
                            <figcaption className="footer__sponsors-caption">Zen.IT Galaxy</figcaption>
                        </a>
                    </figure>
                    <figure className="footer__sponsors-figure">
                        <a href="http://www.hadra.net/" target="_blank" rel="noopener noreferrer" title="Hadra">
                            <img src={hadra} alt="Hadra" className="footer__sponsors-image" />
                            <figcaption className="footer__sponsors-caption">Hadra</figcaption>
                        </a>
                    </figure>
                    <figure className="footer__sponsors-figure">
                        <a href="https://www.facebook.com/fakirisajugaart/" target="_blank" rel="noopener noreferrer" title="Fakiri sa juga">
                            <img src={fakiri} alt="Fakiri sa juga" className="footer__sponsors-image" />
                            <figcaption className="footer__sponsors-caption">Fakiri sa juga</figcaption>
                        </a>
                    </figure>
                    <figure className="footer__sponsors-figure">
                        <a href="https://www.facebook.com/Mushroom-sound-157701201048314/" target="_blank" rel="noopener noreferrer" title="Mushroom Sound">
                            <img src={mushroomSound} alt="Mushroom Sound" className="footer__sponsors-image" />
                            <figcaption className="footer__sponsors-caption">Mushroom Sound</figcaption>
                        </a>
                    </figure>
                </div>
                <div className="footer__social row">
                    <div className="footer__social-copyright">
                        <span className="">
                            © Copyright 2014 - 2020 | Elysuim Island Festival
                        </span>
                    </div>
                    {/* <div className="footer__social-networks">
                        <ul>
                            <li><a href="https://www.facebook.com/elysiumislandfestival/" title="Elysium 2020 - Facebook" target="_blank" rel="noopener noreferrer" className="soc-img fb">&nbsp;</a></li>
                            <li><a href="https://www.instagram.com/elysiumislandfestival/" title="Elysium 2020 - Instagram" target="_blank" rel="noopener noreferrer" className="soc-img ins">&nbsp;</a></li>
                            <li><a href="https://www.youtube.com/channel/UCvBh0hrhJaSe6zyfbVVOCpQ" title="Elysium 2020 - Youtube" target="_blank" rel="noopener noreferrer" className="soc-img yt">&nbsp;</a></li>
                        </ul>
                    </div> */}


                </div>
            </footer>
        );
    }
}

export default Footer;