import createAuth from "@edgedb/auth-nextjs/app";
import { createClient } from "edgedb";

export const client = createClient({
    tlsSecurity:
        process.env.NODE_ENV === "development" ? "insecure" : undefined,
});

export const auth = createAuth(client, {
    baseUrl: process.env.BASE_URL as string,
});
