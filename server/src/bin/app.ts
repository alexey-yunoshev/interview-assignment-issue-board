import { createApp } from "../lib/app";
import {logger} from "../lib/logger";

const serverPort = 3000;

const server = createApp().listen(serverPort, async () => {
    logger.info(`Server listening on port ${serverPort}...`);
})

process.on("SIGTERM", () => {
    server.close(() => {
        logger.info("Server has been stopped.")
    })
});
