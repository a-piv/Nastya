// 1. СДелать страничку с фильтрами из которой получаем ссылку на  JSON страницы
// 1. Поисковой запрос
// 2. Создаем таблицу с товарами. В таблице:
//     - Цены товара (скидку, до скидки)
//     - Название магазина
//     - Рейтинг магазина
//     - Кол-во дней доставки

// 2. Фильтр: "По возрастанию цены"
// &sort=popular // По популярности
// &sort=rate // По рейтингу
// &sort=priceup //По возрастанию цены
// &sort=pricedown //По убыванию цены
// &sort=newly // По новинкам
// &sort=benefit // Сначала выгодные

// 3. Фильтр: "Цвет"
// &f14177449=13600062 //Черный цвет
// &f14177449=20214644 //Бежевый
// &f14177449=12065905 //Белый
// &f14177449=20214449 // Голубой
// &f14177449=14185777 //Желтый
// &f14177449=14835931 // Зелёный
// &f14177449=11807341 // Красный
// &f14177449=11807342 //Розовый
// &f14177449=20214430 //Серый
// &f14177449=20214646 //Синий
// &f14177449=14185662 //Фиолетовый

// 4. Фильтр: "Модель"
// &f5023=5866733 // iPhone 13
// &f5023=5866955 iPhone 13 Pro
// &f5023=5867400 iPhone 13 Max
// &f5023=5868827 iPhone 13 Mini

// &f5023=61513416 // iPhone 14
// &f5023=61513418 // iPhone 14 Pro
// &f5023=63321888 // iPhone 14 Plus
// &f5023=61513419 // iPhone 14 Pro Max

// &f5023=770965474 // iPhone 15
// &f5023=786139550 // iPhone 15 Pro 
// &f5023=84424644 // iPhone 15 Pro Max
// &f5023=791556425 // iPhone 15 Plus
// &f5023=61513416 // iPhone 14
// &f5023=61513416 // iPhone 14

// 5. Фильтр: "Объем встроенной памяти"
// &f4424=12868 //128
// &f4424=25425 //256
// &f4424=117419 //528

// 'https://search.wb.ru/exactmatch/ru/common/v18/search?
// ab_testid=new_optim&
// appType=64&
// curr=rub&
// dest=-446117&
// f14177449=13600062&              //цвет
// f4424=12868&                     //Объем встроенной памяти
// f5023=5866733&
// inheritFilters=false&
// lang=ru&
// page=1&
// query=айфон+13+128&              //Поисковый запрос
// resultset=catalog&
// sort=priceup&                    //"По возрастанию цены"
// spp=30&
// suppressSpellcheck=false&
// uclusters=1&
// uiv=0
// &uv=AQUAAQICAAEBAAIEAAMDAAoACcRUOiLDlEPevuBEfEYHvjI_yb_dP6BBZ0U9Qdc6fEUOxm--zz-mvxXATCpXxVXEbjydOA5AwcmLPmPHMUDuvoOvfbmwwIK0pzEUSGQzLUBtOoBGI0Kex-zGXrgyRTNCZ8oVOIhEHMPhQdVA9cWmO7XFt0PgSSK-fMnUweDAMEEDPYk-S8JDP-tD_8NcLQ84TsRyPlvH8safQARBHURDP77GT8AXRR9GQMgQyXDBJ0OkQtNI0MHjRns948V4xu81OUiCPdTEHb_9vM9JBb_vxUFJX7fwxG3FS75MQsS7m0WWR0hCczM7OCo_1LmKQRY_esOrQIk8Mkh4wZTASkg1xAMAL-kBTB4y7zN3NTMwAC5m'

