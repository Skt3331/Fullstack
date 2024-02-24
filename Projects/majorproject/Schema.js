const Joi=require("joi");
module.exports= listingSchema =joi.object({
    listing:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        loacation:Joi.string().required(),
        country:Joi.string().required(),
        image:Joi.string().allow("",null),
        price:Joi.number().required().min(0),
    })
    .required()
})