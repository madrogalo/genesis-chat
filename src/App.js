import React from 'react';
import ChatWrap from './components/chatWrap';
import ChatBlock from './components/chatBlock';

import './styles/bootstrap-reboot.css';
import './styles/chat-block.css';
import './styles/chat.css';
import './styles/style.css';


function App(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-9" style={{ display: 'flex', backgroundColor: 'white' }}>
                    <ChatWrap />
                    <ChatBlock />
                </div>
                <div className="col-3" style={{color: 'white'}}>

                </div>
            </div>
        </div>
    );
}

export default App;