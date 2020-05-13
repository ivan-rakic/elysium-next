import React, { Component } from 'react';

class SubscribeTab extends Component {
    render() {
        return (
            <div className="SubscribeTab">
                <h4>Subscribe with</h4>   <input className="SubscribeTab--email" type="email" placeholder="your email" /> <p><input className="SubscribeTab--checkBox" id="subscribe-rb" type="radio" /> <label htmlFor="subscribe-rb"> I agree to recieve updates from Elysium Island Festival </label></p>  <button className="SubscribeTab--button" type="button">Sign Up</button>
            </div>
        );
    }
}

export default SubscribeTab;