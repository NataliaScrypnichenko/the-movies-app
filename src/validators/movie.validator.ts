import * as Joi from "joi";


const movieValidator=Joi.object({
    query : Joi.string().pattern(/^[a-zA-Z0-9\s'’-]{4,}$/).required().messages({
        "string.pattern.base": "Please enter a movie title using English",
        "string.empty": "Movie title is required"
    }),

});
export default movieValidator;
