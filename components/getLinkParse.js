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
                    // console.log(element.options)
                    // console.log(element.options.selectedIndex) Работает. выбранный инекс
                    // let selectIndexXX = element.options.selectedIndex -1 
                    // console.log(element.options[selectIndexXX].text)
                    // console.log(element.text) не работает
                    // console.log(element.options, element.name)
                    // console.log(`&${element.name}=${element.options[element.selectedIndex].value}`)
                    // Работает. Если есть текст в выбранной форме
                    // console.log(element.options[element.options.selectedIndex-1].text, element.options[element.options.selectedIndex-1].value)
                    // console.log(name, element.options[element.options.selectedIndex-1].value)
                    // let biooods = Boolean(element.options[element.options.selectedIndex].text)
                    // console.log(biooods)
                    if (element.options[element.options.selectedIndex].text)
                    {
                        // console.log('Есть Select ')
                        // console.log (element.options[element.options.selectedIndex].text)
                        // console.log(name, element.options[element.options.selectedIndex].value)
                        
                        linnkk = linnkk.concat(`&${element.name}=${element.options[element.selectedIndex].value}`)

                    }else{
                        // Если есть селект, но он не заполнен
                    // console.log('elseee')
                    console.log('Какой-то элемент не выбирается')
                    // console.log(element.options[element.options.selectedIndex].text)
                    // console.log(element.options.selectedIndex)
                    // console.log(element.options[element.selectedIndex].value)
                    // console.log(element.options[element.selectedIndex].text)
                    // console.log(element.options[element.selectedIndex])
                        }

            }
        
                //              var e = document.getElementById("ddlViewBy");
                // var value = e.value;
                // var text = e.options[e.selectedIndex].text;
                
                //   const { name, type } = element
                //   console.log(name, type)
                //   const value = type === 'checkbox' ? element.checked : element.value
        
    
            // console.log(linnkk)
            let queryAll = (`&q1=${SearchQueryValue}&query=${SearchQueryValue}`)
            mainLink = (linkWBAction1 + linnkk + linkWBAction2 + queryAll + linkWBAction3)
            console.log(mainLink)
            })
            return { mainLink }
}

