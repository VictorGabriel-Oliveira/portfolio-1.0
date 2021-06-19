import Image from "next/image"
import style from "../styles/room.module.css"
export default function room (){

    const state = [style.imageHero1, style.imageHero2,style.imageHero3]
    let i = 0

    function pageMove(direction){
        
        const imagen_hero = document.getElementById(style.imageHero)
        const shopNowConteiner1 = document.getElementById(style.shopNowConteiner1)
        const shopNowConteiner2 = document.getElementById(style.shopNowConteiner2)
        const shopNowConteiner3 = document.getElementById(style.shopNowConteiner3) 
        

        imagen_hero.classList.remove(state[i])
        if(direction === 'rigth' && i < state.length -1){
            i+= 1
            
        
        }
        if (direction === 'left' && i > 0){
            i-= 1
            
        }

        let classNames = state[i]
            
        imagen_hero.classList.add(classNames)
        console.log(classNames)
        if(state[i] === state[0]){
            
            shopNowConteiner1.style.display = 'flex'
            shopNowConteiner2.style.display = 'none'
            shopNowConteiner3.style.display = 'none'
        }
        if(state[i] === state[1]){
        
            shopNowConteiner1.style.display = 'none'
            shopNowConteiner2.style.display = 'flex'
            shopNowConteiner3.style.display = 'none'
        }
        if(state[i] === state[2]){
        
            shopNowConteiner1.style.display = 'none'
            shopNowConteiner2.style.display = 'none'
            shopNowConteiner3.style.display = 'flex'
        }

        console.log("ok")
        
    }

    function menu(resonse){
        const logo = document.getElementById(style.logo)
        const hamburguer = document.getElementById(style.hamburger)
        const list = document.getElementById(style.list)
        const close = document.getElementById(style.close)

        if(resonse === 'open'){
            
            logo.style.display = 'none'
            hamburguer.style.display = "none"
            list.style.display = 'flex'
            close.style.display = 'block'
        }
        if (resonse === 'close'){
            
            logo.style.display = 'block' 
            hamburguer.style.display = "block"
            list.style.display = 'none'
            close.style.display = 'none'
        }
        
    }


    return(
        <div className={style.conteiner}>
            <div className={style.firstContent}>

                <div id={style.imageHero} className={style.imageHero1}>
                    < div className={style.header}>

                        <Image id={style.logo}  className={style.logo} src="/images/logo.svg" height="40" width="40"/>
                        <Image  onClick={()=>{menu('open')}} id={style.hamburger} src="/images/icon-hamburger.svg" height="30" width="30" />
                    
                        <div id={style.list}>
                            <Image id={style.close} onClick={()=>{menu('close')}} src="/images/icon-close.svg" height="10" width="10"/>
                            <p>home</p>
                            <p>shop</p>
                            <p>about</p>
                            <p>contact</p>

                        </div>
                    </div>   
                </div>
                <div className={style.shopNow}>
                    <div id={style.shopNowConteiner1}>
                        <h1>Discover innovative</h1>
                        <h1>ways to decorate</h1>
                        <p>
                        We provide unmatched quality,comfort,and style property
                        </p>
                        <p>
                            awners across the coutry. Our combine form and
                        </p>
                        <p>
                            function in bringing your vision to life. Craete a room in your own
                        </p>
                        <p>
                        style with our collection and make you property a reflection of 
                        </p>
                        <p>
                            you and you love
                        </p>
                    </div>
                    <div id={style.shopNowConteiner2}>
                        <h1>We are available</h1>
                        <h1>all across the globe</h1>
                        <p>
                            width stores all over thr world.it´s easy for you to furniture for
                        </p>
                        <p>your home or place af bisnnes. Locally ,we´re in most major</p>
                        <p>
                            cities throughout the coutry. Find the branch nearest you using
                        </p>
                        <p>
                            our store locator.Any question? Don´t hesitate to cotact us today
                        </p>
                    </div>
                    <div id={style.shopNowConteiner3}>
                        <h1>Manufactured with</h1>
                        <h1>the best materials</h1>
                        <p>
                            Our modern furniture store provide o high level of quality.Our
                        </p>
                        <p>
                            Company has invested in advanced technology to ensure that
                        </p>
                        <p>
                            every product is made as perfect and as consistent as possible
                        </p>
                        <p>
                            With three decades of experience in this industry, we understand
                        </p>
                        <p>
                            what custumers want for their home and office
                        </p>
                    </div>
                    <h6>SHOP NOW <Image src="/images/icon-arrow.svg" height="10" width="10"/></h6>
                    <div className={style.btns} >
                    <div onClick={()=>{pageMove('left')}} className={style.btn}><Image src="/images/icon-angle-left.svg" height="10" width="10"/></div>
                    <div  onClick={()=>{pageMove('rigth')}} className={style.btn} ><Image src="/images/icon-angle-right.svg" height="10" width="10"/></div>
                </div>
            </div>
                
                
                        
            </div>

            <div className={style.secondContent}>
                <div className={style.fisthAboutImg}>
                    
                </div>
                <div className={style.about}>
                    <h2>ABOUT OUR FURNITURE</h2>
                    <p>
                        Our multifunctional collection blends desingn and function to suit your individual
                    </p>
                    <p>
                        taste. Make each room unique , or pick a cohesive theme that best express your
                    </p>
                    <p>
                        interests and what inspires you. find the forniture pieces you need, from 
                    </p>
                    <p>
                        traditional to contemporary styles or anything in between. Product speciacists
                    </p>
                    <p>
                        are available to help youcreate your dream space.
                    </p>
                </div>
                <div id={style.secondAboutImg}>
                    
                </div>
            </div>



        </div>
    )
}