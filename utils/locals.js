/**
 * Загружает переводы для выбранного языка
 */
async function loadTranslations(lang) {
    try {
        const response = await fetch(`locales/${lang}.json`);
        if (!response.ok) throw new Error(`Language ${lang} not found`);
        return await response.json();
    } catch (error) {
        console.error("Failed to load translations:", error);
        // Загружаем язык по умолчанию (en)
        const defaultResponse = await fetch('locales/en.json');
        return await defaultResponse.json();
    }
}

/**
 * Применяет переводы к элементам по их ID
 */
function applyTranslations(translations) {
    for (const [elementId, text] of Object.entries(translations)) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = text; // Заменяем текст
        } else {
            console.warn(`Element with ID "${elementId}" not found!`);
        }
    }
}

/**
 * Определяет язык (из URL или браузера)
 */
function getLanguage() {
    // 1. Проверяем параметр ?lang= в URL
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    if (langFromUrl) return langFromUrl;

    // 2. Берем язык браузера (например, 'ru-RU' → 'ru')
    const browserLang = navigator.language.split('-')[0];
    return browserLang || 'en'; // По умолчанию английский
}

/**
 * Инициализация системы переводов
 */
async function initI18n() {
    const lang = getLanguage();
    const translations = await loadTranslations(lang);
    applyTranslations(translations);
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', initI18n);