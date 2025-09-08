let SearchQueryValue =''
let buttonGetFilter = document.querySelector('#getFilterWB');
buttonGetFilter.addEventListener('click', (event) => {
    // не обновляем страницу после нажатия кнопки "получить товары"
    event.preventDefault();
    
    SearchQuery = document.querySelector('#SearchQuery')
    SearchQueryValue = SearchQuery.value.replace(/ /g, '%20');
    console.log(SearchQueryValue)
    // Деаем ссыку на запрос
    // https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&autoselectFilters=false&curr=rub&dest=-1257786&inheritFilters=false&lang=ru&query=айфон%2013%20256&resultset=filters&spp=30&suppressSpellcheck=false
    let linkFilterWB = `https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&autoselectFilters=false&curr=rub&dest=-1257786&inheritFilters=false&lang=ru&query=${SearchQueryValue}&resultset=filters&spp=30&suppressSpellcheck=false`
    // console.log(linkFilterWB);
    menuFilter(linkFilterWB)
        
})


    function menuFilter(linkMenu){
    // создаю форму, кладу её в класс .products, запускаю парсинг фильтра в класс формы
    createForm('.searchForm')
    fetch(linkMenu)
    .then(response => response.json())
    .then(commits => 
        {  

            createDataGeneralInfo('Категория: ', commits.metadata.context, ' Всего товаров:  ', commits.data.total)

            commits.data.filters.forEach((elem)=>{
                createFormElements(elem)
            })
        });
    }

// Функция считает кол-во дней доставки
function dayDelivery(time1,time2){
    let summTimeDay = Math.round((time1 + time2) / 24)
    return (summTimeDay)
}



// выделить красным магазины
function classRed(supplierName, li){
    let texts = allMagazin; // массив с магазинами
    texts.forEach((input) => {
    if (input == supplierName) {
    li.classList.add("red")
    console.log('Магазин есть')
        return 1;
    } else {
    //   input.classList.add("wrong");
        
    }
  })

}