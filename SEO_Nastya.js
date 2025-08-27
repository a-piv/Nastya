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
    // let searchURLrequestFilterTEST = 'https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testid=new_optim&appType=64&curr=rub&dest=-446117&f14177449=13600062&f4424=12868&f5023=5866733&inheritFilters=false&lang=ru&page=1&query=%D0%B0%D0%B9%D1%84%D0%BE%D0%BD+13+128&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false&uclusters=1&uiv=0&uv=AQUAAQICAAEBAAIEAAMDAAoACcRUOiLDlEPevuBEfEYHvjI_yb_dP6BBZ0U9Qdc6fEUOxm--zz-mvxXATCpXxVXEbjydOA5AwcmLPmPHMUDuvoOvfbmwwIK0pzEUSGQzLUBtOoBGI0Kex-zGXrgyRTNCZ8oVOIhEHMPhQdVA9cWmO7XFt0PgSSK-fMnUweDAMEEDPYk-S8JDP-tD_8NcLQ84TsRyPlvH8safQARBHURDP77GT8AXRR9GQMgQyXDBJ0OkQtNI0MHjRns948V4xu81OUiCPdTEHb_9vM9JBb_vxUFJX7fwxG3FS75MQsS7m0WWR0hCczM7OCo_1LmKQRY_esOrQIk8Mkh4wZTASkg1xAMAL-kBTB4y7zN3NTMwAC5m'
    // ССылка без поискового запроса и фильтров
    // БЫЛ let searchURLrequestEmpty= 'https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testid=new_optim&appType=64&curr=rub&dest=-446117&inheritFilters=false&lang=ru&page=1&resultset=catalog&spp=30&suppressSpellcheck=false&uclusters=1&uiv=0&uv=AQUAAQICAAEBAAIEAAMDAAoACcRUOiLDlEPevuBEfEYHvjI_yb_dP6BBZ0U9Qdc6fEUOxm--zz-mvxXATCpXxVXEbjydOA5AwcmLPmPHMUDuvoOvfbmwwIK0pzEUSGQzLUBtOoBGI0Kex-zGXrgyRTNCZ8oVOIhEHMPhQdVA9cWmO7XFt0PgSSK-fMnUweDAMEEDPYk-S8JDP-tD_8NcLQ84TsRyPlvH8safQARBHURDP77GT8AXRR9GQMgQyXDBJ0OkQtNI0MHjRns948V4xu81OUiCPdTEHb_9vM9JBb_vxUFJX7fwxG3FS75MQsS7m0WWR0hCczM7OCo_1LmKQRY_esOrQIk8Mkh4wZTASkg1xAMAL-kBTB4y7zN3NTMwAC5m'
    let searchURLrequestEmpty= 'https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testid=new_optim&appType=64&curr=rub&dest=-446117'
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
    let SearchQueryValue = SearchQuery.value.replace(/ /g, '+');
    let filterPoular = formSelected.filterPoular.value;
    let filterColor = formSelected.filterColor.value;
    let filterModel = formSelected.filterModel.value;
    let filterMemory = formSelected.filterMemory.value;
    let searchURLFilter = searchURLrequestEmpty.concat('&f14177449=',filterColor,'&f4424=',filterMemory,'&f5023=',filterModel, '&inheritFilters=false&lang=ru&page=1','&query=', SearchQueryValue,
        '&resultset=catalog','&sort=',filterPoular,'&spp=30&suppressSpellcheck=false&uclusters=1&uiv=0','&uv=AQUAAQIEAAMDAAoBAAICAAEACcRUOiLDlEPevuBEfEYHvjI_yb_dP6BBZ0U9Qdc6fEUOxm--zz-mvxXATCpXxVXEbjydOA5AwcmLPmPHMUDuvoOvfbmwwIK0pzEUSGQzLUBtOoBGI0Kex-zGXrgyRTNCZ8oVOIhEHMPhQdVA9cWmO7XFt0PgSSK-fMnUweDAMEEDPYk-S8JDP-tD_8NcLQ84TsRyPlvH8safQARBHURDP77GT8AXRR9GQMgQyXDBJ0OkQtNI0MHjRns948V4xu81OUiCPdTEHb_9vM9JBb_vxUFJX7fwxG3FS75MQsS7m0WWR0hCczM7OCo_1LmKQRY_esOrQIk8Mkh4wZTASkg1xAMBTB4y7zN3NTMwAC5mL-kA')
    return searchURLFilter
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

    console.log(json.products.length);
    json.products.forEach(products=>{ 
        console.log(products.id, products.name, products.sizes[0].price.product/100, products.supplier,  products.supplierRating,'(', products.time1, products.time2,')', dayDelivery(products.time1, products.time2))
        //  ulList.innerHTML += products.id, products.name, products.sizes[0].price.product/100, products.supplier,  products.supplierRating
        // ulList.append( `${products.id}, ${products.name}, ${products.sizes[0].price.product/100}, ${products.supplier},  ${products.supplierRating}`)
        let li = document.createElement('li')
        li.append(products.id, ' ',products.name, ' ',products.sizes[0].price.product/100, ' ',products.supplier,  ' ',products.supplierRating, ' /',dayDelivery(products.time1, products.time2),'д', ' (', products.time1,' ', products.time2,')', )
        list.append(li)
    });
    })

    CreateMainTable(mainTable, 3, 3);
    console.log(searchURLrequestFilter);
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



