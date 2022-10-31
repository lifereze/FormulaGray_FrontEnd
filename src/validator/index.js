import Joi from "joi";

export const validateSignupData = async (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.any()
      .equal(Joi.ref("password"))
      .required()
      .label("Confirm password")
      .messages({ "any.only": "{{#label}} does not match" }),
    role: Joi.any().valid(
      "admin",
      "student",
      "recruitmentPartner",
      "institution"
    ),
    remember: Joi.string().allow(""),
  });
  try {
    await schema.validateAsync(data);
    return { status: true, message: null };
  } catch (err) {
    return { status: false, message: err.details[0].message };
  }
};

export const validateSigninData = async (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(6).required(),
  });
  try {
    await schema.validateAsync(data);
    return { status: true, message: null };
  } catch (err) {
    return { status: false, message: err.details[0].message };
  }
};
