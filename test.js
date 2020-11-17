const select = document.querySelector('select');
const para = document.querySelector('p');
select.addEventListener('change', function setWeather() {
    const choice = select.value;
    if (choice === 'sunny') {
        para.textContent = 'It is nice and sunny outside today. Wear shorts!'
    } else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and an'
    } else if (choice === 'snowing') {
        para.textContent = 'The snow is coming down — it is freezing! Best to'
    } else if (choice === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy'
    } else {
        para.textContent = '';
    }
});