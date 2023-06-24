const express = require("express");
const ListItem = require("../models/ListItem");
const router = express.Router();

router.get("/list-items", async (req, res) => {
  try {
    const item = await ListItem.find();
    return res.json(item);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post("/list-items", async (req, res) => {
  try {
    const { name, quantity, checked } = req.body;

    if (!name || name.length < 2) {
      return res.status(400).json({
        error: "Name is mandatory and needs to have more than 2 characters.",
      });
    }

    if (!quantity || typeof quantity !== "number" || quantity < 0) {
      return res
        .status(400)
        .json({ error: "Quantity is mandatory and needs to be a number." });
    }

    const newItem = await ListItem.create({
      name,
      quantity,
      checked: checked || false,
    });

    return res.json(newItem);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.delete("/list-items/:id", async (req, res) => {
  const id = req.params.id;
  const deleteItem = await ListItem.findByIdAndDelete(id);

  return res.json(deleteItem);
});

router.put("/list-items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = {
      name: req.body.name,
      quantity: req.body.quantity,
      checked: req.body.checked || false,
    };

    if (!item.name || item.name.length < 2) {
      return res.status(400).json({
        error: "Name is mandatory and needs to have more than 2 characters.",
      });
    }

    if (
      !item.quantity ||
      typeof item.quantity !== "number" ||
      item.quantity < 0
    ) {
      return res
        .status(400)
        .json({ error: "Quantity is mandatory and needs to be a number." });
    }

    const putItem = await ListItem.findByIdAndUpdate(id, item, { new: true });

    return res.json(putItem);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
