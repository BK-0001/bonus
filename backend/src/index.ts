import {
  ClerkExpressWithAuth,
  createClerkClient,
  LooseAuthProp,
  WithAuthProp
} from "@clerk/clerk-sdk-node";
import cors from "cors";
import { config } from "dotenv";
import express, { Request } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

declare global {
  namespace Express {
    interface Request extends LooseAuthProp {}
  }
}
config();

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "http://localhost:5173" } });

app.use(cors());
app.use(ClerkExpressWithAuth());

const clerkClient = createClerkClient({
  secretKey: "sk_test_iZxGiofPslO1DxlrsQY8EGtHgVuz8gokrT9wAjc0O9"
});

app.get("/", async (req: WithAuthProp<Request>, res) => {
  const userId = req.auth.userId;

  if (userId) {
    const user = await clerkClient.users.getUser(userId);
    // verification
    // add to db
    // store personalized data

    res.json(user);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

server.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});

io.on("connection", (socket) => {
  console.log("client is connected");

  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });
});
