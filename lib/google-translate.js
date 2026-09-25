export const GOOGLE_TRANSLATE_ELEMENT_ID = 'google_translate_element';
export const GOOGLE_TRANSLATE_CALLBACK = 'googleTranslateElementInit';
export const GOOGLE_TRANSLATE_SCRIPT_SRC = `https://translate.google.com/translate_a/element.js?cb=${GOOGLE_TRANSLATE_CALLBACK}`;

/**
 * Builds the Google Translate widget into the translate element, once. Google's
 * script throws ("Error: pa", stack overflow) when a second widget is created in
 * the same page, so repeat calls are ignored. Returns whether a widget was built.
 */
export function initGoogleTranslate(win = window) {
  const TranslateElement = win.google?.translate?.TranslateElement;
  const container = win.document.getElementById(GOOGLE_TRANSLATE_ELEMENT_ID);
  if (!TranslateElement || !container || container.dataset.translateInitialised) {
    return false;
  }

  container.dataset.translateInitialised = 'true';
  new TranslateElement({ pageLanguage: 'auto', autoDisplay: false }, GOOGLE_TRANSLATE_ELEMENT_ID);
  return true;
}
