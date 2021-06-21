import style from '../styles/Habilites.module.css'
import Image from 'next/image'
function Habilities(){
    return (
        <div className={style.conteiner}>
            <h1>Minhas habilidades</h1>
            <div className={style.habilts}>
                <p>
                    Trabalho com desenvolvimento Web tanto no front-end  como no back-end .
                </p>
                <p>
                    Tenho um bom conhecimento para definir qual tecnologia se encaixa mais para suas nescessidades. 
                </p>
                <p>
                    Pego designs prontos e transformo em codigo. 
                </p>
            </div>

            <h1>Ferramentas que utilizo</h1>
            <h2>Front-End</h2>
            <ul className={style.lists}>
                
                <li className={style.listIten}>
                    <Image src='/1200px-Unofficial_JavaScript_logo_2.svg.png' width="auto" height="auto"/>
                    <h5>Javascript</h5>
                    
                </li>

                <li className={style.listIten}>
                    <Image src='/react.png' width="auto" height="auto"/>
                
                    <h5>React.js</h5>
                   
                </li>

                <li className={style.listIten}>
                <Image src='/next.png' width="auto" height="auto"/>
                    <h5>Next.js</h5>
                   
                </li>
            </ul>
            <h2>Back-end</h2>
            <ul className={style.lists}>
                 
                <li className={style.listIten}>
                    <Image src='/node.png' width="auto" height="auto"/>
                    <h5>Node.js</h5>
                    
                </li>

                <li className={style.listIten}>
                <img  src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"/>
                    <h5>MongoDB</h5>
                    
                </li>

                <li className={style.listIten}>
                <img  src="https://i.pinimg.com/originals/a5/c1/a7/a5c1a790c83da3e86168d2c1328929bd.png"/>
                    <h5>Firebase</h5>
                    
                </li>
            </ul>
        </div>
    )

    
}

export default Habilities