import { getSession } from "@/lib/auth";

export async function GET() {
  const session = await getSession();

  return Response.json(
    {
      authenticated: Boolean(session),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