function createMainSearchURL(){
    // Готовая ссылка как пример
    let searchURLrequestFilterTEST = 'https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testid=new_optim&appType=64&curr=rub&dest=-446117&f14177449=13600062&f4424=12868&f5023=5866733&inheritFilters=false&lang=ru&page=1&query=%D0%B0%D0%B9%D1%84%D0%BE%D0%BD+13+128&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false&uclusters=1&uiv=0&uv=AQUAAQICAAEBAAIEAAMDAAoACcRUOiLDlEPevuBEfEYHvjI_yb_dP6BBZ0U9Qdc6fEUOxm--zz-mvxXATCpXxVXEbjydOA5AwcmLPmPHMUDuvoOvfbmwwIK0pzEUSGQzLUBtOoBGI0Kex-zGXrgyRTNCZ8oVOIhEHMPhQdVA9cWmO7XFt0PgSSK-fMnUweDAMEEDPYk-S8JDP-tD_8NcLQ84TsRyPlvH8safQARBHURDP77GT8AXRR9GQMgQyXDBJ0OkQtNI0MHjRns948V4xu81OUiCPdTEHb_9vM9JBb_vxUFJX7fwxG3FS75MQsS7m0WWR0hCczM7OCo_1LmKQRY_esOrQIk8Mkh4wZTASkg1xAMAL-kBTB4y7zN3NTMwAC5m'
    // ССылка без поискового запроса и фильтров
    // БЫЛ let searchURLrequestEmpty= 'https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testid=new_optim&appType=64&curr=rub&dest=-446117&inheritFilters=false&lang=ru&page=1&resultset=catalog&spp=30&suppressSpellcheck=false&uclusters=1&uiv=0&uv=AQUAAQICAAEBAAIEAAMDAAoACcRUOiLDlEPevuBEfEYHvjI_yb_dP6BBZ0U9Qdc6fEUOxm--zz-mvxXATCpXxVXEbjydOA5AwcmLPmPHMUDuvoOvfbmwwIK0pzEUSGQzLUBtOoBGI0Kex-zGXrgyRTNCZ8oVOIhEHMPhQdVA9cWmO7XFt0PgSSK-fMnUweDAMEEDPYk-S8JDP-tD_8NcLQ84TsRyPlvH8safQARBHURDP77GT8AXRR9GQMgQyXDBJ0OkQtNI0MHjRns948V4xu81OUiCPdTEHb_9vM9JBb_vxUFJX7fwxG3FS75MQsS7m0WWR0hCczM7OCo_1LmKQRY_esOrQIk8Mkh4wZTASkg1xAMAL-kBTB4y7zN3NTMwAC5m'
    let searchURLrequestEmpty= 'https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-446117'
        // Потом цвет: &f14177449=12065905
        // Потом Объем встроенной памяти: &f4424=117419
        // Потом Модель &f5023=786139550
        // Потом
        //     &inheritFilters=false
        //     &lang=ru
        //     &page=1
        // Потом:
        //     &query=айфон+15+512
        //     &resultset=catalog
        //     &sort=priceup
        //     &spp=30
        //     &suppressSpellcheck=false
        //     &uclusters=1
        //     &uiv=0
        //     &uv=AQUAAQIEAAMDAAoBAAICAAEACcRUOiLDlEPevuBEfEYHvjI_yb_dP6BBZ0U9Qdc6fEUOxm--zz-mvxXATCpXxVXEbjydOA5AwcmLPmPHMUDuvoOvfbmwwIK0pzEUSGQzLUBtOoBGI0Kex-zGXrgyRTNCZ8oVOIhEHMPhQdVA9cWmO7XFt0PgSSK-fMnUweDAMEEDPYk-S8JDP-tD_8NcLQ84TsRyPlvH8safQARBHURDP77GT8AXRR9GQMgQyXDBJ0OkQtNI0MHjRns948V4xu81OUiCPdTEHb_9vM9JBb_vxUFJX7fwxG3FS75MQsS7m0WWR0hCczM7OCo_1LmKQRY_esOrQIk8Mkh4wZTASkg1xAMBTB4y7zN3NTMwAC5mL-kA
    // &inheritFilters=false&lang=ru&page=1&resultset=catalog&spp=30&suppressSpellcheck=false&uclusters=1&uiv=0&uv=AQUAAQICAAEBAAIEAAMDAAoACcRUOiLDlEPevuBEfEYHvjI_yb_dP6BBZ0U9Qdc6fEUOxm--zz-mvxXATCpXxVXEbjydOA5AwcmLPmPHMUDuvoOvfbmwwIK0pzEUSGQzLUBtOoBGI0Kex-zGXrgyRTNCZ8oVOIhEHMPhQdVA9cWmO7XFt0PgSSK-fMnUweDAMEEDPYk-S8JDP-tD_8NcLQ84TsRyPlvH8safQARBHURDP77GT8AXRR9GQMgQyXDBJ0OkQtNI0MHjRns948V4xu81OUiCPdTEHb_9vM9JBb_vxUFJX7fwxG3FS75MQsS7m0WWR0hCczM7OCo_1LmKQRY_esOrQIk8Mkh4wZTASkg1xAMAL-kBTB4y7zN3NTMwAC5m'
    


    let SearchQuery = document.querySelector('#SearchQuery')
    let SearchQueryValue = SearchQuery.value.replace(/ /g, '%20');
    let filterPoularText = formSelected.filterPoular.options[formSelected.filterPoular.options.selectedIndex].innerText;
    let filterPoular = formSelected.filterPoular.value;
    let filterColorText = formSelected.filterColor.options[formSelected.filterColor.options.selectedIndex].innerText;
    let filterColor = formSelected.filterColor.value;
    let filterModelText = formSelected.filterModel.options[formSelected.filterModel.options.selectedIndex].innerText;
    let filterModel = formSelected.filterModel.value;
    let filterMemoryText = formSelected.filterMemory.options[formSelected.filterMemory.options.selectedIndex].innerText;
    let filterMemory = formSelected.filterMemory.value;
    let q1Link = `${SearchQueryValue}&f14177449=${filterColor}&f4424=${filterMemory}&f5023=${filterModel}&inheritFilters=false&lang=ru&page=1&query=${SearchQueryValue})`

    
    // Ссылка айфон 14 256 белый iphone 14256 ри 28.08.2025
    // 1. https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-446117
    // 2. &f14177449=12065905&f4424=25425&f5023=61513416&inheritFilters=false&lang=ru&page=1&
    // 3. q1=айфон%2014%20256&
    // 4. q2=айфон%2013%20128%1Eцвет%1Ff14177449%3Dбелый%1F12065905%1Eмодель%1Ff5023%3DiPhone%2013%1F5866733&q3=айфон%2013%20128&query=айфон%2014%20256&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false&uclusters=1&uiv=0&uv=AQUAAQIEAAMCAAEDAAoBAAIACcRUOiLDlEPevuBEfEYHvjI_yb_dP6BBZ0U9Qdc6fEUOxm--zz-mvxXATCpXxVXEbjydOA5AwcmLPmPHMUDuvoOvfbmwwIK0pzEUSGQzLUBtOoBGI0Kex-zGXrgyRTNCZ8oVOIhEHMPhQdVA9cWmO7XFt0PgSSK-fMnUweDAMEEDPYk-S8JDP-tD_8NcLQ84TsRyPlvH8safQARBHURDP77GT8AXRR9GQMgQyXDBJ0OkQtNI0MHjRns948V4xu81OUiCPdTEHb_9vM9JBb_vxUFJX7fwxG3FS75MQsS7m0WWR0hCczM7OCo_1LmKQRY_esOrQIk8Mkh4wZTASkg1xAMBTB4AMu8zdzUzMAAuZjAV
    // let linkQuery1 = `https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-446117`;
    // let linkQuery2Filter = `&f14177449=${filterColor}&f4424=${filterMemory}&f5023=${filterModel}&inheritFilters=false&lang=ru&page=1`;
    // let linkQueryQ1 = `&q1=${SearchQueryValue}`
    // let linkQueryQ2 = `&q2=${SearchQueryValue}%1Eцвет%1Ff14177449%3D${filterColorText}%1F12065905%1Eобъем%20встроенной%20памяти%1Ff4424%3D${filterMemoryText}%20ГБ%1F25425%1Eмодель%1Ff5023%3D${filterModelText}%1F61513416`
    // let linkSort = `&query=${SearchQueryValue}&resultset=catalog&sort=${filterPoular}&spp=30&suppressSpellcheck=false&uclusters=1&uiv=0`
    // let linkQv = `&uv=AQUAAQIEAAMCAAEDAAoBAAIACcRUOiLDlEPevuBEfEYHvjI_yb_dP6BBZ0U9Qdc6fEUOxm--zz-mvxXATCpXxVXEbjydOA5AwcmLPmPHMUDuvoOvfbmwwIK0pzEUSGQzLUBtOoBGI0Kex-zGXrgyRTNCZ8oVOIhEHMPhQdVA9cWmO7XFt0PgSSK-fMnUweDAMEEDPYk-S8JDP-tD_8NcLQ84TsRyPlvH8safQARBHURDP77GT8AXRR9GQMgQyXDBJ0OkQtNI0MHjRns948V4xu81OUiCPdTEHb_9vM9JBb_vxUFJX7fwxG3FS75MQsS7m0WWR0hCczM7OCo_1LmKQRY_esOrQIk8Mkh4wZTASkg1xAMBTB4AMu8zdzUzMAAuZjAV`
    // let searchURL = linkQuery1.concat(`${linkQuery2Filter}${linkQueryQ1}${linkQueryQ2}${linkSort}${linkQv}`)
    // console.log (searchURL)
    // console.log(filterMemoryText)

// https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786
// &f14177449=12065905&f4424=25425&f5023=61513416&inheritFilters=false&lang=ru&page=1
// &q1=айфон%2014%20256%1Eцвет%1Ff14177449%3Dбелый%1F12065905%1Eобъем%20встроенной%20памяти%1Ff4424%3D256%20ГБ%1F25425%1Eмодель%1Ff5023%3DiPhone%2014%20Pro%1F61513418%2CiPhone%2014%1F61513416&q2=айфон%2014%20256%1Eцвет%1Ff14177449%3Dбелый%1F12065905%1Eобъем%20встроенной%20памяти%1Ff4424%3D256%20ГБ%1F25425%1Eмодель%1Ff5023%3DiPhone%2014%20Pro%1F61513418
// &query=айфон%2014%20256&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false
    let linkQuery1 = `https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786`;
    let filterQiery = `&f14177449=${filterColor}&f4424=${filterMemory}&f5023=${filterModel}&inheritFilters=false&lang=ru&page=1`;
    let linkQueryQ1 = `&q1=${SearchQueryValue}%1Eцвет%1Ff14177449%3D${filterColorText}%1F12065905%1Eобъем%20встроенной%20памяти%1Ff4424%3D${filterMemoryText}%20ГБ%1F25425%1Eмодель%1Ff5023%3D${filterModelText}%1F61513416`;
    let searchQuery = `&query=${SearchQueryValue}`
    let sortQuery = `&resultset=catalog&sort=${filterPoular}&spp=30&suppressSpellcheck=false`
    let searchURL = linkQuery1.concat(`${filterQiery}${linkQueryQ1}${searchQuery}${sortQuery}`)
    


// // Вот запрос идеальный
// https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786
// &f14177449=12065905&f4424=25425&f5023=61513416&inheritFilters=false&lang=ru&page=1
// &q1=iphone%2014%20256
// &q2=iphone%2014%20256
// &query=iphone%2014%20256&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false

//  let linkQuery1 = `https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786`;
//     let filterQiery = `&f14177449=${filterColor}&f4424=${filterMemory}&f5023=${filterModel}&inheritFilters=false&lang=ru&page=1`;
//     let linkQueryQ1 = `&q1=${SearchQueryValue}`;
//     let linkQueryQ2 = ``
//     let sortQuery = `&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false`
//     let searchURL = linkQuery1.concat(`${filterQiery}${linkQueryQ1}${sortQuery}`)

    return searchURL

}

