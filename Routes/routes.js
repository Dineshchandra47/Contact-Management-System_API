const express = require("express");
const Schema = require("../Models/User");
const app = express();

app.post("/v1/contacts", async (req, res) => {
  try {
    const contacts = await Schema.create(req.body);
    return res.json(contacts);
  } catch (error) {
    return res.json({ error: `Missing required field :  ${error.message}` });
  }
});

app.get("/v1/contacts", async (req, res) => {
  try {
    const contacts = await Schema.find();
    return res.json({
      status: "Fetching Contacts Success",
      contacts: contacts,
    });
  } catch (error) {
    return res.json(error.message);
  }
});

app.get("/v1/contacts/:id", async (req, res) => {
  try {
    const contacts = await Schema.findOne({ _id: req.params.id });
    if (contacts) {
      return res.json(contacts);
    }
  } catch (error) {
    return res.status(404).json({
      error: "There is no contact with that id",
    });
  }
});

app.delete("/v1/contacts/:id", async (req, res) => {
  try {
    const contacts = await Schema.deleteOne({ _id: req.params.id });
    return res.json({ message: "Selected Contact Deleted Successfully" });
  } catch (error) {
    return res.status(404).json({
      error: "There is no contact with that id",
    });
  }
});

app.put("/v1/contacts/:id", async (req, res) => {
  try {
    const contacts = await Schema.updateOne({ _id: req.params.id }, req.body);
    return res.json({ message: "Contact Updated Successfully updated" });
  } catch (error) {
    return res.status(404).json({
      error: "There is no contact with that id",
    });
  }
});

app.patch("/v1/contacts/:id", async (req, res) => {
  try {
    const contacts = await Schema.updateOne({ _id: req.params.id }, req.body);
    return res.json({ message: "Contact Updated Successfylly " });
  } catch (error) {
    return res.status(404).json({
      error: "There is no contact with that id",
    });
  }
});

module.exports = app;
