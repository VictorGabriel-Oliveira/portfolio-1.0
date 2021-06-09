import style from '../styles/Habilites.module.css'
function Habilities(){
    return (
        <div class={style.conteiner}>
            <h1>Minhas habilidades</h1>
            <h2>Front-End</h2>
            <ul class={style.lists}>
                
                <li class={style.listIten}>
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
                    <h5>Javascript</h5>
                    
                </li>

                <li class={style.listIten}>
                <img  src="https://reactjs.org/logo-og.png"/>
                    <h5>React.js</h5>
                   
                </li>

                <li class={style.listIten}>
                <img  src="https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/01/conhecendo-o-next-js.png"/>
                    <h5>Next.js</h5>
                   
                </li>
            </ul>
            <h2>Back-end</h2>
            <ul class={style.lists}>
                 
                <li class={style.listIten}>
                    <img  src="https://miro.medium.com/max/4540/1*q9ww_u32hhpMaA-Q_s1ujw.png"/>
                    <h5>Node.js</h5>
                    
                </li>

                <li class={style.listIten}>
                <img  src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg"/>
                    <h5>MongoDB</h5>
                    
                </li>

                <li class={style.listIten}>
                <img  src="https://i.pinimg.com/originals/a5/c1/a7/a5c1a790c83da3e86168d2c1328929bd.png"/>
                    <h5>Firebase</h5>
                    
                </li>
            </ul>
        </div>
    )

    
}

export default Habilities