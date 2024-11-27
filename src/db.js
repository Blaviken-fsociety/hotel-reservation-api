import {createPool} from "mysql2/promise";
import { DB_DATABASE,DB_HOST,DB_PASSWORD,DB_PORT,DB_USER } from "./config.js";
export const pool=createPool({
    hot:'localhost',
    user:'root',
    password:'3008',
    port:3306,
    database:'hotel'
})
