//Create bascket element from bascket using dataList.js
class Fill {
    constructor(item) {
        this.item = item;
    }

    fillBasket() {
        let item = document.createElement('div');
        item.classList.add('basket_item');
        item.id = this.item.id.number;
        for (let key in this.item.body) {
            let elClass = `${this.item.body[key]}`;
            if (key == 'price') {
                if (localStorage.getItem('valute') == 'usd') {
                    elClass = Math.floor(elClass / valuteValue['usd'])
                }
                if (localStorage.getItem('valute') == 'euro') {
                    elClass = Math.floor(elClass / valuteValue['euro'])
                }
            }
            console.log();
            key == 'buttom' ? elClass = 'Remove' : '';
            let el = document.createElement('div')
            el.classList.add(`item_${key}_basket`);
            if (elClass.length > 50) {
                let shorten = elClass.slice(0, 50)
                el.innerHTML = shorten
            }
            else {
                el.innerHTML = elClass
            }

            item.appendChild(el)
        }
        shopList.appendChild(item)
    }
}