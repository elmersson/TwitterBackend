import { Router } from "express";

const router = Router();

// create
router.post('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

// lists
router.get('/', (req, res) => {
    res.status(501).json({error: "Not implemented"})
});

// get one
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
});

// update
router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
});

// delete
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({error: `Not implemented: ${id}`})
});

export default router;