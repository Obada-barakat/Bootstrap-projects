const images = document.querySelectorAll('img')

images.forEach(img => {
    img.setAttribute('loading', 'lazy');
})

