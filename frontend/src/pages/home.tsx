import { useState } from "react";
import { useSocket } from "../hooks/use-socket";

export function HomePage() {
  const [messages, setMessages] = useState([{ id: 0, content: "hello world" }]);
  const [message, setMessage] = useState<string>("");
  const socket = useSocket<{ id: number; content: string }>({
    onMessageArrive: (message) => {
      setMessages((prevState) => [...prevState, message]);
    }
  });

  return (
    <>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const chatMessage = { id: messages.length, content: message };

          setMessages((prevState) => [...prevState, chatMessage]);

          socket.emit("message", chatMessage);

          setMessage("");
        }}
      >
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button>Send</button>
      </form>
    </>
  );
}
