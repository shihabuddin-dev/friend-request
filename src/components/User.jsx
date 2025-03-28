import React, { useState } from 'react';
import './User.css'

const User = () => {
    const [sent, setSent] = useState(true)
    const handleSentRequest = () => {
        setSent(false)
    }

    return (
        <div className='details-card'>
            <img src="/src/assets/shihab.jpg" alt="this is shihab uddin images" />
            <h2>Shihab Uddin</h2>
            <p>@shihabuddin-dev</p>
            <button
                className={sent || 'sent-color'}
                onClick={handleSentRequest}>{sent ? 'Friend Request ➡️' : 'Request Send 👌'}
            </button>
        </div>
    );
};

export default User;