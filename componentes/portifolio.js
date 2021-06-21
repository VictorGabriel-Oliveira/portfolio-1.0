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
                        <p>React.js e Next.js</p>
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
                        <p>React.js e Next.js</p>
                        <p>Responsivo.</p>
                        <p><a href="/room">ir para o projeto</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}