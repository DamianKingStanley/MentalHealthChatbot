import React, { useState } from "react";
import axios from "axios";
import thera from "../../assest/thera.jpg";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import "./MedBot.css";

function MedBot() {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl = "https://mental-server.onrender.com/api/chat";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(apiUrl, { input });

      setChatHistory([
        ...chatHistory,
        { user: input, bot: res.data.generated_text },
      ]);

      setInput(""); // Clear input field
      setLoading(false);
    } catch (error) {
      setError(
        "Failed to fetch response: " +
          (error.response ? error.response.data.error : error.message)
      );
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <Navibar />
      <div className="MedBotBody">
        {loading && <div className="loader"></div>}

        <div className="MedBotHeader">
          <img src={thera} alt="Therapist" />
          <h1>Mental Health Chatbot </h1>
        </div>

        <div className="MedBotResponse">
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index}>
                <p className="studentAsk">{chat.user}</p>
                <p className="therapistResponse">{chat.bot}</p>
              </div>
            ))}
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <div className="QuestionSection">
          <form className="MedBotInput" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What's on your mind?"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MedBot;
