import dotenv from "dotenv";
dotenv.config();

const variables = {
  TOKEN: process.env.TOKEN,
  PORT: Number(process.env.PORT),
  BASIC_USERNAME: process.env.BASIC_USERNAME,
  BASIC_PASSWORD: process.env.BASIC_PASSWORD,
};
export default variables;
