const tableRow = document.getElementById('table__row')
const coinsTable = document.querySelector('.coins__container')
const commissionsTable = document.querySelector('.commissions__container')

tableRow.addEventListener('click', function(){
    if(!coinsTable.classList.contains('hide')){
        coinsTable.classList.add('hide')
        commissionsTable.classList.remove('hide')
    }else{
        coinsTable.classList.remove('hide')
        commissionsTable.classList.add('hide')
    }
})


