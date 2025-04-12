//Write a JavaScript program to add items to favorites from the drop down list. If you select any item that should be added to the list and be displayed on the ui, if you click on the added item again then it should not add the same item again.

let brands = ['Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour'];

let favorites = [];

let selectedBrand = document.getElementById('select-brand')
let button = document.getElementById('btn-add')
let list = document.getElementById('show-favorite')

function populateDropdown() {
    for(let i=0; i<brands.length; i++){
        let option = document.createElement('option')
        option.value = brands[i]
        option.innerText = brands[i]
        selectedBrand.appendChild(option)
    }

}

function addToFavorites() {
    let selectedValue = selectedBrand.value

    if(favorites.includes(selectedValue)){
        alert('Already added to favorites')
    }else{
        favorites.push(selectedValue)
        let li = document.createElement('li')
        li.innerText = selectedValue
        list.appendChild(li)
    } 
}

populateDropdown()
button.addEventListener('click', addToFavorites)

