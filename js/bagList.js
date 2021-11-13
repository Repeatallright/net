
//Fill the basket main with basket elements
async function showBasket() {
    shopList.innerHTML = '';
    document.querySelector('.back').style.display = 'block';
    document.querySelector('.basket').style.display = 'none'
    let basketList = JSON.parse(localStorage.getItem('order'))
    if (basketList) {
        basketList.forEach(elem => {
            let bs = dataListe.map(item => {
                if (item.id.number == elem) {
                    let it = new Fill(item)
                    it.fillBasket()
                }
            })
            basket_buttom = document.querySelectorAll('.item_buttom_basket');
            basket_buttom.forEach(elem => {
                elem.addEventListener('click', basketRemove);
            })
        })

        //All price
        basket_price = [...document.querySelectorAll('.item_price_basket')];
        let finalPrice = 0;

        basket_price.forEach(item => {
            finalPrice += (+item.innerHTML);
        })
        showFinalPrice(finalPrice)
    }
    else {
        let basketPoor = document.createElement('div')
        basketPoor.classList.add('basket_poor');
        basketPoor.innerHTML = 'Basket is poor';
        shopList.appendChild(basketPoor)
    }
}
//
//Clear function for deler BasketRemove
function clear(mass) {
    let item = mass.filter(el => {
        return el != null
    })
    return item
}
//Remove element from basket
function basketRemove() {
    delete localBasket[localBasket.indexOf(this.parentElement.id)]
    localBasket = clear(localBasket)
    localStorage.setItem('order', JSON.stringify(localBasket))
    showBasket()
    console.log(localBasket);
}
basket.addEventListener('click', showBasket)
//Show final price from basket
function showFinalPrice(price) {
    let fp = document.createElement('div');
    fp.classList.add('finalPrice')
    fp.innerHTML = `Total : ${price}`
    shopList.appendChild(fp)
}