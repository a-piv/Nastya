// Получаем поисковю ссылку для всех товаров по поиску и фильтру. Работает
// https://doka.guide/js/deal-with-forms/
// Было'https://u-search.wb.ru/exactmatch/ru/common/v18/search?ab_testid=psm&ab_testid=psm&appType=1&curr=rub&dest=-1257786'
let linkWBAction1 = 'https://www.wildberries.ru/__internal/u-search/exactmatch/ru/common/v18/search?ab_testing=false&ab_testing=false&appType=1&curr=rub&dest=-1257786'
let linkWBAction2 = '&hide_dtype=11&inheritFilters=false&lang=ru&page=1'
let selectedMenuSelected = '' //выбранные фильтры. поисковой запрос queryAll
let linkWBAction3= `&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false`
console.log('Рабоатет getLinkParse')
// Функця создаёт форму фильтра

// Сделать класс, который возвращает все выбранные в меню позиции и общую ссылку на поисковой запрос. Пока выбранные элементы вывел в переменную selectedMenu
// formNode - отрпавляем всю форму, функция выбирает из нее выбранные фильтры

// Получаем только выбранные фильтры
function serializeForm(formNode) {
    document.querySelector('.mainTable').text=""
  const { elements } = formNode
    // let mainLink =''
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
                        selectedMenuSelected = linnkk
                        console.log(selectedMenuSelected)

                    }else{
                    console.log('Какой-то элемент не выбирается')
                    // console.log(element.options[element.options.selectedIndex].text)
                        }

            }
        
            // console.log(linnkk)
            // let queryAll = (`&query=${SearchQueryValue}`)
            // mainLink = (linkWBAction1 + linnkk + linkWBAction2 + queryAll + linkWBAction3)
            // console.log(mainLink)
            console.log(linnkk)
            })
            return { linnkk }
}

// Получаем полный поисковой запрос
function link_Search(){
     let queryAll = (`&query=${SearchQueryValue}`)
     console.log(queryAll)
     let menu_Selected = serializeForm(document.querySelector('#idFormSearch'))
     let menu_Selected_all = menu_Selected.linnkk
     console.log(menu_Selected_all)
            let mainLink = (linkWBAction1 + menu_Selected_all + linkWBAction2 + queryAll + linkWBAction3)
            console.log(mainLink)
            return mainLink
}
