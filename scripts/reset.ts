import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Resetting database");
        
        await db.delete(schema.courses);
        await db.delete(schema.clinicalCases);
        await db.delete(schema.users);

        console.log("Resetting finished");
    }   catch (error) {
        console.error(error);
        throw new Error("Failed to reset the database");
    }
};

main();
