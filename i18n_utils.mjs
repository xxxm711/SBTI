export const LANGS = ['zh-CN', 'en', 'es'];
export const DEFAULT_LANG = 'zh-CN';

export function resolveLang(rawLang = '') {
  const normalized = String(rawLang || '').toLowerCase();
  if (!normalized) return DEFAULT_LANG;
  if (normalized.startsWith('zh')) return 'zh-CN';
  if (normalized.startsWith('es')) return 'es';
  if (normalized.startsWith('en')) return 'en';
  return 'en';
}

export function getI18nValue(dict, lang, keyPath) {
  const walk = (obj, keys) =>
    keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);

  const direct = walk(dict?.[lang], keyPath);
  if (direct !== undefined) return direct;

  return walk(dict?.[DEFAULT_LANG], keyPath);
}

export function buildVisibleQuestions(shuffledQuestions, specialQuestions, answers) {
  const visible = [...shuffledQuestions];
  const gateIndex = visible.findIndex((q) => q.id === 'drink_gate_q1');
  if (gateIndex !== -1 && answers?.drink_gate_q1 === 3) {
    visible.splice(gateIndex + 1, 0, specialQuestions[1]);
  }
  return visible;
}
