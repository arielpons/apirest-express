const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellido: {
            type: String,
            required: true,
        },
        fec_nac:{
            type: Date,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        roles: [{
            type: String,
            required: true,
            enum: ["ADMIN", "SHOPPING_MANAGER", "COMMERCE_MANAGER", "USER"]
        }]
    },
    {
        timestamps: true
    }
);

module.exports = model("Usuario", UsuarioSchema);