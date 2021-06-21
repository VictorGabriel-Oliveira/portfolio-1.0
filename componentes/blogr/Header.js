import style from '../../styles/blogr.module.css'
import Image from 'next/image'
export default function Header(){

    function menuOnClick(event){
        const iten = event.target.id
        const list = document.getElementById('list')
        const menuIten = document.getElementById(iten)
        const closeIten = document.getElementById(style.closeDiv)
        
        closeIten.style.display = 'block'
        menuIten.style.display = 'none'
        list.style.display ='block'
       
        }
    
    function productItens(){
        const product_itens = document.getElementById(style.productList)

        if(product_itens.style.display === 'block'){
            product_itens.style.display = 'none'
        }else{
            product_itens.style.display = 'block'
            
        }
        
    }
    
    
    function companyItens(){
        const company_itens = document.getElementById(style.companyList)
        if(company_itens.style.display === 'block'){
            company_itens.style.display = 'none'
        }else{
            company_itens.style.display = 'block'
        }
        
    }
    
    function connectItens(){
        const connect_itens = document.getElementById(style.connectList)
        if(connect_itens.style.display === 'block'){
            connect_itens.style.display = 'none'
        }else{
            connect_itens.style.display = 'block'
        }
        
    }
    
    
    
    function closeOnClick(){
        
        const list = document.getElementById('list')
        const menuIten = document.getElementById(style.menu)
        const closeIten = document.getElementById(style.closeDiv)
    
        menuIten.style.display ='block'
        list.style.display ='none'
        closeIten.style.display='none'
    }

    return(
        <div className={style.header}>
        <div className={style.headerConteiner}>

            <div className={style.firstHeader}>

                <div className={style.headerimg}>
                    <Image  src="/blogr/logo.svg" height="60" width="90"/>
                    <div id={style.menuDiv}>
                        <Image id={style.menu}onClick={(item) =>{
                            menuOnClick(item)
                        }} src="/blogr/icon-hamburger.svg" height="60" width="60"/>
                    </div>
                    <div id={style.closeDiv}>
                        <Image id={style.close}onClick={(item) =>{
                            closeOnClick(item)
                        }} src="/blogr/icon-close.svg" height="60" width="60"/>
                    </div>
                    
                </div>
                
                <div className={style.list} id="list">
                    
                    <div className={style.listItens} >
                        <div className={style.listItensContein}> 
                            <p id={style.productp} onClick={productItens}>Product  </p> 
                            <Image src="/blogr/icon-arrow-light.svg" width="10" height="10"/>
                        </div>
                       

                        
                        <ul id={style.productList}>
                            <li>Overview</li>
                            <li>Princing</li>
                            <li>Marketplace</li>
                            <li>features</li>
                            <li>integration</li>
                        </ul>
                    </div>
                    
                    <div className={style.listItens} >
                        <div className={style.listItensContein}>
                            <p id={style.productp} onClick={companyItens}>Company   </p> 
                            <Image src="/blogr/icon-arrow-light.svg" width="10" height="10"/>
                        </div>

                        <ul id={style.companyList}>

                            <li >About</li>
                            <li>Team</li>
                            <li>Blog</li>
                            <li>careers</li>
                            
                        </ul>
                    </div>

                    <div className={style.listItens} >
                        <div className={style.listItensContein}>
                            <p id={style.productp} onClick={connectItens}>Connect  </p>
                            <Image src="/blogr/icon-arrow-light.svg" width="10" height="10"/>
                        </div>
                        
                        <ul id={style.connectList}>

                            <li>Contact</li>
                            <li>Newsletter</li>
                            <li>Linkedin</li>

                        </ul>
                    </div>

                    <div className={style.headerBtns ,style.headerBtnsMenu}>
                        <button className={style.btn}>Loguin</button>
                        <button className={style.btn} id={style.lastBtn}>Sing Up</button>
                    </div>
                    

                </div>

            </div>
            <div className={style.secondHeader}>
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
                <div className={style.headerBtns}>
                    <button className={style.secondBtn}>Start for free</button>
                    <button className={style.secondBtn}>Learn more</button>
                </div>
            </div>
        </div>

    </div>

    )
    
}