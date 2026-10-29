const translations = {
    en: {
        "nav-home": "home",
        "nav-writeups": "writeups",
        tagline: "cybersec enthusiast.",
        "site-desc": "just a place to put things i like.",
        certs: "certs",
        certified: "certified",
        "in-progress": "in progress",
        "how-to-find": "how to find me",
        friends: "visit these others too",
        "back-writeups": "back to writeups",
        "writeups-desc": "findings, thoughts & things i learned along the way.",
        "writeup-lfi-title": "Path Traversal to Root File Read in Intelbras iNVU 7016 FT (LFI)",
        "writeup-lfi-excerpt": "LFI on an NVR's log download endpoint allows reading any file as root, including /etc/shadow.",
        "writeup-xss-excerpt": "How a filename injection on a document viewer led to full wallet compromise via React fiber traversal.",
        now: "now",
        "now-text": "pentesting and trying not to procrastinate.",
        "track-record": "track record",
        "track-record-text": "college (didn't learn much), cybersecurity intern: deep & dark web research, data leak, OSINT and pentest.",
        "pentest-label": "time being a pentester: ",
        "what-i-poke": "what i poke",
        "what-i-poke-text": "web apps :^)",
        writeups: "writeups",
        "writeup-xss-title": "Stored XSS to Full Account Takeover on a Web3 Platform",
        copyright: "All rights reserved.",
        "view-cert": "view certificate"
    },
    pt: {
        "nav-home": "início",
        "nav-writeups": "writeups",
        tagline: "entusiasta de cybersec.",
        "site-desc": "só um lugar pra colocar coisas que eu gosto.",
        certs: "certificações",
        certified: "certificado",
        "in-progress": "em andamento",
        "how-to-find": "onde me encontrar",
        friends: "visite esses também",
        "back-writeups": "voltar pros writeups",
        "writeups-desc": "descobertas, pensamentos & coisas que aprendi pelo caminho.",
        "writeup-lfi-title": "Path Traversal para Leitura de Arquivos como Root no Intelbras iNVU 7016 FT (LFI)",
        "writeup-lfi-excerpt": "LFI no endpoint de download de logs de um NVR permite leitura de qualquer arquivo como root, incluindo /etc/shadow.",
        "writeup-xss-excerpt": "Como uma injeção no nome de arquivo num visualizador de documentos levou ao comprometimento total de uma wallet via React fiber traversal.",
        now: "agora",
        "now-text": "fazendo pentest e tentando não procrastinar.",
        "track-record": "histórico",
        "track-record-text": "faculdade (não aprendi muito), estagiário em cybersecurity: deep & dark web research, data leak, OSINT e pentest.",
        "pentest-label": "tempo como pentester: ",
        "what-i-poke": "o que eu cutuco",
        "what-i-poke-text": "aplicações web :^)",
        writeups: "writeups",
        "writeup-xss-title": "Stored XSS até Account Takeover Completo em Plataforma Web3",
        copyright: "Todos os direitos reservados.",
        "view-cert": "ver certificado"
    },
    es: {
        "nav-home": "inicio",
        "nav-writeups": "writeups",
        tagline: "entusiasta de cybersec.",
        "site-desc": "solo un lugar para poner cosas que me gustan.",
        certs: "certificaciones",
        certified: "certificado",
        "in-progress": "en progreso",
        "how-to-find": "dónde encontrarme",
        friends: "visita estos también",
        "back-writeups": "volver a writeups",
        "writeups-desc": "hallazgos, pensamientos & cosas que aprendí en el camino.",
        "writeup-lfi-title": "Path Traversal a Lectura de Archivos como Root en Intelbras iNVU 7016 FT (LFI)",
        "writeup-lfi-excerpt": "LFI en el endpoint de descarga de logs de un NVR permite lectura de cualquier archivo como root, incluyendo /etc/shadow.",
        "writeup-xss-excerpt": "Cómo una inyección en el nombre de archivo en un visualizador de documentos llevó al compromiso total de una wallet vía React fiber traversal.",
        now: "ahora",
        "now-text": "haciendo pentest e intentando no procrastinar.",
        "track-record": "historial",
        "track-record-text": "universidad (no aprendí mucho), pasante en ciberseguridad: deep & dark web research, data leak, OSINT y pentest.",
        "pentest-label": "tiempo como pentester: ",
        "what-i-poke": "lo que toco",
        "what-i-poke-text": "aplicaciones web :^)",
        writeups: "writeups",
        "writeup-xss-title": "Stored XSS hasta Account Takeover Completo en Plataforma Web3",
        copyright: "Todos los derechos reservados.",
        "view-cert": "ver certificado"
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
