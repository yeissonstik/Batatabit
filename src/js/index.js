const tableRow = document.getElementById('table__row')
const coinsTable = document.getElementById('coins')
const commissionsTable = document.getElementById('commissions')

tableRow.addEventListener('click', function(){
    if(!coinsTable.classList.contains('hide')){
        coinsTable.classList.add('hide')
        commissionsTable.classList.remove('hide')
    }else{
        commissionsTable.classList.add('hide')
        coinsTable.classList.remove('hide')
    }
})

const query = window.matchMedia("(min-width: 800px)")
        
if(query.matches){
    
}