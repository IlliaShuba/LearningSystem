import User from "../models/User.js";
import Room from "../models/Room.js";
import City from "../models/City.js";
import {json} from "express";

export const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

export const addToRoom = async (req,res,next)=>{
  const roomId = req.params.roomid;
  const userId = req.params.userid;

  try {
    const updatedRoom =await Room.findByIdAndUpdate(roomId, {
      $push: { tenants: userId },
    });
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
}

export const deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
export const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}