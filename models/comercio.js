const { Schema, model } = require("mongoose");

const ComercioSchema = Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        manager: {
            type: Schema.Types.ObjectId,
            ref: "Usuario",
            required: true,
        },
        shopping:{
            type: Schema.Types.ObjectId,
            ref: "Shopping",
            required: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = model("Comercio", ComercioSchema);