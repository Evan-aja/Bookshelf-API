import deletes from "./deletes.js";
import get from "./get.js";
import post from "./post.js";
import put from "./put.js";

const routes = [...get, ...post, ...put, ...deletes];

export default routes;
