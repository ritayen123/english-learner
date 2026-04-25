let dictCache: Record<string, string> | null = null;
let dictPromise: Promise<Record<string, string>> | null = null;

export async function getDictMap(): Promise<Record<string, string>> {
  if (dictCache) return dictCache;
  if (dictPromise) return dictPromise;

  dictPromise = fetch("/dict.json")
    .then((res) => res.json())
    .then((data: Record<string, string>) => {
      dictCache = data;
      return data;
    })
    .catch(() => {
      dictPromise = null;
      return {} as Record<string, string>;
    });

  return dictPromise;
}
