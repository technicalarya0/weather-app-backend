import WeatherData from "../models/weatherData.models.js";

export const getWeatherData = async (req, res) => {
  try {
    const weatherData = {
      location: req.params.location,
      temperature: Math.floor(Math.random() * 30) + 10,
      condition: ["Sunny", "Cloudy", "Rainy", "Snowy"][
        Math.floor(Math.random() * 4)
      ],
      humidity: Math.floor(Math.random() * 50) + 30,
      windSpeed: Math.floor(Math.random() * 30) + 5,
      timestamp: new Date(),
    };

    const newWeatherData = new WeatherData({userId: req.user.id, location: req.params.location, data: weatherData});
    await newWeatherData.save();

    res.json(weatherData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getHistory = async (req, res) => {
  try {
    const history = await WeatherData.find({ userId: req.user.id })
      .sort({ searchDate: -1 })
      .limit(10);
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
