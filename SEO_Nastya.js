function createMainSearchURL(){
    let SearchQuery = document.querySelector('#SearchQuery')
    let SearchQueryValue = SearchQuery.value.replace(/ /g, '%20');
    // let filterPoularText = formSelected.filterPoular.options[formSelected.filterPoular.options.selectedIndex].innerText;
    // let filterPoular = formSelected.filterPoular.value;
    // let filterColorText = formSelected.filterColor.options[formSelected.filterColor.options.selectedIndex].innerText;
    // let filterColor = formSelected.filterColor.value;
    // let filterModelText = formSelected.filterModel.options[formSelected.filterModel.options.selectedIndex].innerText;
    // let filterModel = formSelected.filterModel.value;
    // let filterMemoryText = formSelected.filterMemory.options[formSelected.filterMemory.options.selectedIndex].innerText;
    // let filterMemory = formSelected.filterMemory.value;
    // let q1Link = `${SearchQueryValue}&f14177449=${filterColor}&f4424=${filterMemory}&f5023=${filterModel}&inheritFilters=false&lang=ru&page=1&query=${SearchQueryValue})`

    
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
    // let linkQuery1 = `https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786`;
    // let filterQiery = `&f14177449=${filterColor}&f4424=${filterMemory}&f5023=${filterModel}&inheritFilters=false&lang=ru&page=1`;
    // let linkQueryQ1 = `&q1=${SearchQueryValue}%1Eцвет%1Ff14177449%3D${filterColorText}%1F12065905%1Eобъем%20встроенной%20памяти%1Ff4424%3D${filterMemoryText}%20ГБ%1F25425%1Eмодель%1Ff5023%3D${filterModelText}%1F61513416`;
    // let searchQuery = `&query=${SearchQueryValue}`
    // let sortQuery = `&resultset=catalog&sort=${filterPoular}&spp=30&suppressSpellcheck=false`
    // let searchURL = linkQuery1.concat(`${filterQiery}${linkQueryQ1}${searchQuery}${sortQuery}`)
    


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

// function logArrayElements(products) {
//     ulList.appendChild(products)
// }

// Функция считает кол-во дней доставки
function dayDelivery(time1,time2){
    let summTimeDay = Math.round((time1 + time2) / 24)
    return (summTimeDay)
}

// Функция считает цену для покупателя (базовая цена - скидка)
// function priceForClient(priceBasic, ){
// }

// let mainTable = document.querySelector('.mainTable')
// // 1. Создать функцию создания таблицы
// function CreateMainTable(parent, cols, rows) {
// 	let table = document.createElement('table');
// 	for (let i = 0; i < rows; i++) {
// 		let tr = document.createElement('tr');
// 		for (let j = 0; j < cols; j++) {
// 			let td = document.createElement('td');
//             td.textContent=j;
// 			tr.appendChild(td);
// 		}
		
// 		table.appendChild(tr);
// 	}
	
// 	parent.appendChild(table);
// }



// function perebor(mass){
// let lableForm = document.createElement("label")
// mass.forEach((num) => { console.log(num.name); 
// lableForm.innerHTML=num.name
// let aasdff =newForm.lableForm
// return (aasdff)
// });
// }

// function testeee(){
// let select = document.querySelector('#selectNumber'); 
// var numbers = [1, 2, 3];  
// for (var i = 0; i < numbers.length; ++i) {  
//     var option = numbers[i];  
//     var element = document.createElement('option');  
//     element.textContent = option;  
//     element.value = option;  
//     select.appendChild(element);  
// }  
// }


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



// --------------------------------------------Получить категории--------------------------------------------
let SearchQueryValue =''
let buttonGetFilter = document.querySelector('#getFilterWB');
buttonGetFilter.addEventListener('click', (event) => {
    // не обновляем страницу после нажатия кнопки "получить"
    event.preventDefault();
    SearchQuery = document.querySelector('#SearchQuery')
    SearchQueryValue = SearchQuery.value.replace(/ /g, '%20');
    console.log(SearchQueryValue)
    
    // Деаем ссыку на запрос
    // https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&autoselectFilters=false&curr=rub&dest=-1257786&inheritFilters=false&lang=ru&query=айфон%2016%20256&resultset=filters&spp=30&suppressSpellcheck=false
    // https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&autoselectFilters=false&curr=rub&dest=-1257786&inheritFilters=false&lang=ru&query=айфон%2013%20256&resultset=filters&spp=30&suppressSpellcheck=false
    let linkFilterWB = `https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&autoselectFilters=false&curr=rub&dest=-1257786&inheritFilters=false&lang=ru&query=${SearchQueryValue}&resultset=filters&spp=30&suppressSpellcheck=false`
    console.log(linkFilterWB);

    function menuFilter(linkMenu){
    // создаю форму, кладу её в класс .test, запускаю парсинг фильтра в класс формы
    createForm('.test')
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
    
    menuFilter(linkFilterWB)
    
    
})
