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
            unique: true
        },
        rol:{
            type: String,
            required: true,
            enum: ["ADMIN", "SHOPPING_MANAGER", "COMMERCE_MANAGER", "USER"]
        },
    },
    {
        timestamps: true
    }
);

UsuarioSchema.methods.toJSON = function (){
    const { password, createdAt, updatedAt, __v, ...usuario } = this.toObject()
    return usuario ;
}

module.exports = model("Usuario", UsuarioSchema);