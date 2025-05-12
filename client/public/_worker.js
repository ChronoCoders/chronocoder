export default {
  async fetch(request, env) {
    // Get the URL from the request
    const url = new URL(request.url);
    
    // Handle API requests separately if needed
    if (url.pathname.startsWith('/api/')) {
      // Return a 404 for API requests since they should be handled by Workers
      return new Response('Not found', { status: 404 });
    }
    
    // Respond with the static assets or the SPA (index.html)
    try {
      // Attempt to get the static asset from KV
      let response = await env.ASSETS.fetch(request);
      
      // If the response is not found, serve index.html for SPA routing
      if (response.status === 404) {
        // Get index.html and return it for any route
        response = await env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
      }
      
      // Add security headers
      response = new Response(response.body, response);
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set('X-Frame-Options', 'DENY');
      response.headers.set('X-XSS-Protection', '1; mode=block');
      response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
      
      return response;
    } catch (e) {
      return new Response('Error loading page', { status: 500 });
    }
  }
}