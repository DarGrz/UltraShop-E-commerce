import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@dummy.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "john Wick",
    email: "johnwick@dummy.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "janet Jackson",
    email: "janetofthehill@dummy.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
