export const TRANSLATIONS: number[] = Array.from(new Array(100)).map(
 () => (Math.random() - 0.5) * 20
);

const translation = TRANSLATIONS[index % TRANSLATIONS.length];
