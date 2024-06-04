import {Server as SocketIOServer} from "socket.io"
import http from 'http';


export const initSocketServer = (server: http.Server) =>{
    const io = new SocketIOServer (server);
    io.on("connection", (socket) =>{
        console.log("New user connected");
        // listen for notification event form thefrontend
        socket.on("notification", (data) =>{
            io.emit("newNotification", data);
        });

        socket.on("disconnect", () =>{
            console.log("User disconnected");
        });
    })
}