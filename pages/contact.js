import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import cTop from '../assets/images/contact-top.jpg';
import cBot from '../assets/images/contact-bot.jpg';

import icon from '../assets/images/icon.png';

import $ from 'jquery';
import Recaptcha from 'react-recaptcha';

import ogImg from '../assets/images/og/contact.jpg';

import { NextSeo } from 'next-seo';
import pin from '../assets/images/SVG/location-pin.svg';
import mail from '../assets/images/SVG/mail.svg';

import '../styles.scss';

class Contact extends Component {

    state = {
        inputEmail: '',
        // inputCheckBoth: false,
        // inputCheckDesign: false,
        // inputCheckDev: false,
        inputMessage: '',
        inputName: '',
        isCaptchaValid: false,
        isErrorShown: false,
        isFormValid: false,
        isFormSubmitted: false
    }


    handleInput = event => {
        // Test for input and length of the value
        if (event.target.value.length > 0 && event.target.name !== 'inputEmail') {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        // If input is for email address validate it with regexp
        if (event.target.name === 'inputEmail') {
            // eslint-disable-next-line
            const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (reg.test(String(event.target.value).toLowerCase())) {
                this.setState({
                    [event.target.name]: event.target.value
                })
            }
        }
    }

    //Handle visitor's interaction with checkboxes
    handleCheckbox = event => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    // Show message in console when reCaptcha plugin is loaded
    onloadCallback = () => {
        console.log('Captcha loaded')
    }

    // Update state after reCaptcha validates visitor
    onCaptchaVerify = (response) => {
        this.setState({
            isCaptchaValid: true
        })
    }

    handleFormSubmit = event => {
        event.preventDefault()

        // Test
        if (this.state.inputEmail.length > 0 && this.state.inputName.length > 0 && this.state.inputMessage.length > 0) {
            //if (this.state.inputEmail.length > 0 && this.state.inputName.length > 0 && this.state.inputMessage.length > 0 && this.state.isCaptchaValid) {
            this.setState({
                isErrorShown: false,
                isFormValid: true
            })

            // Send the form with AJAX
            $.ajax({
                data: this.state,
                type: 'POST',
                url: '/mailer.php',
                success: function (data) {
                    console.info(data);
                    this.setState({ isFormSubmitted: true });
                    console.log(state);
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(status, err.toString())
                }
            })

            // Reset state after sending the form
            this.setState({
                inputEmail: '',
                //inputCheckBoth: false,
                //inputCheckDesign: false,
                //inputCheckDev: false,
                inputMessage: '',
                inputName: '',
                // isCaptchaValid: false,
                isErrorShown: false,
                isFormValid: false,
                isFormSubmitted: false
            })
        } else {
            // Show error message
            this.setState({
                isErrorShown: true
            })
        }
    }


    render() {

        return (
            <div>
                <Head>
                    <title>Contact - Elysium Island Festival 2020</title>
                    <meta title="description" content="Need more info, or just looking to chat with us?" />
                    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
                </Head>
                <NextSeo

                    openGraph={{
                        type: 'website',
                        url: 'http://www.elysiumislandfestival.com/contact.html',
                        title: 'Contact - Elysium Island Festival 2020',
                        description: 'Need more info? Feel free to contact us.',
                        images: [
                            {
                                url: ogImg,
                                width: 1200,
                                height: 630,
                                alt: 'elysium island contact us',
                            }
                        ],
                    }}
                />
                <Header />
                <div className="content-section">
                    <section className="row u-padding-bottom-big u-padding-top-big">
                        <div className="v__holder-primary u-margin-bottom-huge">
                            <div class="fb-share-button" data-href="https://elysiumislandfestival.com/contact.html" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Felysiumislandfestival.com%2Fcontact.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                            <div className="holder__back-top">
                                <img className="" src={cTop} alt="" />
                            </div>
                            <div className="v__title-primary">
                                <span>Contact</span>
                            </div>
                            <div className="paragraph__container">
                                <h1 className="heading-primary">
                                    Got a question? We'd love to hear from you.
                                </h1>
                                <h2 className="heading-secondary">Send us message and we'll respond as soon as possible.</h2>

                            </div>
                            <div className="contact-holder">
                                <div className="contact-holder__info-form">
                                    <img className="contact-holder__info-form--logo" src={icon} alt='Elysium Island Festival' />
                                    <address>
                                        <span>
                                            <img src={pin} className="contact-holder__info-form--pin" alt='Elysium Island location' />
                                            Koh Chang Island
                                        </span>
                                        <span>21205 Sremski Karlovci, Serbia</span>
                                    </address>
                                    <span>
                                        <img src={mail} className="contact-holder__info-form--pin" alt='Elysium Island mail' />
                                        elysiumislandfestival@gmail.com
                                    </span>
                                </div>
                                <div className="contact-holder__contact-form">
                                    <form action="">
                                        <fieldset>
                                            <label htmlFor="inputName"></label>
                                            <input onChange={this.handleInput} placeholder="Your Name" type="text" name="inputName" id="inputName" required={true} />
                                        </fieldset>

                                        <fieldset>
                                            <label htmlFor="inputEmail"></label>

                                            <input onChange={this.handleInput} placeholder="Your email" type="email" name="inputEmail" id="inputEmail" required={true} />
                                        </fieldset>

                                        <div className="">
                                            {/* <div className="form__col">
                                                <fieldset>
                                                    <label htmlFor="inputCheckDesign">
                                                        <input onClick={this.handleCheckbox} type="checkbox" name="inputCheckDesign" id="inputCheckDesign" defaultChecked={false} />

                                                        <span>Design</span>
                                                    </label>
                                                </fieldset>
                                            </div>

                                            <div className="form__col">
                                                <fieldset>
                                                    <label htmlFor="inputCheckDev">
                                                        <input onClick={this.handleCheckbox} type="checkbox" name="inputCheckDev" id="inputCheckDev" defaultChecked={false} />

                                                        <span>Development</span>
                                                    </label>
                                                </fieldset>
                                            </div>

                                            <div className="form__col">
                                                <fieldset>
                                                    <label htmlFor="inputCheckBoth">
                                                        <input onClick={this.handleCheckbox} type="checkbox" name="inputCheckBoth" id="inputCheckBoth" defaultChecked={false} />

                                                        <span>Design &amp development</span>
                                                    </label>
                                                </fieldset>
                                            </div> */}
                                        </div>
                                        <fieldset>
                                            {/* <label>message</label> */}
                                            <textarea onChange={this.handleInput} placeholder="Your message" name="inputMessage" id="inputMessage" maxLength="1000" required={true} />
                                        </fieldset>
                                        {/* !! */}
                                        {/* Make sure to use your 'sitekey' for Google reCaptcha API! */}
                                        {/* !! */}
                                        {/* <fieldset>
                                            <Recaptcha
                                                onloadCallback={this.onloadCallback}
                                                sitekey="6LcWyNkUAAAAAC91JiRQqwVhkz7DxE9K6b61hj29"
                                                render="explicit"
                                                verifyCallback={this.onCaptchaVerify}
                                            />
                                        </fieldset> */}

                                        {this.state.isFormSubmitted && (
                                            <fieldset>
                                                <p>Message sent. Thank you.</p>
                                            </fieldset>
                                        )}

                                        {this.state.isErrorShown && (
                                            <fieldset>
                                                <p>Please, make sure to fill all fields.</p>
                                            </fieldset>
                                        )}

                                        <fieldset>
                                            <button onClick={this.handleFormSubmit} className="contact-holder__contact-form--button">
                                                Send
                                            </button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div className="bottom-holder--icon"></div>
                            <div className="holder__back-bottom">
                                <img className="" src={cBot} alt="" />
                            </div>


                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;