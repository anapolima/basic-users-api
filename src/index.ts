import { app } from "./server";
import { config } from "./config";

app.listen(config.PORT, () => console.log(`server listening on port ${config.PORT}`));
