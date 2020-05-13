import React, { Component } from 'react';

class Aside extends Component {
    render() {
        return (
            <aside className="aside">
                <div className="aside__social">
                    <div>
                        <a href="https://www.facebook.com/elysiumislandfestival/" title="Elysium 2020 - Facebook" target="_blank" rel="noopener noreferrer" className="soc-img fb"></a>
                        <a href="https://www.instagram.com/elysiumislandfestival/" title="Elysium 2020 - Instagram" target="_blank" rel="noopener noreferrer" className="soc-img ins"></a>
                        <a href="https://www.youtube.com/channel/UCvBh0hrhJaSe6zyfbVVOCpQ" title="Elysium 2020 - Youtube" target="_blank" rel="noopener noreferrer" className="soc-img yt"></a>
                    </div>
                </div>
                <div className="aside__scroll">
                    <a title="Scroll to Top" href="#header">&#8607;</a>
                </div>
            </aside>
        );
    }
}

export default Aside;
