import * as dotenv from "dotenv";
dotenv.config();

const config = {
    PORT: process.env.PORT
};

export { config };
