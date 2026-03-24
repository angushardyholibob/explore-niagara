import { generateHolibobAuthHeaders } from "@/lib/holibob/auth";

const HOLIBOB_API_URL = process.env.HOLIBOB_API_URL!;
const API_KEY = process.env.HOLIBOB_API_KEY!;
const API_SECRET = process.env.HOLIBOB_API_SECRET!;

export async function POST(request: Request) {
  try {
    const { query, variables } = await request.json();
    if (!query) {
      return Response.json({ error: "Missing GraphQL query" }, { status: 400 });
    }

    const body = JSON.stringify({ query, variables });
    const headers = generateHolibobAuthHeaders(body, API_KEY, API_SECRET);

    const response = await fetch(HOLIBOB_API_URL, {
      method: "POST",
      headers,
      body,
    });

    const data = await response.json();
    if (!response.ok) {
      return Response.json(data, { status: response.status });
    }

    return Response.json(data);
  } catch (error) {
    console.error("GraphQL proxy error:", error);
    return Response.json(
      { error: "Proxy server error" },
      { status: 500 }
    );
  }
}
