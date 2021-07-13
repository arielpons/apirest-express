const Joi = require('joi');

const validarIdParamShopping = async (req, res, next) => {
    const schema = Joi.object({
        _id: Joi.string().required(),
    }).required();

    try{
        await schema.validateAsync(req.params);
        return next();
    } catch(err){
        return res.status(400).send({mensaje: "Datos no válidos",
        })
    }
}

const validarPostShopping = async(req, res, next) => {
    const schema = Joi.object({
        _id: Joi.string().required(), 
        nombre: Joi.string().required(),
        manager: Joi.string().required(),
        comercios: Joi.array().items(Joi.string()).required(),
});

try{
    await schema.validateAsync(req.body);
    return next();   
} catch(err){
    console.log(err)
    return res.status(400).send()({
        mensaje: "Datos no válidos",
        })
    }
}

const validarPutShopping = async (req, res, next) => {
    const schema = Joi.object({
        _id: Joi.string(), 
        nombre: Joi.string(),
        manager: Joi.string(),
        comercios: Joi.array().items(Joi.string()),
    })
    try{
        await schema.validateAsync(req.body);
        return next();   
    } catch(err){
        console.log(err)
        return res.status(400).send()({
            mensaje: "Datos no válidos",
            })
    }
    
}

module.exports = {
    validarIdParamShopping,
    validarPostShopping,
    validarPutShopping,
}