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
    const url = new URL(request.url);

    if (url.pathname.toLowerCase() === '/downloads/emotes/kiriko') {
      url.pathname = '/downloads/emotes/Kiriko';
      return Response.redirect(url.toString(), 301);
    }

    return fetch(request);
  },
};
