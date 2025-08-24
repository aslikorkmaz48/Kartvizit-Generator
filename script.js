const inputs = {
    name: document.getElementById('name'),
    role: document.getElementById('role'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    website: document.getElementById('website'),
    linkedin: document.getElementById('linkedin'),
    github: document.getElementById('github'),
    theme: document.getElementById('theme')
};

const cardElements = {
    name: document.getElementById('cardName'),
    role: document.getElementById('cardRole'),
    email: document.getElementById('cardEmail'),
    phone: document.getElementById('cardPhone'),
    website: document.getElementById('cardWebsite'),
    linkedin: document.getElementById('cardLinkedIn'),
    github: document.getElementById('cardGitHub'),
    card: document.getElementById('card'),
    avatar: document.getElementById('avatar')
};

const THEMES = {
    berry: 'linear-gradient(to bottom right, #f43f5e, #d946ef, #6366f1)',
    ocean: 'linear-gradient(to bottom right, #0ea5e9, #06b6d4, #10b981)',
    slate: 'linear-gradient(to bottom right, #1e293b, #374151, #4b5563)'
};

function updateCard() {
    cardElements.name.textContent = inputs.name.value || 'Ad Soyad';
    cardElements.role.textContent = inputs.role.value || 'Meslek';
    cardElements.email.textContent = inputs.email.value || '';
    cardElements.phone.textContent = inputs.phone.value || '';
    cardElements.website.textContent = inputs.website.value || '';
    cardElements.linkedin.href = inputs.linkedin.value || '#';
    cardElements.github.href = inputs.github.value || '#';
    cardElements.linkedin.textContent = inputs.linkedin.value ? 'LinkedIn' : '';
    cardElements.github.textContent = inputs.github.value ? 'GitHub' : '';
    cardElements.avatar.textContent = inputs.name.value ? inputs.name.value.charAt(0).toUpperCase() : 'A';
    cardElements.card.style.background = THEMES[inputs.theme.value];
}

Object.values(inputs).forEach(inp => inp.addEventListener('input', updateCard));
inputs.theme.addEventListener('change', updateCard);
updateCard();

document.getElementById('downloadPng').addEventListener('click', async() => {
    const dataUrl = await htmlToImage.toPng(cardElements.card, { pixelRatio: 3 });
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'kartvizit.png';
    a.click();
});

document.getElementById('downloadPdf').addEventListener('click', async() => {
    const dataUrl = await htmlToImage.toPng(cardElements.card, { pixelRatio: 3 });
    const doc = new window.jspdf.jsPDF({ orientation: 'landscape' });
    doc.addImage(dataUrl, 'PNG', 10, 10, 180, 100);
    doc.save('kartvizit.pdf');
});