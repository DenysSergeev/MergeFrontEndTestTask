const RULES = {
  email: ["required", "trim", "email"],
  password: ["required", "trim", "string", { min_length: 8 }],
};

export default RULES;
