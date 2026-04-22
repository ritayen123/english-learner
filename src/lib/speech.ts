export function speak(text: string, lang: string = "en-US"): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.85;

  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(
    (v) => v.lang.startsWith("en") && v.localService
  );
  if (englishVoice) utterance.voice = englishVoice;

  window.speechSynthesis.speak(utterance);
}
