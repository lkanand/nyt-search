const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/nytreact"
);

server.listen(PORT, function(){
	console.log(`App listening on port ${PORT}`);
});

io.on("connection", function(socket) {
	socket.on("saved article", function(article){
		socket.broadcast.emit("saved article", article);
	});

	socket.on("disconnect", function(){
		console.log("Socket " + socket.id + " disconnected");
	})
});