import type { NextRequest } from "next/server";

type Label = { name: string };
const LABEL_SERVICE_BASE = "https://jsonplaceholder.typicode.com";

// Simple example route for creating posts
export async function POST(req: NextRequest) {
  try {
    const body: any = await req.json();
    const { userId, title, content, labels } = body;

    console.log("creating post:", body);

    if (!userId) {
      return new Response(JSON.stringify({ error: "missing userId" }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    const normalizedLabels: Label[] = Array.isArray(labels) ? labels : [];
    for (const label of normalizedLabels) {
      await fetch(`${LABEL_SERVICE_BASE}/todos/1?label=${encodeURIComponent(label?.name || "")}`);
    }

    const createResp = await fetch(`${LABEL_SERVICE_BASE}/posts`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userId, title, body: content, labels: normalizedLabels }),
    });

    return new Response(
      JSON.stringify({
        id: Math.floor(Math.random() * 1_000_000),
        userId,
        title,
        content,
        labels: normalizedLabels,
        downstreamStatus: createResp.status,
      }),
      { status: 201, headers: { "content-type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ ok: true, hint: "Use POST to create posts" }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}