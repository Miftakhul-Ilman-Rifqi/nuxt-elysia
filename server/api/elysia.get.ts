import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "This is Elysia!");

export default defineEventHandler(async (event) => {
    try {
        // Untuk route dasar, return response dari Elysia
        const response = await app.handle(new Request("http://localhost/"));
        return await response.text();
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Elysia handler error",
        });
    }
});
