window.scrollTo(0, 0)

let shopList = document.querySelector('.shopListItems');
let count = 1;
let back = document.querySelector('.back').addEventListener('click', () => {
    console.log(count);
    fillMain(count)
})

const basket = document.querySelector('.basket');
let addToList = document.querySelectorAll('.item_buttom');
let basket_buttom;
let localBasket = JSON.parse(localStorage.getItem('order')) || [];


//Create element in main and fill main
class CreateList {
    constructor(item) {
        this.item = item
    }
    //Create function
    create() {
        let div = document.createElement('div');
        div.classList.add('item');
        div.id = this.item.id.number;
        for (let key in this.item.body) {
            let itemClass = this.item.body[key];
            if (key == 'price') {
                if (localStorage.getItem('valute') == 'usd') {
                    itemClass = Math.floor(itemClass / 75)
                }
                if (localStorage.getItem('valute') == 'euro') {
                    itemClass = Math.floor(itemClass / 82)
                }
            }
            let el = document.createElement('div');
            el.classList.add(`item_${key}`)
            if (itemClass.length > 300) {
                let shorten = itemClass.slice(0, 300)
                el.innerHTML = shorten;
            }
            else {
                el.innerHTML = itemClass
            }
            div.appendChild(el)
        }
        shopList.appendChild(div)
    }
}
//Fill main

function fillMain(count) {
    shopList.innerHTML = ''
    for (let i = (9 * (count - 1)); i < (9 * count); i++) {
        if (dataListe[i]) {
            let it = new CreateList(dataListe[i]);
            it.create();
        }
        document.querySelector('.back').style.display = 'none';
        document.querySelector('.basket').style.display = 'block';
    }

    addToList = document.querySelectorAll('.item_buttom');
    addToList.forEach(item => item.addEventListener('click', addToBasket));
    createBorder()
    fillBr()
}

fillMain(1)
//Create border elements
function createBorder() {
    let count = Math.round((dataListe.length / 9));
    let border = document.createElement('div');
    let borderIn = document.createElement('div')
    borderIn.classList.add('item_border_in')
    border.classList.add('item_border')
    for (let i = 0; i < count; i++) {
        let ele = document.createElement('div');
        ele.classList.add('border_el');
        ele.innerHTML = i + 1;
        borderIn.appendChild(ele)
        ele.addEventListener('click', fillCount)
    }
    border.appendChild(borderIn)
    shopList.appendChild(border)
}



//Fill border 
async function fillCount() {
    window.scrollTo(0, 0)
    count = +this.innerHTML;
    await fillMain(count)
    fillBr()
}

//Add elements to localstorage
function addToBasket() {
    localBasket.push(this.parentElement.id)
    localStorage.setItem('order', JSON.stringify(localBasket))
}

//Make border active, add class yo border_el;
async function fillBr() {
    let br = await [...document.querySelectorAll('.border_el')]
    br.forEach(item => {
        item.classList.remove('border_el_acive')
    })
    br[count - 1].classList.add('border_el_active')
}