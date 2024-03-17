import React, { useState } from 'react';
import axios from 'axios';

export default function Post_Without() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendToServer = () => {
        axios.post('http://localhost:5001/post-message', { message })
            .then(() => {
                setResponse('Message posted successfully!');
            })
            .catch((error) => {
                // It's still good to handle errors
                console.error('Error sending to server:', error.response ? error.response.data.message : error.message);
            });
    };

    return (
        <div>
            <h2>Post to Database</h2>
            <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendToServer}>Send</button>
            <div>{response}</div>
        </div>
    );
}
