const { Schema, model } = require("mongoose");

const ShoppingSchema = Schema(
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
        comercios:[{
            type: Schema.Types.ObjectId,
            ref: "Comercio",
            required: true,
        }],
    },
    {
        timestamps: true
    }
);

module.exports = model("Shopping", ShoppingSchema);