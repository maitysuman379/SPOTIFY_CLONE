const slider = document.querySelector('.progress-bar');

slider.addEventListener('input', function() {
    const value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.setProperty('--progress', `${value}%`);
});
