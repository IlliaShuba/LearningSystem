import Hotel from "../models/Hotel.js";
import City from "../models/City.js";

export const createCity = async (req, res, next) => {
  const newCity = new City(req.body);

  try {
    const savedCity = await newCity.save();
    res.status(200).json(savedCity);
  } catch (err) {
    next(err);
  }
};
export const updateCity = async (req, res, next) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCity);
  } catch (err) {
    next(err);
  }
};
export const deleteCity = async (req, res, next) => {
  try {
    await City.findByIdAndDelete(req.params.id);
    res.status(200).json("City has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCity = async (req, res, next) => {
  try {
    const city = await City.findById(req.params.id);
    res.status(200).json(city);
  } catch (err) {
    next(err);
  }
};
export const getCities = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const cities = await City.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(cities);
  } catch (err) {
    next(err);
  }
};

export const getCityHotels = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};