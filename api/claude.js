// Vercel Edge Function: meneruskan permintaan ke Anthropic API dari server (tanpa masalah CORS/blokir browser).
// Key Anda dikirim dari browser lewat header x-api-key dan hanya diteruskan, tidak disimpan.
export const config = { runtime: 'edge' };

export default async function handler(req) {
  const path = new URL(req.url).searchParams.get('path') || 'messages';
  if (path !== 'messages' && path !== 'models') {
    return new Response('path tidak valid', { status: 400 });
  }
  const isGet = req.method === 'GET';
  const up = await fetch(
    'https://api.anthropic.com/v1/' + path + (path === 'models' ? '?limit=50' : ''),
    {
      method: isGet ? 'GET' : 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': req.headers.get('x-api-key') || '',
        'anthropic-version': '2023-06-01',
      },
      body: isGet ? undefined : await req.text(),
    }
  );
  return new Response(up.body, {
    status: up.status,
    headers: {
      'content-type': up.headers.get('content-type') || 'application/json',
      'cache-control': 'no-store',
    },
  });
}
