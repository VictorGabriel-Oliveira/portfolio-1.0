const product_itens = document.getElementById("product--list")
const company_itens = document.getElementById("company-list")
const connect_itens = document.getElementById("connect-list")

function productItens(){
    
    if(product_itens.style.display === 'block'){
        product_itens.style.display = 'none'
    }else{
        product_itens.style.display = 'block'
        
    }
    
}


function companyItens(){
        
    if(company_itens.style.display === 'block'){
        company_itens.style.display = 'none'
    }else{
        company_itens.style.display = 'block'
    }
    
}

function connectItens(){
        
    if(connect_itens.style.display === 'block'){
        connect_itens.style.display = 'none'
    }else{
        connect_itens.style.display = 'block'
    }
    
}

function menuOnClick(){
    const menu = document.getElementById('menu')
    const list = document.getElementById('list')
    const close = document.getElementById('close')

    menu.style.display ='none'
    list.style.display ='block'
    close.style.display='block'
}

function closeOnClick(){
    const menu = document.getElementById('menu')
    const list = document.getElementById('list')
    const close = document.getElementById('close')

    menu.style.display ='block'
    list.style.display ='none'
    close.style.display='none'
}
