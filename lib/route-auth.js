import { createHash, timingSafeEqual } from 'node:crypto';

/**
 * Reads a server-only secret from the environment. Returns null, and logs which
 * variable is missing, when it is unset or blank, so callers can fail closed.
 */
export function readSecret(name, env = process.env) {
  const value = env[name]?.trim();
  if (!value) {
    console.error(
      `[auth] ${name} is not set: rejecting the request. Define it in the Vercel project env vars.`,
    );
    return null;
  }
  return value;
}

// Hashing both sides first gives equal-length buffers, so timingSafeEqual
// neither throws nor leaks the secret's length.
function safeEqual(a, b) {
  const digest = (value) => createHash('sha256').update(value).digest();
  return timingSafeEqual(digest(a), digest(b));
}

/**
 * True when the request carries `Authorization: Bearer <secret>`.
 * Always false when no secret is configured.
 */
export function hasValidBearerToken(req, secret) {
  if (!secret) return false;
  const match = /^Bearer\s+(.+)$/i.exec(req.headers.get('authorization') ?? '');
  if (!match) return false;
  return safeEqual(match[1].trim(), secret);
}
