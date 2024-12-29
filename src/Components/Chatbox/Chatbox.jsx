import React, { useState } from 'react';
import './Chatbox.css';

export const Chatbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            // Mock bot response
            setTimeout(() => {
                setMessages((prev) => [...prev, { text: 'Xin chào! Cảm ơn bạn đã liên hệ.', sender: 'bot' }]);
            }, 1000);
        }
    };

    return (
        <div className="chat-bubble-container">
            {/* Bong bóng chat */}
            {!isOpen && (
                <div className="chat-bubble-icon" onClick={() => setIsOpen(true)}>
                    💬
                </div>
            )}

            {/* Giao diện chatbox */}
            {isOpen && (
                <div className="chat-bubble-chatbox">
                    <div className="chat-bubble-header">
                        <p>Hỗ trợ trực tuyến</p>
                        <button onClick={() => setIsOpen(false)}>×</button>
                    </div>
                    <div className="chat-bubble-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-bubble-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Nhập tin nhắn..."
                        />
                        <button onClick={handleSend}>Gửi</button>
                    </div>
                </div>
            )}
        </div>
    );
};
