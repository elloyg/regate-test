Deno.serve(async (req) => {
  try {
    const { email, password } = await req.json();
    if (email === "test@regate.io" && password === "password") {
      return new Response(JSON.stringify({ email }), {
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (_) {}

  return new Response(JSON.stringify({ error: "Unauthorized" }), {
    headers: { "Content-Type": "application/json" },
    status: 401,
  });
});