//     "supplier": "iReStore",
//     "supplierRating": 4.5,
//     "price": {
//             "basic": 5032400,
//             "product": 3099900,
//             "logistics": 10100,
//             "return": 0
//           },
let ulList = document.querySelector('ulList')

const buttonGetPosition = document.querySelector("#send_zap");

buttonGetPosition.addEventListener('click', (event)=>{
    
    // не обновляем страницу после нажатия кнопки "получить"
    event.preventDefault();
    searchURLrequestFilter = createMainSearchURL()
    fetch(searchURLrequestFilter)
    .then(response => response.json())
    .then(json => {
    
        console.log('Создал таблицу');
        let list = document.querySelector('.ulList')

    
        json.products.forEach(products=>{ 
        console.log(products.id, products.name, products.sizes[0].price.product/100, products.supplier,  products.supplierRating,'(', products.time1, products.time2,')', dayDelivery(products.time1, products.time2))
        let li = document.createElement('li')
        li.append(products.id, /*' ',products.name,*/ ' ',products.sizes[0].price.product/100, ' ',products.supplier,  ' ',products.supplierRating, ' /',dayDelivery(products.time1, products.time2),'д', ' (', products.time1,' ', products.time2,')', )
        
        // Выделяем свои магазины Которые есть в списке
            if(classRed(products.supplier, li)){li.classList.add('.red')}
      
        list.append(li)
    });
    console.log('sdaf')
    })

    // CreateMainTable(mainTable, 3, 3);
    // console.log(searchURLrequestFilter);
    }
 
)

