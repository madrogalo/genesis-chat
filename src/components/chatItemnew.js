import React from 'react';
import { useFirestore, useFirestoreDocData } from "reactfire";

import { convertUnixTimestamp } from './../utils';

const images = {
    john_show: 'https://ktovkurse.com/wp-content/uploads/2015/06/jon-Snow-e1435181608374.jpg',
    pedro: 'https://ktovkurse.com/wp-content/uploads/2015/06/jon-Snow-e1435181608374.jpg',
    martin: 'https://lh3.googleusercontent.com/mIUvQSu1ja5Lpx-HS0ztqFPkudgzU0GGwZGJNaVZ8_D_31zC7mhw5eM8TwRJ_ByBY4UyYg=s85',
    sherlock: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/1/13/1389634544964/Sherlock-Holmes-BBC-011.jpg?width=445&quality=85&auto=format&fit=max&s=ff65ab18713d2fa201c8181ae127ee30',
    monica: 'https://i.pinimg.com/736x/19/31/e6/1931e627532feeb3232d4e00ae5d2924.jpg',
    dallas:  'https://fs.kinomania.ru/file/person/1/c0/1c0cae540f9eeeaf4830019bd17a1e47.jpeg',
    bot: 'https://snipp.ru/uploads/view/d880306f44d95f58d3a955e22d3ae165.png'
}

function ChatItemNew(props) {

    const chat = useFirestore().collection('chat').doc('pedro');
    const messages = useFirestoreDocData(chat)

    const messcoll = useFirestore().collection('chat').doc('pedro')

    const addMessages = (data) => {
        // chatMessage.add(data)
    }

    const dataMess = {
        time: 12323435,
        text: 'Hello Cwwhat888',
        userMessage: true
    };


    function pushData() {
        console.log('push');
        // addMessages(dataMess)
        messcoll.set({dataMess},  { merge: true })
    }


    // addUser = e => {
    //     e.preventDefault();
    //     const db = firebase.firestore();
    //     db.settings({
    //         timestampsInSnapshots: true
    //     });
    //     const userRef = db.collection(“users”).add({
    //         fullname: this.state.fullname,
    //         email: this.state.email
    //     });
    //     this.setState({
    //         fullname: “”,
    //     email: “”
    // });
    // };


    console.log('messages', messages);


    return (
        <div className="blocked-wrap">
            <div style={{position: 'relative'}}>
                <button onClick={() => pushData()}>push data</button>
                <div className="chat">
                    {
                        // messages.reverse().map((item, idx) => (
                        //     <div className={`chat-message ${item.userMessage ? 'user-message' : ''}`} key={idx}>
                        //         <div className="chat-message-foto">
                        //             <img src={`${item.userMessage ? images[props.name] : images.bot}`} alt={idx} />
                        //         </div>
                        //         <div className="chat-message-text">
                        //             {item.text}
                        //         </div>
                        //         <div className="chat-message-time">
                        //             {convertUnixTimestamp(item.time.seconds)}
                        //         </div>
                        //     </div>
                        //     )
                        // )
                    }
                </div>
            </div>
            <div className="chat-form">
                <form >
                    <div className="textarea-wrap" >
                        <textarea
                            placeholder="Text"
                            // onChange={event => handleChange(event)}
                            // value={formState.text}
                            // name="text"
                            // onKeyPress={handleUserKeyPress}
                        >
                        </textarea>
                    </div>
                    <div className="textarea-count-wrap">
                        <div className="checkbox-wrap">
                            <label>Press Enter to send</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChatItemNew;