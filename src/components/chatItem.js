import React from 'react';

function ChatItem(props) {
    return (
        <div className="blocked-wrap">
            <div style={{position: 'relative'}}>
                <div className="chat">

                    <div className="chat-message">
                        <div className="chat-message-foto">
                            <a href=""><img src="" alt="" /></a>
                        </div>
                        <div className="chat-message-text">
                            My name is {props.name}
                        </div>
                        <div className="chat-message-time">2 hours ago</div>
                    </div>

                    <div className="chat-message user-message">
                        <div className="chat-message-foto">
                            <a href=""><img src="" alt="" /></a>
                        </div>
                        <div className="chat-message-text">
                            You are so stupid...
                        </div>
                        <div className="chat-message-time">2 hours ago</div>
                    </div>
                    <div className="chat-message">
                        <div className="chat-message-foto">
                            <a href=""><img src="" alt="" /></a>
                        </div>
                        <div className="chat-message-text">
                            London is the capital of great britain.
                        </div>
                        <div className="chat-message-time">2 hours ago</div>
                    </div>
                    <div className="chat-message user-message">
                        <div className="chat-message-foto">
                            <a href=""><img src="" alt="" /></a>
                        </div>
                        <div className="chat-message-text">
                            Hello, bot
                        </div>
                        <div className="chat-message-time">2 hours ago</div>
                    </div>
                </div>
            </div>
            <div className="chat-form">
                <form action="">
                    <div className="textarea-wrap">
                        <textarea placeholder="Text"></textarea>
                    </div>
                    <div className="textarea-count-wrap">
                        <div className="checkbox-wrap">
                            <label><span>Press Enter to send</span></label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChatItem;