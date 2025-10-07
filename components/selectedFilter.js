function selectedFilter(selectedForm){
console.log(selectedForm);

let filterURLrequest_1 = 'https://u-search.wb.ru/exactmatch/ru/common/v18/search?ab_testid=no_action&ab_testing=false&appType=1&autoselectFilters=false&curr=rub&dest=-1257786'
let filterURLrequest_2 = `&${selectedForm}` //выбранные поля типа &f14177449=12065905;
let filterURLrequest_3 = '&inheritFilters=false&lang=ru';
let filterURLrequest_4 = getSearchQuery1(); //поисковой запрос типа &query=айфон%2013%20128;
let filterURLrequest_5 =  '&resultset=filters&spp=30&suppressSpellcheck=false';
let filterURLrequest = filterURLrequest_1 + filterURLrequest_2 + filterURLrequest_3 + filterURLrequest_4 + filterURLrequest_5;

// отравляем запрос на получение данных выбранного фильтра
fetch(filterURLrequest)
// console.log(filterURLrequest)
  .then(response => response.json())
  .then(responseForm => {
    console.log(filterURLrequest)
    let formMetadata = responseForm.data.total
    
    pageInsertInfo(formMetadata)
    // formMetadata.forEach((metadata)=>{console.log(metadata)});
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
    document.querySelector('.generalInfo').textContent=(`Всего товаров в выбранном фильтре: ${totalProductFilter} шт.`)
}
