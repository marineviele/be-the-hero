const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    sessionCreate: celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
        })
    }),

    ongCreate: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required().min(9).max(12),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2)
        })
    }), 

    profileIndex: celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(), 
        }).unknown(),
    }),

    incidentIndex: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        }) 
    }), 

    incidentCreate: celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required()
        }),
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(), 
    }),

    incidentDelete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required(),
        })
    }) ,
};