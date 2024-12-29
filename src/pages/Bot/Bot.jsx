import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./Bot.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import botImage from "../../assest/botImage.png";

function Bot() {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch previous conversations when the component loads
  useEffect(() => {
    const studentData = JSON.parse(sessionStorage.getItem("studentData"));
    const userId = studentData ? studentData.result.id : null; // Get userId

    const username = studentData ? studentData.result.username : "there"; // Get username for the welcome message

    // Set the welcome message
    setResponses((prevResponses) => [
      ...prevResponses,
      { botReply: `Welcome back, ${username}. How may I help you today?` },
    ]);

    if (userId) {
      const fetchConversations = async () => {
        const response = await fetch(
          `https://mental-server.onrender.com/conversations/${userId}`
        );

        // Check the response status
        if (!response.ok) {
          console.error("Error fetching conversations:", response.statusText);
          return; // Exit if there’s an error
        }

        const data = await response.json();
        // console.log("Fetched data:", data);

        // Check if data is an array before mapping
        if (Array.isArray(data)) {
          const formattedResponses = data.map((conv) => ({
            userMessage: conv.userMessage,
            botReply: conv.botReply,
          }));
          setResponses(formattedResponses);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      };
      fetchConversations();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const studentData = JSON.parse(sessionStorage.getItem("studentData"));
    const userId = studentData ? studentData.result.id : null; // Get userId

    const response = await fetch("https://mental-server.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, userId }),
    });

    const data = await response.json();
    setResponses((prevResponses) => [
      ...prevResponses,
      { userMessage: message, botReply: data.reply },
    ]);
    setMessage("");
    setLoading(false);
  };

  return (
    <div className="AssistantBotBody">
      <Navbar />
      <Navibar />

      <div className="AssistantHeader">
        <h1>Riri Therapist Bot</h1>
      </div>
      <div className="Assistant-chat">
        {responses.map((res, index) => (
          <div key={index} className="message-container">
            {res.userMessage && (
              <div className="user-message">
                <p className="userinput">{res.userMessage}</p>
              </div>
            )}

            <div className="bot-message">
              <p className="assistantanswer">
                <img src={botImage} alt="Bot" className="bot-icon" />
                <ReactMarkdown>{res.botReply}</ReactMarkdown>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {loading && <p>Please wait.....</p>}

        <form id="AssistantForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask your questions"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Bot;
