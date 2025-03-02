/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const apiUrl = "https://api.lynnux.xyz";

    try {
      const response = await fetch(apiUrl, { method: "GET" });

      if (response.ok) {
        return new Response(JSON.stringify({ status: "online" }), {
          headers: { "Content-Type": "application/json" },
        });
      }
    } catch (error) {
      return new Response(JSON.stringify({ status: "offline" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
