// https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786&inheritFilters=false&lang=ru&page=1&query=айфон%2013%20128&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false

// Про создание формы
// https://doka.guide/js/deal-with-forms/

// 1. Берём заполненную форму фильтров (берём форму и проверяем все заполненные поля)
// 2. Находим все заполнееные поля
// По коду из ссылки WB
// key= items => id
 
// id=value
// f4424
// 3. Составляем ссылку для запроса WB

// Функця выводит все заполненные поля из фильтра

// let linkFromParse =''
// console.log(form)
// console.log(Array(form))
// console.log(Array(form.elements))
// console.log(Array(form.elements).length)


let linkWBAction1 = 'https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786'
// Элементы из фильтра
// '&hide_dtype=14&inheritFilters=false&lang=ru&page=1'
let linkWBAction2 = '&hide_dtype=14&inheritFilters=false&lang=ru&page=1'
// потом поисковой запрос queryAll
let linkWBAction3= `&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false`

// Идеальный запрос
// https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786
// &f4424=12868&f5023=5866733
// &hide_dtype=14&inheritFilters=false&lang=ru&page=1
// &q1=айфон%2013%20128&query=айфон%2013%20128
// &resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false


// 07/09/2025
// Запрос "айфон 13 128" без фильтров WB
//WB     https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786&hide_dtype=14&inheritFilters=false&lang=ru&page=1&query=айфон%2013%20128&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false
// МОЙ   https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&autoselectFilters=false&curr=rub&dest=-1257786&inheritFilters=false&lang=ru&query=%D0%B0%D0%B9%D1%84%D0%BE%D0%BD%2013%20128&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false&page=1

// Категория "Смартфон"
// WB https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786&hide_dtype=14&inheritFilters=false&lang=ru&page=1&q1=айфон%2013%20128&query=айфон%2013%20128&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false&xsubject=515
// МОй https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&curr=rub&dest=-1257786&hide_dtype=14&inheritFilters=false&lang=ru&page=1&query=айфон%2013%20128&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false


function serializeForm(formNode) {
  const { elements } = formNode
    let mainLink =''
    let linnkk = ''
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
        const name = element.name
        const type = element.type
        // const value = element.value

        let value =''
        // для всех чекбоксов делаем проверку
        if (element.type === 'checkbox' && element.checked){
            value = element.value 
            console.log(`&${name}=${element.value}`)
            linnkk = linnkk.concat(`&${name}=${element.value}`)
            
        }
        // для всех "Выбор" делаем проверку
        else if (element.selectedIndex)
            {
                    console.log(element.selectedIndex)
                    console.log(element[element.options.selectedIndex])
                    if (element.options[element.options.selectedIndex].text)
                    {
                        linnkk = linnkk.concat(`&${element.name}=${element.options[element.selectedIndex].value}`)

                    }else{
                    console.log('Какой-то элемент не выбирается')
                    // console.log(element.options[element.options.selectedIndex].text)
                        }

            }
        
            // console.log(linnkk)
            let queryAll = (`&q1=${SearchQueryValue}&query=${SearchQueryValue}`)
            mainLink = (linkWBAction1 + linnkk + linkWBAction2 + queryAll + linkWBAction3)
            console.log(mainLink)
            })
            return { mainLink }
}

