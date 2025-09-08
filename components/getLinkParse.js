// Про создание формы
// https://doka.guide/js/deal-with-forms/

let linkWBAction1 = 'https://search.wb.ru/exactmatch/ru/common/v18/search?ab_testing=false&appType=1&autoselectFilters=false&curr=rub&dest=-1257786'
// Элементы из фильтра
// было '&hide_dtype=14&inheritFilters=false&lang=ru&page=1'
let linkWBAction2 = '&inheritFilters=false&lang=ru&page=1'
// потом поисковой запрос queryAll
let linkWBAction3= `&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false`

// Функця создаёт форму фильтра
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

