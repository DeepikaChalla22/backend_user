const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String },
  employeeID: { type: String },
  attendancePercent: { type: Number },
  presentDays: { type: Number },
  absentDays: { type: Number },
}, {
  collection: "Attendance" 
});

module.exports = mongoose.model("employeeSchema", employeeSchema);
