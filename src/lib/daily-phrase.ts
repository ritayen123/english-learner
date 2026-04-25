/**
 * Deterministically select a daily travel phrase based on date.
 * Uses a simple hash of the date string to pick from phrases t301-t500.
 */
export function getDailyPhraseId(dateStr: string): string {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) - hash + dateStr.charCodeAt(i)) | 0;
  }
  const index = Math.abs(hash) % 200;
  const phraseNumber = 301 + index;
  return `t${phraseNumber}`;
}

export function getPhraseContext(phraseId: string): string {
  const num = parseInt(phraseId.replace("t", ""));
  if (num <= 304) return "在機場時可以使用 ✈️";
  if (num <= 307) return "在飯店時可以使用 🏨";
  if (num <= 312) return "在餐廳時可以使用 🍽️";
  if (num <= 316) return "問路交通時可以使用 🚇";
  if (num <= 319) return "購物時可以使用 🛍️";
  if (num <= 321) return "緊急狀況可以使用 🆘";
  if (num <= 325) return "交通出行時可以使用 🚇";
  if (num <= 330) return "旅遊閒聊可以使用 💬";
  if (num <= 340) return "在機場時可以使用 ✈️";
  if (num <= 350) return "在飯店/觀光時可以使用 🏨";
  if (num <= 360) return "旅遊各種情境可以使用 💬";
  if (num <= 370) return "日常旅遊時可以使用 💬";
  if (num <= 380) return "旅遊各種情境可以使用 💬";
  if (num <= 400) return "旅遊實用情境 💬";
  return "進階旅遊對話 💬";
}
