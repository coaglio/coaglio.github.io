const translations = {
    en: {
        "nav-home": "home",
        "nav-writeups": "writeups",
        "nav-htb": "htb",
        tagline: "cybersec enthusiast.",
        "site-desc": "just a place to put things i like.",
        certs: "certs",
        certified: "certified",
        "how-to-find": "how to find me",
        friends: "visit these others too",
        "back-writeups": "back to writeups",
        "writeups-desc": "findings, thoughts & things i learned along the way.",
        "writeup-xss-excerpt": "How a filename injection on a document viewer led to full wallet compromise via React fiber traversal.",
        "htb-desc": "badges & paths completed on HTB Academy.",
        now: "now",
        "now-text": "pentesting and trying not to procrastinate.",
        "track-record": "track record",
        "track-record-text": "college (didn't learn much), 1 year as cyber/threat intern.",
        "pentest-label": "time being a pentester: ",
        "what-i-poke": "what i poke",
        "what-i-poke-text": "web apps :^)",
        "htb-badges": "htb badges",
        writeups: "writeups",
        "writeup-xss-title": "Stored XSS to Full Account Takeover on a Web3 Custody Platform",
        copyright: "All rights reserved."
    },
    pt: {
        "nav-home": "início",
        "nav-writeups": "writeups",
        "nav-htb": "htb",
        tagline: "entusiasta de cybersec.",
        "site-desc": "só um lugar pra colocar coisas que eu gosto.",
        certs: "certificações",
        certified: "certificado",
        "how-to-find": "onde me encontrar",
        friends: "visite esses também",
        "back-writeups": "voltar pros writeups",
        "writeups-desc": "descobertas, pensamentos & coisas que aprendi pelo caminho.",
        "writeup-xss-excerpt": "Como uma injeção no nome de arquivo num visualizador de documentos levou ao comprometimento total de uma wallet via React fiber traversal.",
        "htb-desc": "badges & paths completados na HTB Academy.",
        now: "agora",
        "now-text": "fazendo pentest e tentando não procrastinar.",
        "track-record": "histórico",
        "track-record-text": "faculdade (não aprendi muito), 1 ano como estagiário de cyber/threat.",
        "pentest-label": "tempo como pentester: ",
        "what-i-poke": "o que eu cutuco",
        "what-i-poke-text": "aplicações web :^)",
        "htb-badges": "htb badges",
        writeups: "writeups",
        "writeup-xss-title": "Stored XSS até Account Takeover Completo em Plataforma Web3 de Custódia",
        copyright: "Todos os direitos reservados."
    },
    es: {
        "nav-home": "inicio",
        "nav-writeups": "writeups",
        "nav-htb": "htb",
        tagline: "entusiasta de cybersec.",
        "site-desc": "solo un lugar para poner cosas que me gustan.",
        certs: "certificaciones",
        certified: "certificado",
        "how-to-find": "dónde encontrarme",
        friends: "visita estos también",
        "back-writeups": "volver a writeups",
        "writeups-desc": "hallazgos, pensamientos & cosas que aprendí en el camino.",
        "writeup-xss-excerpt": "Cómo una inyección en el nombre de archivo en un visualizador de documentos llevó al compromiso total de una wallet vía React fiber traversal.",
        "htb-desc": "badges & paths completados en HTB Academy.",
        now: "ahora",
        "now-text": "haciendo pentest e intentando no procrastinar.",
        "track-record": "historial",
        "track-record-text": "universidad (no aprendí mucho), 1 año como pasante de cyber/threat.",
        "pentest-label": "tiempo como pentester: ",
        "what-i-poke": "lo que toco",
        "what-i-poke-text": "aplicaciones web :^)",
        "htb-badges": "htb badges",
        writeups: "writeups",
        "writeup-xss-title": "Stored XSS hasta Account Takeover Completo en Plataforma Web3 de Custodia",
        copyright: "Todos los derechos reservados."
    }
};

function setLang(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        const key = el.getAttribute("data-i18n-html");
        if (t[key]) el.innerHTML = t[key];
    });

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang") || "en";
    setLang(saved);
});
