export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json();
}
