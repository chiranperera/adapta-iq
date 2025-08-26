import type { VercelRequest, VercelResponse } from '@vercel/node';
import { DemoResponse } from '../shared/api';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { url, method } = req;
  
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Parse the API route
  const path = url?.replace('/api', '') || '/';
  
  // Handle /api/ping
  if (path.startsWith('/ping')) {
    const ping = process.env.PING_MESSAGE || "ping";
    return res.status(200).json({ message: ping });
  }
  
  // Handle /api/demo
  if (path.startsWith('/demo')) {
    const response: DemoResponse = {
      message: "Hello from Vercel serverless function",
    };
    return res.status(200).json(response);
  }
  
  // Default response for unknown routes
  return res.status(404).json({ error: "API endpoint not found" });
}