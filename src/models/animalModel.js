const { text } = require("express");
const mongoose = require("mongoose"); // importando el componente mogoose
const animalSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        text: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
        text: true,
    },
    fecha: {
        type: Date,
        requiered: true,
    }
});
module.exports = mongoose.model("Animal", animalSchema);