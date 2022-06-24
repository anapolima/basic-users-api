import * as dotenv from "dotenv";
dotenv.config();

const config = {
    PORT: process.env.PORT || 7070,
    POSTGRES: {
        CONNECTION_STRING: process.env.POSTGRES_CONNECTION_STRING,
    }
};

export { config };
