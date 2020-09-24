import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function ChatWrap() {

    const contact_user = [
        {
            path: '/john_show',
            name: 'John Show',
            img: 'https://ktovkurse.com/wp-content/uploads/2015/06/jon-Snow-e1435181608374.jpg'
        },
        {
            path: '/martin',
            name: 'Martin',
            img: 'https://lh3.googleusercontent.com/mIUvQSu1ja5Lpx-HS0ztqFPkudgzU0GGwZGJNaVZ8_D_31zC7mhw5eM8TwRJ_ByBY4UyYg=s85'
        },
        {
            path: '/sherlock',
            name: 'Sherlock',
            img: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/1/13/1389634544964/Sherlock-Holmes-BBC-011.jpg?width=445&quality=85&auto=format&fit=max&s=ff65ab18713d2fa201c8181ae127ee30'
        },
        {
            path: '/monica',
            name: 'Monica',
            img: 'https://i.pinimg.com/736x/19/31/e6/1931e627532feeb3232d4e00ae5d2924.jpg'
        },
        {
            path: '/dallas',
            name: 'Dallas',
            img: 'https://fs.kinomania.ru/file/person/1/c0/1c0cae540f9eeeaf4830019bd17a1e47.jpeg'
        },
    ]

    console.log(window.location.pathname)

    return (
        <div className="contacts-wrap">
            <div className="contact">
                {
                    contact_user.map((item, idx) => (
                        <div className={`contact-user ${item.path === window.location.path ? "active" : ''}`} key={idx}>
                            <div className="contact-user-foto">
                                <Link to={item.path}>
                                    <img src={item.img} alt={item.name} />
                                </Link>
                            </div>
                            <div className="contact-user-info">
                                <div className="contact-user-top">
                                    <NavLink to={item.path} className="contact-user-name active">{item.name}</NavLink>
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