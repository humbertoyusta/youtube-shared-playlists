const { Server } = require("socket.io");

const io = new Server(3001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

const events = ["play", "pause"];

io.on("connection", (socket) => {
    for (const event of events) {
        socket.on(event, (seconds) => {
            socket.broadcast.emit(event, seconds);
        });
    }
});

console.log("Socket IO server started on port 3001");
