export function speak(text: string, lang: string = "en-US", rate: number = 0.85): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;

  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(
    (v) => v.lang.startsWith("en") && v.localService
  );
  if (englishVoice) utterance.voice = englishVoice;

  window.speechSynthesis.speak(utterance);
}
