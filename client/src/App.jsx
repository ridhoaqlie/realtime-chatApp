import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MessageDisplay from "./components/MessageDisplay";
import MessageForm from "./components/MessageForm";
import DeleteAlert from "./components/DeleteAlert";

const ws = new WebSocket("ws://localhost:3000/cable");

function App() {

  const [messages, setMessages] = useState([]);
  const [guid, setGuid] = useState("");

  ws.onopen = () => {
    console.log("Connected to websocket server");
    setGuid(Math.random().toString(36).substring(2, 15));
    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          id: guid,
          channel: "MessagesChannel",
        }),
      })
    );
  };

  ws.onmessage = (e) => {
    try {
      const data = JSON.parse(e.data);
      if (data.type === "ping") return;
      if (data.type === "welcome") return;
      if (data.type === "confirm_subscription") return;

      const newMessage = data.message;
      displayMessage([...messages, newMessage]);
      document.getElementById("messageContainer").scrollTop = document.getElementById("messageContainer").scrollHeight;
    } catch (err) {
      console.error("Error handling WebSocket message:", err);
    }

  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    console.log('fecth message')
    const response = await fetch("http://localhost:3000/messages");
    const data = await response.json();
    if (!data || data.length === 0) {
      // setMessages([]); // Set messages to an empty array if no data is returned
    } else {
      displayMessage(data);
    }
  };

  const displayMessage = (data) => {
    setMessages(data);

    //auto scroll action
    document.getElementById("messageContainer").scrollTop = document.getElementById("messageContainer").scrollHeight;

  };


  return (
    <div className="max-w-[900px] mx-auto h-full">
      <Navbar setMessages={setMessages} />
      <MessageDisplay messages={messages} />
      <MessageForm />
      {/* <DeleteAlert /> */}
    </div >
  );
}
export default App
