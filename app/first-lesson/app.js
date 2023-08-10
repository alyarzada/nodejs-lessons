const user = require("./globals");

const fullName = () => {
  console.log(`My fullname is ${user.name} ${user.surname}`);
};

fullName();
