const Schedule = require("../model/Schedule");

function convertTo12HourFormat(time24) {
  const [hourStr, minuteStr] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12; // Convert '0' to '12'
  return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
}

// Helper function to generate an array of date strings between two dates
function getDateRange(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const dateArray = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split("T")[0]; // Format: 'YYYY-MM-DD'
    dateArray.push(dateStr);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
}

const addSchedules = async (req, res) => {
};

const getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find(); // Fetch all schedules from the database
    res.status(200).json(schedules); // Send the schedules as a JSON response
  } catch (error) {
    console.error("Error fetching schedules:", error);
    res.status(500).json({ message: "Internal server error" }); // Handle errors
  }
};

const getScheduleByDateAndEmployee = async (req, res) => {
  const { date, employeeName } = req.params; // Extract date and employee name from request parameters

  try {
    console.log(
      `Fetching schedule for date: ${date}, employee: ${employeeName}`
    );

    const schedule = await Schedule.find({
      "shift_schedule.date": date, // Ensure you are querying the correct field
      name: employeeName, // Match the name exactly
    });

    if (schedule.length === 0) {
      return res
        .status(404)
        .json({
          message: "No schedule found for the specified date and employee.",
        });
    }

    res.status(200).json(schedule);
  } catch (error) {
    console.error("Error fetching schedule:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getWeeklySchedule = async (req, res) => {
  const { weekStart, employeeName } = req.params; // Extract week start date and employee name
  try {
    const schedules = await Schedule.find({
      "shift_schedule.date": {
        $gte: weekStart,
        $lt: new Date(
          new Date(weekStart).setDate(new Date(weekStart).getDate() + 7)
        ),
      },
      name: employeeName,
    });
    res.status(200).json(schedules);
  } catch (error) {
    console.error("Error fetching weekly schedule:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getMonthlySchedule = async (req, res) => {
  const { month, year, employeeName } = req.params; // Extract month, year, and employee name
  try {
    const schedules = await Schedule.find({
      "shift_schedule.date": {
        $gte: new Date(year, month, 1),
        $lt: new Date(year, month + 1, 1),
      },
      name: employeeName,
    });
    res.status(200).json(schedules);
  } catch (error) {
    console.error("Error fetching monthly schedule:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllSchedulesByName = async (req, res) => {
  const { selectedDate, employeeName } = req.params;
  console.log(selectedDate, employeeName);

  try {
    const date = new Date(selectedDate);
    const month = date.getMonth();
    const year = date.getFullYear();

    // Get week start and end
    const weekStart = new Date(date);
    weekStart.setDate(date.getDate() - date.getDay()); // Sunday
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6); // Saturday

    // Get month start and end
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);

    // Fetch schedule once
    const schedule = await Schedule.findOne({ name: employeeName });

    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    // Filter shift_schedule array
    const dailySchedule = schedule.shift_schedule.filter(
      (shift) => shift.date === selectedDate
    );

    const weeklySchedule = schedule.shift_schedule.filter((shift) => {
      const shiftDate = new Date(shift.date);
      return shiftDate >= weekStart && shiftDate <= weekEnd;
    });

    const monthlySchedule = schedule.shift_schedule.filter((shift) => {
      const shiftDate = new Date(shift.date);
      return shiftDate >= monthStart && shiftDate <= monthEnd;
    });

    res.status(200).json({
      daily: dailySchedule,
      weekly: weeklySchedule,
      monthly: monthlySchedule,
    });
  } catch (error) {
    console.error("Error fetching schedules:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateShiftScheduler = async (req, res) => {
  const { employeeId, startDate, endDate, shiftStart, shiftStop } = req.body;

  if (!employeeId || !startDate || !endDate || !shiftStart || !shiftStop) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Convert shift times to 12-hour format with AM/PM
    const formattedShiftStart = convertTo12HourFormat(shiftStart);
    const formattedShiftStop = convertTo12HourFormat(shiftStop);

    // Find the schedule document for the specified employee
    const schedule = await Schedule.findOne({ name: employeeId });

    if (!schedule) {
      return res
        .status(404)
        .json({ error: "Schedule not found for the specified employee" });
    }

    // Generate the list of dates within the specified range
    const dateList = getDateRange(startDate, endDate);

    // Update the shift times for each matching date
    let updated = false;
    schedule.shift_schedule.forEach((entry) => {
      if (dateList.includes(entry.date)) {
        entry.shiftStart = formattedShiftStart;
        entry.shiftStop = formattedShiftStop;
        updated = true;
      }
    });

    if (!updated) {
      return res
        .status(404)
        .json({ error: "No matching dates found in the schedule" });
    }

    // Save the updated schedule document
    await schedule.save();

    return res.status(200).json({ message: "Schedule updated successfully" });
  } catch (error) {
    console.error("Error updating schedule:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deleteAllSchedules = async (req, res) => {
  try {
    // Delete all documents in the Schedule collection
    const result = await Schedule.deleteMany({});
    console.log(`Deleted ${result.deletedCount} schedules.`); // Log the number of deleted documents
    res
      .status(200)
      .json({ message: "All schedules have been deleted successfully." });
  } catch (error) {
    console.error("Error deleting schedules:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addSchedules,
  getAllSchedules,
  getScheduleByDateAndEmployee,
  getWeeklySchedule,
  getMonthlySchedule,
  getAllSchedulesByName,
  deleteAllSchedules,
  updateShiftScheduler,
};
