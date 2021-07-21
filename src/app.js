//main imports
import express from "express";
import cors from "cors";
import http from "http";

const app = express();

import contact from "./routes/contacts";
import chats from "./routes/chats";
import admin from "./routes/admin";
import message from "./routes/message";

//middleware
app.set("PORT", process.env.PORT || 3002);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my rest api." });
});

app.use("/api/contact", contact);
app.use("/api/chats", chats);
app.use("/api/admin", admin);
app.use("/api/message", message);

//initialize server
const server = http.createServer(app);
server.listen(app.get("PORT"), () => {
  console.log("Project is running at port ", app.get("PORT"));
});
