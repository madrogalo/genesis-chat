import React, { useState } from 'react';
import { useFirestore, useFirestoreCollectionData } from "reactfire";

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

    const time = Math.floor(Date.now() / 1000)
    const [ messageState, setFormState ] = useState( {
            text: '',
            time: time,
            userMessage: true
        }
    )


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    };

    const handleUserKeyPress = e => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            console.log('handleUserKeyPress')
            sendMessageToFirestore(messageState)
            setFormState({
                text: '',
                time: Math.floor(Date.now() / 1000),
                userMessage: true
            })
        }
    };

    const getMessageToFirestore = useFirestore()
        .collection('chat')
        .doc(`${props.name}`)
        .collection('messages')

    const messages = useFirestoreCollectionData(getMessageToFirestore)


    const addMessageToFirestore = useFirestore()
        .collection('chat')
        .doc(`${props.name}`)
        .collection('messages')


    // Bot


    const randomBotMessage = [
        {
            text: 'Hi I`m bot',
            time: Math.floor(Date.now() / 1000),
        },
        {
            text: `Time is ${convertUnixTimestamp(Math.floor(Date.now() / 1000))}`,
            time: Math.floor(Date.now() / 1000),
        },
        {
            text: `Time is ${Math.floor(Date.now() / 1000)}`,
            time: Math.floor(Date.now() / 1000),
        },
        {
            text: 'I am a doctor',
            time: Math.floor(Date.now() / 1000),
        },
        {
            text: 'I like Help',
            time: Math.floor(Date.now() / 1000),
        },
        {
            text: 'JS Rules',
            time: Math.floor(Date.now() / 1000),
        },
    ]


    const botMessage = {
        text: 'Hi I`m bot',
        time: time,
        userMessage: false
    }

    function sendMessageToFirestore(message) {
        console.log('sendMessageToFirestore');
        addMessageToFirestore.add({message})
    }


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function sortByAge(arr) {
        arr.sort((a, b) => a.age > b.age ? 1 : -1);
    }


    return (
        <div className="blocked-wrap">
            <div style={{position: 'relative'}}>
                <div className="chat">
                    {
                        messages
                            .sort((prev, next) => prev.message.time - next.message.time)
                            .reverse()
                            .map((item, idx) => (
                            <div className={`chat-message ${item.message.userMessage ? 'user-message' : ''}`} key={idx}>
                                <div className="chat-message-foto">
                                    <img src={`${item.message.userMessage ? images[props.name] : images.bot}`} alt={idx} />
                                </div>
                                <div className="chat-message-text">
                                    {item.message && item.message.text}
                                </div>
                                <div className="chat-message-time">
                                    {convertUnixTimestamp(item.message.time)}
                                </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
            <div className="chat-form">
                <form >
                    <div className="textarea-wrap" >
                        <textarea
                            placeholder="Text"
                            onChange={event => handleChange(event)}
                            value={messageState.text}
                            name="text"
                            onKeyPress={handleUserKeyPress}
                        >
                        </textarea>
                    </div>
                    <div className="textarea-count-wrap">
                        <div className="checkbox-wrap">
                            <label>Press Enter to send</label>
                        </div>
                    </div>
                </form>
                <button onClick={() => sendMessageToFirestore(randomBotMessage[getRandomInt(randomBotMessage.length)])}>add bot message</button>
            </div>
        </div>
    );
}

export default ChatItemNew;