function logArrayElements(products) {
    ulList.appendChild(products)
}

// Функция считает кол-во дней доставки
function dayDelivery(time1,time2){
    let summTimeDay = Math.round((time1 + time2) / 24)
    return (summTimeDay)
}

// Функция считает цену для покупателя (базовая цена - скидка)
function priceForClient(priceBasic, ){
}

let mainTable = document.querySelector('.mainTable')
// 1. Создать функцию создания таблицы
function CreateMainTable(parent, cols, rows) {
	let table = document.createElement('table');
	for (let i = 0; i < rows; i++) {
		let tr = document.createElement('tr');
		for (let j = 0; j < cols; j++) {
			let td = document.createElement('td');
            td.textContent=j;
			tr.appendChild(td);
		}
		
		table.appendChild(tr);
	}
	
	parent.appendChild(table);
}

// Получить меню поисковго запросаа
// const buttonGetFilterWB = document.querySelector("#getFilterWB");
// buttonGetFilterWB.addEventListener('click', (event)=>{
//     // не обновляем страницу после нажатия кнопки "получить"
//     event.preventDefault();
//     let SearchQuery = document.querySelector('#SearchQuery')
//     let SearchQueryValue = SearchQuery.value.replace(/ /g, '%20');
//     let filterWB = `https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&autoselectFilters=false&curr=rub&dest=-1257786&inheritFilters=false&lang=ru&query=${SearchQueryValue}&resultset=filters&spp=30&suppressSpellcheck=false`
//     fetch(filterWB)
//     .then(response => response.json())
//     .then(json => {
//         json.data.filters.forEach(allFilters=>{ 
//             console.log(allFilters);
//             console.log(allFilters.name);
//             if(allFilters.items){
//                perebor(allFilters.items);
//             }else{console.log(allFilters.name)}
//             // let fil = allFilters.items
//             // // fil.forEach(id=> console.log(id))
//             // console.log(fil)
//             // perebor(fil)
 
