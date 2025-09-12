function getAllproducts(link){
    // let ulList = document.querySelector('ulList')
    let div = document.querySelector('.products')
    div.textContent=""
    let list = document.createElement('ol')
    list.classList.add('ulList')
    div.append(list)
    // list.removeChild(li);

console.log(link.mainLink)

    // const buttonGetPosition = document.querySelector("#send_zap");

    // buttonGetPosition.addEventListener('click', (event)=>{
        
        // не обновляем страницу после нажатия кнопки "получить"
        // event.preventDefault();
        // searchURLrequestFilter = createMainSearchURL()

//         let response = await fetch(link);

// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//   // получаем тело ответа (см. про этот метод ниже)
//   let json = await response.json();
// } else {
//   alert("Ошибка HTTP: " + response.status);
// }


        let promise = fetch(link.mainLink)
        .then(response => response.json())
        .then(json => {
        
            console.log('Создал таблицу');
            console.log(json.products);
            console.log(json.total);
            document.querySelector('.generalInfo').textContent=(`Всего товаров: ${json.total} шт.`)
            
            json.products.forEach(products=>{ 
            // console.log(products.id, products.name, products.sizes[0].price.product/100, products.supplier,  products.supplierRating,'(', products.time1, products.time2,')', dayDelivery(products.time1, products.time2))
            let li = document.createElement('li')
            // Проверяем есть ли в нашем списке такой мазаин, выдеяем его красным и меняем название
            let supplier = productsSupplierRed(products.supplier, li)
            // console.log(supplier)
                       
            li.append(products.id, /*' ',products.name,*/ ' ',products.sizes[0].price.product/100, ' ',/*products.supplier,*/ supplier, ' ',products.supplierRating, ' /',dayDelivery(products.time1, products.time2),'д', ' (' , products.name, ')'  /*, ' (', products.time1,' ', products.time2,')', */)
            
            // Выделяем свои магазины Которые есть в списке
                // if(productsSupplierRed(products.supplier, li)){li.classList.add('.red')}
        
            list.append(li)

        });
        console.log('sdaf')
        })

        // CreateMainTable(mainTable, 3, 3);
        // console.log(searchURLrequestFilter);
        }
//     )

//  }