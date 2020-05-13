import React, { Component } from 'react';
import Link from 'next/link';

class Menu extends Component {

    state = {
        menuChecked: false
    }

    menuChecked = () => {
        this.setState({ menuChecked: !this.state.menuChecked })
    }


    render() {
        return (
            <div className="menu-holder">

                <input type="checkbox" className="menu-holder__checkbox" onChange={this.menuChecked} value={this.state.menuChecked} id="navi-toggle" />
                <label htmlFor="navi-toggle" className="menu-holder__button">
                    <span className={this.state.menuChecked ? "menu-holder__icon iconTrans butIcoB butIcoA" : "menu-holder__icon"}>&nbsp;</span>
                </label>

                <nav id="mainMenu" className={this.state.menuChecked ? "menu menuOff" : "menu"} onClick={this.menuChecked}>
                    <ul className="menu__list">
                        <li className="menu__list-item"><Link href='/index' as="/index"><a className="menu__list-item--link">Home</a></Link></li>
                        <li className="menu__list-item"><Link href='/news' as="/news"><a className="menu__list-item--link">News</a></Link></li>
                        <li className="menu__list-item"><Link href='/ray-of-hope' as="/ray-of-hope"><a className="menu__list-item--link">Ray of Hope</a></Link></li>
                        <li id="guide-li" className="menu__list-item"><Link href='/guide' as="/guide"><a className="menu__list-item--link">Guide</a></Link>
                            <ul id="sublist--guide" className="menu__list-sublist">
                                <li className=""><Link href='/our-story' as="/our-story"><a className="menu__list-sublist--link">Our Story</a></Link></li>
                                <li className=""><Link href='/participate' as="/participate"><a className="menu__list-sublist--link">Participate</a></Link></li>
                                <li className=""><Link href='/how-to' as="/how-to"><a className="menu__list-sublist--link">How To</a></Link></li>
                                <li className=""><Link href='/faq' as="/faq"><a className="menu__list-sublist--link">F.A.Q.</a></Link></li>
                            </ul></li>
                        <li id="program-li" className="menu__list-item"><Link href='/program' as="/program"><a className="menu__list-item--link">Program</a></Link>
                            <ul id="sublist--program" className="menu__list-sublist">
                                <li className=""><Link href='/temple' as="/temple"><a className="menu__list-sublist--link">Temple</a></Link></li>
                                <li className=""><Link href='/larva' as="/larva"><a className="menu__list-sublist--link">Larva</a></Link></li>
                                <li className=""><Link href='/cinema-and-theater' as="/cinema-and-theater"><a className="menu__list-sublist--link">Cinema & Theater</a></Link></li>
                                <li className=""><Link href='/healing-area' as="/healing-area"><a className="menu__list-sublist--link">Healing Area</a></Link></li>
                                <li className=""><Link href='/art-gallery' as="/art-gallery"><a className="menu__list-sublist--link">Art Gallery</a></Link></li>
                            </ul>
                        </li>
                        <li className="menu__list-item"><Link href='/gallery' as="/gallery"><a className="menu__list-item--link">Gallery</a></Link></li>
                        <li className="menu__list-item"><Link href='/tickets' as="/tickets"><a className="menu__list-item--link">Tickets</a></Link></li>
                        <li className="menu__list-item"><Link href='/contact' as="/contact"><a className="menu__list-item--link">Contact</a></Link></li>
                        <li><div className="mainMenu__social-networks">
                            <ul>
                                <li><a href="https://www.facebook.com/elysiumislandfestival/" title="Elysium 2020 - Facebook" target="_blank" rel="noopener noreferrer" className="soc-img fb">&nbsp;</a></li>
                                <li><a href="https://www.youtube.com/channel/UCvBh0hrhJaSe6zyfbVVOCpQ" title="Elysium 2020 - Youtube" target="_blank" rel="noopener noreferrer" className="soc-img yt">&nbsp;</a></li>
                                <li><a href="https://www.instagram.com/elysiumislandfestival/" title="Elysium 2020 - Instagram" target="_blank" rel="noopener noreferrer" className="soc-img ins">&nbsp;</a></li>
                            </ul>
                        </div>
                        </li>
                    </ul>

                </nav>
            </div>
        );
    }
}

export default Menu;