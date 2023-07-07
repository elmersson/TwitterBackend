import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

// create user
app.post('/user', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

// list users
app.get('/user', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

// get one user
app.get('/user/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
});

// update user
app.put('/user/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
});

// delete user
app.delete('/user/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
});

app.listen(3000, () => {
    console.log("Server ready at localhost:3000")
})