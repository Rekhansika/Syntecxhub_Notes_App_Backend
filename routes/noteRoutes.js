const express = require("express");
const Note = require("../models/Note");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create Note
router.post("/", auth, async (req, res) => {

  const note = await Note.create({
    title: req.body.title,
    content: req.body.content,
    user: req.user.id
  });

  res.json(note);
});

// Get All Notes of Logged-in User
router.get("/", auth, async (req, res) => {

  const notes = await Note.find({
    user: req.user.id,
    isArchived: false
  });

  res.json(notes);
});

// Get Single Note
router.get("/:id", auth, async (req, res) => {

  const note = await Note.findOne({
    _id: req.params.id,
    user: req.user.id
  }).populate("user", "name email");

  if (!note)
    return res.status(404).json({ message: "Note not found" });

  res.json(note);
});

// Update Note
router.put("/:id", auth, async (req, res) => {

  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );

  res.json(note);
});

// Soft Delete (Archive)
router.patch("/:id/archive", auth, async (req, res) => {

  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { isArchived: true },
    { new: true }
  );

  res.json(note);
});

module.exports = router;