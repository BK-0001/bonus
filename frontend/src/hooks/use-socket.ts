import { useEffect } from "react";
import { socket } from "../socket";

export function useSocket<T>({
  onMessageArrive
}: {
  onMessageArrive: (message: T) => void;
}) {
  useEffect(() => {
    const handleConnection = () => {
      console.log("connected");
    };

    socket.connect();

    socket.on("connect", handleConnection);
    socket.on("message", onMessageArrive);

    return () => {
      socket.disconnect();
      socket.off("connect", handleConnection);
      socket.off("message", onMessageArrive);
    };
  }, []);
  return socket;
}
