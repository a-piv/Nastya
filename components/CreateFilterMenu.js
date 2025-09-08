//https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&autoselectFilters=false&curr=rub&dest=-1257786&inheritFilters=false&lang=ru&query=айфон%2016%20256&resultset=filters&spp=30&suppressSpellcheck=false

// const { createElement } = require("react");

// const { createElement } = require("react");
// создаём форму
const classFormSearchFilter = 'formSearchFilter';


function createForm(className){
    let searchClass = document.querySelector(className)
    // очищаем форму и общее кол-во товаров
    if(document.querySelector('#idFormSearch')){
        document.querySelector('#idFormSearch').textContent=""
        document.querySelector('.generalInfo').remove()
        // document.querySelector('.buttonGetList').remove()
    }
        
    
    let form = document.createElement('form')
    form.setAttribute('id', 'idFormSearch'); 
    form.classList.add('formSearchFilter')
    // form.setAttribute('method', 'GET'); 
    // form.setAttribute('action','https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786&inheritFilters=false&lang=ru&page=1')
    // &autoselectFilters=false 
    

    // Создаём кнопку "Получить товары"
    let buttonSendForm = document.createElement('button')
    buttonSendForm.classList.add('buttonGetList')
    buttonSendForm.textContent = "Получить товары"
    buttonSendForm.setAttribute('type', 'submit'); 
    // buttonSendForm.setAttribute('submit', 'getLinkParse'); 
    form.append(buttonSendForm)
    searchClass.parentNode.append(form)

    // вызываем функцию создания ссылки для парсинга
    buttonSendForm.addEventListener('click', (event) => {
  event.preventDefault()
//   функция создаёт ссылку для парсинга товаров
  let linkAllproducts = serializeForm(form)
  console.log(linkAllproducts)
  getAllproducts(linkAllproducts)
  
})
}




// Функция создаёт список фильтров
function createFormElements(element){
    // вставляем в див с классом classMenu
    // let classform = document.querySelector('.mainTable')

    let formFilter = document.querySelector(`.${classFormSearchFilter}`)
    // if (element.items){console.log(element.items.length)}else{console.log(0)}
    // Передаю элемент меню
    // 1. Есть итемс, длина больше одного - то строю выпадающий список селект
    // 2. Есть итемс, длина ровно один - то строю чекбокс
    // 3. Нету итемс (цена, ) - просто вывожу название
    if (element.items){
                    // 1. Есть итемс, длина больше одного - то строю выпадающий список селект
                if (element.items.length>1){
                                    let createLable = document.createElement('label')
                                    createLable.textContent = element.name;
                                    let createInput = document.createElement('select')
                                    createInput.setAttribute('rus', element.name);
                                    createInput.name = element.key
                                    createInput.id = element.key
                                    // let createOptions = document.createElement('option')
                                    // createOptions.setAttribute('value', '')
                                    // createOptions.setAttribute('selected=', 'selected') //<option value="" selected="selected">Выберите...</option>)
                                    // createInput.classList.add(element.key)
                                    // Создаём пустой элемент чтобы не заполнялся по умолчанию
                                    let pustoy = document.createElement('option')
                                    pustoy.setAttribute('label', '')
                                    createInput.append(pustoy)
                                        element.items.forEach((elementw)=>{
                                            let createOptions = document.createElement('option')
                                            createOptions.textContent = elementw.name;
                                            createOptions.setAttribute('value', elementw.id);
                                            createInput.append(createOptions)
                                            createLable.append(createInput)
                                        })

                                    formFilter.append(createLable)
                }
                // 2. Есть итемс, длина ровно один - то строю чекбокс
                else if (element.items.length = 1){
                                    let createLablee = document.createElement('label')
                                    let createInputt = document.createElement('input')
                                    createLablee.textContent = element.name
                                    // createInputt.setAttribute('name', element.name);
                                    createInputt.setAttribute('name', element.key);
                                    createInputt.setAttribute('rus', element.name);
                                    createInputt.setAttribute('value',element.items[0].id);
                                    createInputt.setAttribute('type', 'checkbox');
                                    createInputt.setAttribute('id', element.key);
                                    // createInput.textContent(elen.name)
                                    createLablee.append(createInputt)
                                    formFilter.append(createLablee)
                }
                // 3. Нету итемс (цена, ) - просто вывожу название
                else if (element.items.length = 0){
                                    let createLable = document.createElement('label')
                                    let createInput = document.createElement('input')
                                    createLable.textContent = element.name
                                    createInput.setAttribute('name', element.name);
                                    createInput.setAttribute('type', 'checkbox');
                                    // createInput.textContent(elen.name)
                                    createLable.append(createInput)
                                    formFilter.append(createLable)
         }
    }   
}

// Функция создаёт общую информацию в конце формы (main) и создаём див для всех товаров
function createDataGeneralInfo(textName, name, textmeaning, meaning){
    let divNext = document.querySelector('.main')
    let generalInfo = document.createElement('div')
    generalInfo.classList.add('generalInfo')
    generalInfo.textContent= textName + name + textmeaning + meaning
    divNext.append(generalInfo)
    let products = document.createElement('div')
    products.classList.add('products')
    divNext.append(products)
}