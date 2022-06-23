import { CreateUser } from "../controllers/create-user";
import Router from "express";

const route = Router();

route.route("/users")
    .post(new CreateUser().handle.bind(new CreateUser()));

export default route;
