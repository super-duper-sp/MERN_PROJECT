// src/server/databaseUtils.js

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'mockDatabase.json');

// Read data from the JSON file
const readData = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or there is an error, return an empty object
    return {};
  }
};

// Write data to the JSON file
const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
};

// Function to add a new reminder to the mock database
const addReminder = (newReminder) => {
  const database = readData();
  const newReminderWithId = { id: Date.now(), ...newReminder };
  database.reminders = [...(database.reminders || []), newReminderWithId];
  writeData(database);
  return newReminderWithId;
};

// Function to get all reminders from the mock database
const getAllReminders = () => {
  const database = readData();
  return database.reminders || [];
};

module.exports = {
  addReminder,
  getAllReminders,
};
