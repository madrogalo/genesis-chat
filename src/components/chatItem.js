import React, {useState} from 'react';

function ChatItem(props) {

    const chat_messages = [
        {
            text: `My name is ${props.name}`,
            time: '5 hours ago',
            userMessage: false
        },
        {
            text: `You are so stupid...`,
            time: '42 hours ago',
            userMessage: false
        },
        {
            text: `You are so stupid...`,
            time: '42 hours ago',
            userMessage: true
        },
    ]

    const [ messages, setMessages ] = useState(chat_messages)
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

    const pushh = () => {

            setMessages(oldArray => [formState, ...oldArray])
                setFormState({
                    text: '',
                    time: '5 hours ago',
                    userMessage: true
                })

    }

    const handleUserKeyPress = e => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            pushh()
        }
    };

    return (
        <div className="blocked-wrap">
            <div style={{position: 'relative'}}>
                <div className="chat">
                    {
                        messages.map((item, idx) => (
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