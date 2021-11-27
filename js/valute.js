

async function valuteInput() {
    const elem = document.createElement('div')
    elem.classList.add('valute')
    elem.innerHTML = `<select class="valute_selector" id="valute">
    <option class="valute_item" value="rub">RUB</option>
    <option class="valute_item" value="usd">USD</option>
    <option class="valute_item" value="euro">EURO</option>
</select>`
    let block = document.querySelector('.header');
    await block.appendChild(elem)

    const selector = await document.querySelector('.valute_selector')
    selector.addEventListener('change', showValute)

}
valuteInput()
async function showValute() {
    let storage = localStorage.getItem('valute')
    let valute = this.value || localStorage.getItem('valute') || 'rub'
    localStorage.setItem(`valute`, valute);
    const options = await document.querySelectorAll('.valute_item')
    if (storage) {
        options.forEach(item => {
            if (storage == item.value) {
                item.setAttribute('selected', true)
            }

        })
    }

}
showValute()