//     });
//     console.log('sdaf')
//     })
// }
// )

function perebor(mass){
mass.forEach((num) => { console.log(num); });
let newForm = document.document.querySelector('#selectNumber'); 
let lableForm = document.createElement("label")
lableForm.innerHTML=mass.name
newForm.lableForm

}

function testeee(){
let select = document.querySelector('#selectNumber'); 
var numbers = [1, 2, 3];  
for (var i = 0; i < numbers.length; ++i) {  
    var option = numbers[i];  
    var element = document.createElement('option');  
    element.textContent = option;  
    element.value = option;  
    select.appendChild(element);  
}  
}

// var select = document.querySelector('#selectNumber');  
// var numbers = [1, 2, 3];  
// for (var i = 0; i < numbers.length; ++i) {  
//     var option = numbers[i];  
//     var element = document.createElement('option');  
//     element.textContent = option;  
//     element.value = option;  
//     select.appendChild(element);  
// }  

// for (let i = 0; i < 5; i++) {  
//     document.getElementsByName('newFilterForm').appendChild(Object.assign(document.createElement('label'), { value: 'text', name: `input${i}`, placeholder: `Ввод ${i + 1}` }));  
// }  

// Создать кнопку/форму со списком
        // <form name="newFilterForm"  method="POST">
        //     let form = doc
        //   <label for="fruits">Выберите фрукт:</label>  
        //   <select id="fruits" name="fruits">  
        //     <option value="apple">Яблоко</option>  
        //     <option value="banana">Банан</option>  
        //     <option value="orange">Апельсин</option>  
        //   </select>
        //   </form>


// buttonGetPosition.addEventListener("click", () => {
//   // getCategotyJSON();
//   // getSearchQuery();
//   getSearchURL(1);
//   // getAllid();

//   // sendRequest(searchURLrequest)
//   // .then((data) => console.log(data))
//   // .catch((data) => console.log(data));
//   getAllProdukts()
// });


// выделить красным
function classRed(supplierName, li){
    let texts = allMagazin;
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


