const Joi = require('joi');

const validarIdParamComercio = async (req, res, next) => {
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

const validarPostComercio = async(req, res, next) => {
    const schema = Joi.object({
        _id: Joi.string().required(), 
        nombre: Joi.string().required(),
        manager: Joi.string().required(),
        shopping: Joi.string().required(),
});

try{
    await schema.validateAsync(req.body);
    return next();   
} catch(err){
    console.log(err)
    return res.status(400).send({ mensaje: "Datos no válidos",
        })
    }
}

const validarPutComercio = async (req, res, next) => {
    const schema = Joi.object({
        nombre: Joi.string(),
        manager: Joi.string(),
        shopping: Joi.string(),
       
    })
    try{
        await schema.validateAsync(req.body);
        return next();   
    } catch(err){
        console.log(err)
        return res.status(400).send({mensaje: "Datos no válidos",
            })
    }
    
}

module.exports = {
    validarIdParamComercio,
    validarPostComercio,
    validarPutComercio,
}