document.getElementById('increase').addEventListener('click', function() {
    adjustFontSize(1);
});

document.getElementById('decrease').addEventListener('click', function() {
    adjustFontSize(-1);
});

document.getElementById('restore').addEventListener('click', function() {
    restoreFontSize();
});

function adjustFontSize(change) {
    const root = document.documentElement;
    const currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--base-font-size'));
    root.style.setProperty('--base-font-size', `${currentSize + change}px`);
}

function restoreFontSize() {
    document.documentElement.style.setProperty('--base-font-size', '16px');
}