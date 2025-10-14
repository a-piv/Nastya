// создаём меню с фильтром (для поискового запроса). Работает.
function createForm(className){
    let searchClass = document.querySelector(className)
    let form = document.createElement('form')
    form.setAttribute('id', 'idFormSearch'); 
    form.classList.add('formSearchFilter')
    searchClass.append(form)
}


    // Создаём кнопку "Получить товары"
    function createButtonGetProducts(){
        let buttonSendForm = document.createElement('button')
        buttonSendForm.classList.add('buttonGetList')
        buttonSendForm.textContent = "Получить товары"
        buttonSendForm.setAttribute('type', 'submit'); 
        // buttonSendForm.setAttribute('submit', 'getLinkParse'); 
        let inp = document.querySelector('.mainTable')
        inp.append(buttonSendForm)
            // вызываем функцию создания ссылки для парсинга
        buttonSendForm.addEventListener('click', (event) => {
        event.preventDefault()
        //   функция создаёт ссылку для парсинга товаров
        // let form = 
        
        let linkAllproducts = link_Search()
        console.log(linkAllproducts)
        
        // Создаём див для списка товаров
        let products = document.createElement('div')
        products.classList.add('products')
        inp.append(products)
        getAllproducts(linkAllproducts)
        // выключаем кнопку после нажатияы
        buttonOff('.buttonGetList')
    } )
    }



// Функция создаёт список фильтров
function createFormElements(element){
    // console.log(element)
    // вставляем в див с классом classMenu
    // let classform = document.querySelector('.mainTable')

    let formFilter = document.querySelector('.formSearchFilter')
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
                                    // console.log(createInput.name)
                                    createInput.id = element.key
                                    let frm = createInput.id
                                    
                                    // Добавляем класс в ключевые варианты: модель, цвет, память
                                    let classListt = classColorMainSelect(element.key)
                                    // console.log(element )
                                    createInput.setAttribute('class', classListt); 

                                    createInput.addEventListener("change", functionTest)
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
    console.log('Работает после нажатия на получить')
}

// Функция создаёт общую информацию в конце формы (main) и создаём див для всех товаров
function createDataGeneralInfo(textName, name, textmeaning, meaning){
    let divNext = document.querySelector('.mainTable')
    let generalInfo = document.createElement('div')
    generalInfo.classList.add('generalInfo')
    generalInfo.textContent= textName + name + textmeaning + meaning
    divNext.append(generalInfo)
    // let products = document.createElement('div')
    // products.classList.add('products')
    // divNext.append(products)
}


function colorMainMenu(event){
        // если модель, память или цвет, добавляем класс
        console.log('Цвет меню добавлен')
    if(event.target.name == f14177449){
        // было fcolor
        // event.target.classList.add('classColor')
        return(classColor)
    }else if(event.target.name == f4424){
        // event.target.classList.add('classMemory')
        return(classMemory)
    }else if(event.target.name == f5023){
        // event.target.classList.add('classModel')
        return(classModel)
    }else {}

}



function functionTest(event){
    console.log("Кнопка выбора работает")
    // nd = `${event.target.name}=${event.target.value}`
    selectedFilter(selectedMenuSelected)
    // console.log(event.target.name)
    // console.log(event.target.classList)
    event.target.classList=''
    console.log(event.target.value)
    // console.log(event.target.options[event.target.selectedIndex].text)
    console.log(event.target.name)

    
    // если форма содержит текст, то добавляем класс
    if (event.target.options[event.target.selectedIndex].text)
        {event.target.classList.add('bg-yellow');
        event.target.parentNode.classList.add('bg-parent')}
    else{event.target.classList.remove('bg-yellow');
        event.target.parentNode.classList.remove('bg-parent')}

    // Проверка на цвет
    if(event.target.options[event.target.selectedIndex].value){
        let value = event.target.options[event.target.selectedIndex].value
        let color = colorBG(value)
        event.target.classList.add(color)
    }
    buttonOn('.buttonGetList')
}

// Классы Для цветов телефона
function colorBG(value){
    // console.log(value)
    if (value=="20214644") //бежевый НЕ ИЗМЕНИЛ
        {return 'beige'}
        else if (value=="12065905") //белый
        {return 'white'}
        else if (value=="20214449") //голубой
        {return 'azure'}
        else if (value=="14185777") //желтый
        {return 'yellow'}
        else if (value=="14835931") //зелёный
        {return 'green'}
        else if (value=="11807341") //красный
        {return 'red-col'}
        else if (value=="11807342") //розовый
        {return 'pink'}
        else if (value=="20214430") //серый
        {return 'gray'}
        else if (value=="20214646") //синий
        {return 'blue'}
        else if (value=="14185662") //фиолетовый
        {return 'violet'}
        else if (value=="20214658") //коричневый
        {return 'brown'}
        else if (value=="20214770") //оранжевый
        {return 'orange'}
        else if (value=="13600062") //фиолетовый
        {return 'black'}
    else 
//    Было
    // if (value=="16119260") //бежевый
    //     {return 'beige'}
    // else if (value=="16777215") //белый
    //     {return 'white'}
    // else if (value=="11393254") //голубой
    //     {return 'azure'}
    // else if (value=="16776960") //желтый
    //     {return 'yellow'}
    // else if (value=="32768") //зелёный
    //     {return 'green'}
    // else if (value=="16711680") //красный
    //     {return 'red-col'}
    // else if (value=="16761035") //розовый
    //     {return 'pink'}
    // else if (value=="8421504") //серый
    //     {return 'gray'}
    // else if (value=="255") //синий
    //     {return 'blue'}
    // else if (value=="15631086") //фиолетовый
    //     {return 'violet'}
    // else if (value=="0") //фиолетовый
    //     {return 'black'}
    // else 
        {return 'other'}
}

// Выделяем модель, память и цвет
function classColorMainSelect(value){
    // Цвет
    // console.log(value)
    if (value == 'f14177449'){
        // был параметр fcolor
        return 'border-fcolor'
     }
    // Модель
    else if (value == 'f5023'){
        return 'border-model'
    }
    // Объем встроенной памяти
    else if (value == 'f4424'){
        return 'border-memory'
    }else{
        return 'other'
    }
}

// Отключаем кнопку после нажатия
function buttonOff(btnClass){
 document.querySelector(btnClass).disabled = true;
}

// Включаем кнопку после изменения формы
function buttonOn(btnClass){
 document.querySelector(btnClass).disabled = false;
}
