import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'NOT_SET';
  const target = `${API_URL}/billing/plans`;
  const start = Date.now();

  try {
    const res = await fetch(target, {
      signal: AbortSignal.timeout(15000),
    });
    const elapsed = Date.now() - start;
    const text = await res.text();
    return NextResponse.json({
      ok: true,
      target,
      status: res.status,
      elapsed_ms: elapsed,
      body_preview: text.slice(0, 200),
    });
  } catch (e) {
    const elapsed = Date.now() - start;
    return NextResponse.json({
      ok: false,
      target,
      elapsed_ms: elapsed,
      error_name: e instanceof Error ? e.name : 'unknown',
      error_message: e instanceof Error ? e.message : String(e),
      error_cause: e instanceof Error && 'cause' in e ? String((e as any).cause) : null,
    }, { status: 500 });
  }
}
