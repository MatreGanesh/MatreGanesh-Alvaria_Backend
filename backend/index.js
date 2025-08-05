const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const app = express();
//import routes
const scheduleRoutes = require('./routes/scheduleRoute');
const ewfmRoutes = require('./routes/ewfmRoute')
const userRoute = require('./routes/userRoute')
const forecastingRoutes = require('./routes/Forecasting/forecastingRoutes')
const MonthlyPatternRoutes = require('./routes/Forecasting/MonthlyPatternUpdatesRoutes')
const HolidayFactorsRoutes = require('./routes/Forecasting/HolidayFactorsRoutes')

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log("HTTP method = " + req.method + " , URL - " + req.url);
    next()
})

//path
app.use('/api/schedule', scheduleRoutes);
app.use('/api/ewfm', ewfmRoutes);
app.use('/api/user', userRoute);
app.use('/api/forecasting', forecastingRoutes);
app.use('/api/forecasting', MonthlyPatternRoutes);
app.use('/api/forecasting', HolidayFactorsRoutes);


mongoose.connect(process.env.MONGODB_URL)
    .then(() => app.listen(process.env.PORT))
    .then(() => console.log(`mongoDB connected succesfully to ${process.env.PORT}`))
    .catch((err) => console.log(err))


