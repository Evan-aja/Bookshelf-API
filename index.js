import Hapi from "@hapi/hapi";
import routes from "./routers/routes.js";
const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost",
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    });

    server.route(routes);
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
