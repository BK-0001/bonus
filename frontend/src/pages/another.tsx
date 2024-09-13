import { useSocket } from "../hooks/use-socket";

export default function AnotherPage() {
  const socket = useSocket<{ id: number; content: string }>({
    onMessageArrive: (message) => {
      // do something
    }
  });

  return <div>AnotherPage</div>;
}
