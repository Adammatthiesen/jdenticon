import type { APIContext, APIRoute } from "astro";
import * as jdenticon from "jdenticon";

export const prerender = false

export const GET: APIRoute = (ctx: APIContext) => {

    const { name } = ctx.params;

    const size = 200;
    const value = name;
    
    const png = jdenticon.toPng(value, size);
    return new Response(png, {
        headers: {
            "Content-Type": "image/png"
        }
    })
}