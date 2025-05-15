document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            "welcome": "Heya! I'm ChrisCTRD!",
            "description": "I'm a random artist on the internet. Welcome to my page!",
            "comms_status": "Commissions Status: OPEN",
            "select_language": "Select your language:",
            "skills": "Digital Ilustrator | Artist | Clip Studio Paint EX | IbisPaint",
            "join_discord": "Join My Discord Server",
            "contact": "Contact me through Discord or Twitter.",
            "copyright": "© ChrisCTRD. All Rights are reserved.",
            "portArt": "Art",
            "portArtText": "I'm a random freelancer artist on the internet who draws in anime style."
        },
        pt: {
            "welcome": "Heya! Sou ChrisCTRD!",
            "description": "Sou um artista aleatório na internet. Bem-vindo à minha página!",
            "comms_status": "Status de Comissões: ABERTO",
            "select_language": "Escolha sua língua:",
            "skills": "Ilustrador Digital | Artista | Clip Studio Paint EX | IbisPaint",
            "contact": "Entre em contato pelo Discord ou Twitter.",
            "join_discord": "Entre No Servidor Do Discord",
            "copyright": "© ChrisCTRD. All Rights are reserved.",
            "portArt": "Arte",
            "portArtText": "Sou um artista freelancer aleatório na internet que desenha no estilo anime."
        }
    };

    const currentLang = localStorage.getItem('language') || 'en';
    
    function applyTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        document.querySelectorAll('.language .btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(lang === 'en' ? 'english' : 'portuguese').classList.add('active');
    }

    window.changeLanguage = (lang) => {
        localStorage.setItem('language', lang);
        applyTranslations(lang);
        
        const pages = ['index', 'tos', 'portfolio', 'commissions'];
        pages.forEach(page => {
            if (window.location.pathname.includes(page)) {
                window.location.reload();
            }
        });
    };

    applyTranslations(currentLang);
});
