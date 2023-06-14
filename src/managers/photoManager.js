const Photo = require('../models/Photo');

exports.create = (photoData) => Photo.create(photoData);

exports.getAll  = () => Photo.find().populate('owner');

exports.getOne = (photoId) => Photo.findById(photoId).populate('owner');