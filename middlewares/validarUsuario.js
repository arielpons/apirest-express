const Joi = require('joi');

const validarIdParamUsuario = async (req, res, next) => {
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

const validarPostUsuario = async(req, res, next) => {
    const schema = Joi.object({
        _id: Joi.string().required(), 
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        fec_nac: Joi.date().required(),
        password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        roles: Joi.array()
         .items(
             Joi.string().valid(
            'ADMIN',
            'SHOPPING_MANAGER',
            'COMERCE_MANAGER',
            'USER'
            )
         )
        
        .max(4)
        .required(),
});

try{
    await schema.validateAsync(req.body);
    return next();   
} catch(err){
    console.log(err)
    return res.status(400).send({mensaje: "Datos no válidos",
        })
    }
}

const validarPutUsuario = async (req, res, next) => {
    const schema = Joi.object({
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        roles: Joi.array()
        .items(
            Joi.string().valid(
           'ADMIN',
           'SHOPPING_MANAGER',
           'COMERCE_MANAGER',
           'USER'
           )
        )
        .max(4),
    })

    try{
        await schema.validateAsync(req.body);
        return next();   
    } catch(err){
        console.log(err)
        return res.status(400).send({
            mensaje: "Datos no válidos",
            })
    }
}

module.exports = {
    validarIdParamUsuario,
    validarPostUsuario,
    validarPutUsuario,
}