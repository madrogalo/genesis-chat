import React, {useEffect, useState} from 'react';

const images = {
    john_show: 'https://ktovkurse.com/wp-content/uploads/2015/06/jon-Snow-e1435181608374.jpg',
    martin: 'https://lh3.googleusercontent.com/mIUvQSu1ja5Lpx-HS0ztqFPkudgzU0GGwZGJNaVZ8_D_31zC7mhw5eM8TwRJ_ByBY4UyYg=s85',
    sherlock: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/1/13/1389634544964/Sherlock-Holmes-BBC-011.jpg?width=445&quality=85&auto=format&fit=max&s=ff65ab18713d2fa201c8181ae127ee30',
    monica: 'https://i.pinimg.com/736x/19/31/e6/1931e627532feeb3232d4e00ae5d2924.jpg',
    dallas:  'https://fs.kinomania.ru/file/person/1/c0/1c0cae540f9eeeaf4830019bd17a1e47.jpeg',
    bot: 'https://snipp.ru/uploads/view/d880306f44d95f58d3a955e22d3ae165.png'
}

function ChatItem(props) {
    const [ messages, setMessages ] = useState({})
    const [ formState, setFormState ] = useState({
        text: '',
        time: `${new Date().getHours()} : ${new Date().getMinutes()}`,
        userMessage: true
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    };

    const addMessage = () => {
        setMessages({...messages, formState })
        setFormState({
            text: '',
            time: `${new Date().getHours()} : ${new Date().getMinutes()}`,
            userMessage: true
        })

    }

    const handleUserKeyPress = e => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            addMessage();
            postMessage(formState);
        }
    };


    function postMessage(data) {
        fetch(`https://genisis-chat.firebaseio.com/${props.name}.json`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(() => {
            getMessage()
        })
    }

    function getMessage() {
        fetch(`https://genisis-chat.firebaseio.com/${props.name}.json`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMessages(data === null ? {} : data)
            });
    }

    useEffect(() => {
        getMessage()
    }, [])



    return (
        <div className="blocked-wrap">
            <div style={{position: 'relative'}}>
                <div className="chat">
                    {
                        messages && Object
                            .values(messages)
                            .reverse()
                            .map((item, idx) => (
                            <div className={`chat-message ${item.userMessage ? 'user-message' : ''}`} key={idx}>
                                <div className="chat-message-foto">
                                    <img src={`${item.userMessage ? images[props.name] : images.bot}`} alt={idx} />
                                </div>
                                <div className="chat-message-text">
                                    {item.text}
                                </div>
                                <div className="chat-message-time">{item.time}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="chat-form">
                <form >
                    <div className="textarea-wrap" >
                        <textarea
                            placeholder="Text"
                            onChange={event => handleChange(event)}
                            value={formState.text}
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
            </div>
        </div>
    );
}

export default ChatItem;