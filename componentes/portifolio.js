import Image from 'next/image'
import style from '../styles/Port.module.css'
export default function Portifolio(){
    return(
        <div className={style.conteiner}>
            <h2>Portifolio</h2>

            <h3>PROJETO #1</h3>
            <div className={style.projetos}>
                <div className={style.projeto}>
                     <Image src="/bloggr.png" height="600" width="300"/>
                    <div className={style.about} >
                        
                        <h1>Blogr</h1>
                        <h4>Projeto criado usando :</h4>
                        <p>Html, Css, Javascript</p>
                        <p>Responsivo.</p>
                        <p><a href="/blogr"> ir para o projeto</a></p>
                    </div>
                </div>
            <h3>PROJETO #2</h3>
                <div className={style.projeto}>
                    <Image src="/room.png" height="400" width="700"/>
                    <div className={style.about} >
                        <h1>Room</h1>
                        <h4>Projeto criado usando :</h4>
                        <p>Html, Css, Javascript</p>
                        <p>Responsivo.</p>
                        <p><a href="/room">ir para o projeto</a></p>
                    </div>
                </div>

                <h3>PROJETO #3</h3>
                <div className={style.projeto}>
                    <Image src="/letmeask.png" height="400" width="700"/>
                    <div className={style.about} >
                        <h1>letmeask</h1>
                        <h4>Projeto criado usando :</h4>
                        <p>React.js , Sass e Firebase</p>
                        <p><a href="https://letmeask-9865c.web.app/">ir para o projeto</a></p>
                    </div>
                </div>
                <h3>PROJETO #4</h3>
                <div className={style.projeto}>
                    <Image src="/loopstudios.jpg" height="700" width="400"/>
                    <div className={style.about} >
                        <h1>Loopstudios</h1>
                        <h4>Projeto criado usando :</h4>
                        <p>React</p>
                        <p><a href="https://victorgabriel-oliveira.github.io/">ir para o projeto</a></p>
                    </div>
                </div>

            </div>
        </div>
    )
}