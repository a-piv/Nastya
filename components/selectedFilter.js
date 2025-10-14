// selectedMenu в функцию вставляем selectedMenu
function selectedFilter(){

    // здесь получаем выбранные менюшки
let linkAllproducts = serializeForm(document.querySelector('#idFormSearch'))
console.log(linkAllproducts.linnkk)

let linkAllproductsMenu = link_Search()
console.log(linkAllproductsMenu)

console.log('--------------------------');

let filterURLrequest_1 = 'https://u-search.wb.ru/exactmatch/ru/common/v18/search?ab_testid=psm&ab_testid=psm&appType=1&autoselectFilters=false&curr=rub&dest=-1257786'
let filterURLrequest_2 = `&${linkAllproducts.linnkk}` //выбранные поля типа &f14177449=12065905;
let filterURLrequest_3 = '&hide_dtype=11&inheritFilters=false&lang=ru';
let filterURLrequest_4 = getSearchQuery1(); //поисковой запрос типа &query=айфон%2013%20128;
let filterURLrequest_5 =  '&resultset=filters&spp=30&suppressSpellcheck=false';
let filterURLrequest = filterURLrequest_1 + filterURLrequest_2 + filterURLrequest_3 + filterURLrequest_4 + filterURLrequest_5;

console.log(filterURLrequest)
// отравляем запрос на получение данных выбранного фильтра
fetch(filterURLrequest)
  .then(response => response.json())
  .then(responseForm => {
    console.log(responseForm)
    let formMetadata = responseForm.data.total
    console.log(formMetadata)
    
    pageInsertInfo(formMetadata)
    // formMetadata.forEach((metadata)=>{console.log(metadata)});
    let linkAllproducts = link_Search()
    getAllproducts(linkAllproducts)
    
  }
    )

}




// Функция достаёт введённый поисковой запрос для параметра filterURLrequest_4
function getSearchQuery1() {
  let searchRequestValue = document.querySelector('#SearchQuery').value;
    // Ниже строка кодирует в данные для ссылкпи let searchQuery = searchRequestValue.replace(/ /g, '%20'), decodeURIComponent() делает нормальные пробелы, убирает раскодировку
    let searchQuery = encodeURIComponent(searchRequestValue)
  console.log(`Поисковой запрос: ${searchQuery}`);
  let query = `&query=${searchQuery}`
  return query;
}


// Функция пишет на странице сколько товаров найдено по фильтру
function pageInsertInfo(totalProductFilter){
    document.querySelector('.generalInfoFilter').textContent=(`Всего товаров в выбранном фильтре: ${totalProductFilter} шт.`)
}
