// Chatbot.js
import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      generateBotResponse(newMessage);
      setNewMessage('');
    }
  };

  const generateBotResponse = (userMessage) => {
    let botMessage = "I'm still learning. Could you please rephrase your question or ask something else?";
    const lowerCaseMessage = userMessage.toLowerCase();
  
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      botMessage = "Hello! How can I assist you with your medical needs today?";
    } else if (lowerCaseMessage.includes('help')) {
      botMessage = "Certainly! What specific assistance do you require? You can ask about appointments, services, or general inquiries.";
    } else if (lowerCaseMessage.includes('appointment')) {
      botMessage = "To book an appointment, you can visit our online appointment page or call our reception at +917387130524 or +919356274667. Would you like information on available doctors or times?";
    } else if (lowerCaseMessage.includes('services')) {
      botMessage = "We provide a range of medical services including general health check-ups, specialist consultations, diagnostics, and emergency care. Is there a specific service you're interested in?";
    } else if (lowerCaseMessage.includes('contact')) {
      botMessage = "For general inquiries, email us at arogyaconnectwork@gmail.com. For appointments, call +917387130524 or +919356274667. In case of emergencies, dial our emergency number: 112-334-5566.";
    } else if (lowerCaseMessage.includes('thank')) {
      botMessage = "You're welcome! Your health is our top priority. Do you have any other questions?";
    } else if (lowerCaseMessage.includes('emergency')) {
      botMessage = "In case of an emergency, please call our emergency line at 112-334-5566 immediately. For urgent care, visit our clinic directly.";
    } else if (lowerCaseMessage.includes('hours') || lowerCaseMessage.includes('opening times')) {
      botMessage = "Our clinic is open Monday to Friday, 8:00 AM to 6:00 PM. On Saturdays, we're open from 9:00 AM to 3:00 PM. We're closed on Sundays.";
    } else if (lowerCaseMessage.includes('location')) {
      botMessage = "We're located at St. Vincent Pallotti College of Engineering and Technology. You can find directions and more details on our website.";
    } else if (lowerCaseMessage.includes('prescription') || lowerCaseMessage.includes('medication')) {
      botMessage = "For prescription refills, please contact your doctor or use our online prescription service. Do you need help with a specific medication?";
    }
  
  setTimeout(() => {
    setMessages(messages => [...messages, { text: botMessage, sender: 'bot' }]);
  }, 1000); // Simulate a delay in response
};


    const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
    if (!isChatbotOpen && messages.length === 0) {
      setMessages([{ text: "Welcome I am your Chatbot. How can i assist you Today?", sender: 'bot' }]);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isChatbotOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h2>Chat with Us</h2>
          </div>
          <div className="chatbot-messages" ref={messagesContainerRef}>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
      <button onClick={toggleChatbot} className="chatbot-toggle-button">
        {isChatbotOpen ? ' ^ ' : ' @ '}
      </button>
    </div>
  );
};

export default Chatbot;
