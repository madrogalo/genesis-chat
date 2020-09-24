import React, {useEffect, useState} from 'react';

function ChatItem(props) {
    const [ messages, setMessages ] = useState({})
    const [ formState, setFormState ] = useState({
        text: '',
        time: '5 hours ago',
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
            time: '5 hours ago',
            userMessage: true
        })

    }

    const handleUserKeyPress = e => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            addMessage();
            postMessage();
        }
    };


    function postMessage() {
        fetch(`https://genisis-chat.firebaseio.com/${props.name}.json`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formState)
        })
        .then((response) => {
            return response.json();
        })
    }

    function getMessage() {
        fetch(`https://genisis-chat.firebaseio.com/${props.name}.json`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMessages(data)
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
                                    <img src="" alt={idx} />
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