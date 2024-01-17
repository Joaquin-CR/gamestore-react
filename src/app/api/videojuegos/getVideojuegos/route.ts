export async function GET() {
  const url = process.env.URL as string;
  try {
    const response = await fetch(`${url}/videojuegos`);
    // Handle the response
    if (!response.ok) {
      const errorMessage = {
        message: response.statusText,
        status: response.status,
        url: response.url,
      };
      return new Response(JSON.stringify(errorMessage), {
        status: response.status,
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.log(err);
    const errorMessage = {
      message: 'Authentication failed',
    };

    return new Response(JSON.stringify(errorMessage), {
      status: 500,
    });
  }
}
