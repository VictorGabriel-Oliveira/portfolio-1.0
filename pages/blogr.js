import Image from "next/image"
import style from "../styles/blogr.module.css"

export default function blogr (){

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
    

    return (
        <div className={style.conteiner}>

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
                            }} src="/blogr/icon-close." height="60" width="60"/>
                        </div>
                        
                    </div>
                    
                    <div className={style.list} >
                        
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
                            <button className={style.btn} >Sing Up</button>
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

        <div className={style.main}>

            <h1>Desingne for the future</h1>

            <div className={style.firstContent}>
               
                <div className={style.sections}>
                    <section>
                        <h2>
                            introducing an extencible editor
                        </h2>
                        <p>Blogr feacture an exceedingly intuitive interface which lets your focus </p>
                        <p>on one thing:creating content.The editoh supports manegemant of</p>
                        <p>multiple blogs and allows easy manipulation of embeds such as images,</p>
                        <p>videos,and markdoem.Extensibility with plugins and themes provider</p>
                        <p>easy ways to add functionality or change the looks of a blog</p>
                    </section>

                    <section>
                        <h2>Robust content management</h2>
                        <p>Flexible constent management anables users to easily move through</p>
                        <p>posts. Inclease the usability of your blog by adding customized </p>
                        <p>categories,sections, format,or flow.with this functionality, you´re in</p>
                        <p>full control</p>
                    </section>

                </div>
                
                <div id={style.illustrationEditorDesktop}>
                    <Image src="/blogr/illustration-editor-desktop.svg" height="700" width="650"/>
                </div>
                
           
            </div>

            <div className={style.secondContent}>
                <div id={style.phones}>
                    <div id={style.illustrationPhones}>
                        <Image src="/blogr/illustration-phones.svg" height="400px" width="400"/>
                    </div>
                    <div className={style.phoneText}>
                        <h2>
                            State of the Art infrastructure
                        </h2>
        
                        <p>With reliability an speed in mind, worldwide data center provider the</p>
                        <p> backnone for ultra-fast connectivity. This ensures your site wil load</p>
                        <p>instantly, no matter where your readers are, keeping your site</p>
                        <p>competitive</p>
                    </div>
                    
                </div>
            </div>
            
            <div className={style.trirdContent}>
                <div className={style.img}>
                <div id={style.t}>
                    <Image src="/blogr/illustration-laptop-desktop.svg" height="500" width="600"/>
                </div>
                
                </div>
                <div className={style.sections}>
                    <section>
                        <h2>
                            Free, open,simple
                        </h2>

                        <p>
                            blog is a free and open source application backed by a large
                        </p>
                        <p>community of helpfull developers. It supports freatures such as code</p>
                        <p>syntax highlightin. RSS feeds, social media integration, third-party</p>
                        <p>commenting tolls, and works seamlessly with Google Analytics. The </p>
                        <p>architecture is clean and easy to learn</p>
                    </section>

                    <section>
                        <h2>Powerful tooling</h2>
                        <p>Batteries include. We built a simple and straighforward CLI tool that</p>
                        <p>makes custumization and deployment a breeze, but capable of</p>
                        <p>producing even the most conplicated sites</p>
                    </section>
                </div>
                
           
            </div>
        </div>

        <div className={style.footer}>
            <div id={style.footerImg}>
                <Image  src="/blogr/logo.svg" height="60" width="90"/>
            </div>

            <section>
                <h3>Product</h3>
                <ul>
                    <li>Overview</li>
                    <li>Princing</li>
                    <li>Marketplace</li>
                    <li>features</li>
                    <li>integration</li>
                </ul>
            </section>
            <section>
                <h3>Company</h3>
                <ul>
                    <li >About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>careers</li>
                </ul>
            </section>
            <section>
                <h3>Connect</h3>
                <ul>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>Linkedin</li>
                </ul>
            </section>
        </div>

    </div>
    )
}

   



