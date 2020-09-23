import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function ChatWrap() {

    const contact_user = [
        { path: '/john_show', name: 'John Show', img: 'https://ktovkurse.com/wp-content/uploads/2015/06/jon-Snow-e1435181608374.jpg' },
        { path: '/martin', name: 'Martin', img: '' },
        { path: '/sherlock', name: 'Sherlock', img: '' },
        { path: '/monica', name: 'Monica', img: '' },
        { path: '/dallas', name: 'Dallas', img: '' },
    ]

    return (
        <div className="contacts-wrap">
            <div className="contact">
                {
                    contact_user.map((item, idx) => (
                        <div className="contact-user active" key={idx}>
                            <div className="contact-user-foto">
                                <Link to={item.path}>
                                    <img src={item.img} alt={item.name} />
                                </Link>
                            </div>
                            <div className="contact-user-info">
                                <div className="contact-user-top">
                                    <NavLink to={item.path} className="contact-user-name">{item.name}</NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ChatWrap;