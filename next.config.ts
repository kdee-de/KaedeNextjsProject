import type { NextConfig } from 'next';

// Fix for Node.js 25 + Next.js localStorage SSR bug
if (typeof globalThis !== 'undefined') {
  try {
    delete (globalThis as any).localStorage;
  } catch (e) {}
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
