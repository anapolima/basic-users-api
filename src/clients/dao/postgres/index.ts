import { Client } from "pg";
import { config } from "../../../config";

class PostgresDB
{
    protected client: Client;

    public constructor ()
    {
        this.client = new Client({
            connectionString: config.POSTGRES.CONNECTION_STRING
        });
    }
}

export { PostgresDB };
