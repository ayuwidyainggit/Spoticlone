export async function GET() {
  const url =
    "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/related-artists";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.status}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch related artists" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
