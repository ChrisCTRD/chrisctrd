document.addEventListener('DOMContentLoaded', async () => {
    const currentLang = localStorage.getItem('language') || 'en';
    
    async function loadTranslation(lang) {
        try {
            const response = await fetch(`/translations/${lang}.json`);
            return await response.json();
        } catch (error) {
            console.error("Erro ao carregar tradução:", error);
            return {};
        }
    }

    async function applyTranslations(lang) {
        const translations = await loadTranslation(lang);
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                el.textContent = translations[key];
            }
        });
        
        document.querySelectorAll('.language .btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(lang === 'en' ? 'english' : 'portuguese').classList.add('active');
    }

    window.changeLanguage = async (lang) => {
        localStorage.setItem('language', lang);
        await applyTranslations(lang);
        
        const pages = ['index', 'tos', 'portfolio', 'commissions'];
        pages.forEach(page => {
            if (window.location.pathname.includes(page)) {
                window.location.reload();
            }
        });
    };
    await applyTranslations(currentLang);
    fetch(`${window.location.origin}/translations/en.json`)
});