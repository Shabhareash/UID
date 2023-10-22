// mouse-animation.js

const torch = document.createElement('div');
torch.classList.add('torch');
document.body.appendChild(torch);

document.addEventListener('mousemove', (e) => {
    torch.style.left = e.clientX + 'px';
    torch.style.top = e.clientY + 'px';
});

torch.addEventListener('mouseenter', () => {
    torch.style.width = '150px';
    torch.style.height = '150px';
});

torch.addEventListener('mouseleave', () => {
    torch.style.width = '100px';
    torch.style.height = '100px';
});
