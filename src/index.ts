import express from "express";
import path from "path";
const app = express();
const port = 8080;
app.get( "/", ( req, res ) => {
    res.send("go to /server or /client");
} );

app.use("/client", express.static(__dirname + "/client"));
app.use("/server", express.static(__dirname + "/server"));

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
