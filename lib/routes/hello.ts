import express from "express";

export default (req: express.Request, res: express.Response) => {
    res.send('Hello! Nice to see you!');
}
