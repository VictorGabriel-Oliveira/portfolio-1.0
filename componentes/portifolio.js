import Image from 'next/image'
import style from '../styles/Port.module.css'
export default function Portifolio(){
    return(
        <div className={style.conteiner}>
            <h2>Portifolio</h2>
            <div className={style.projeto}>
                <div className={style.projeto1}>
                    
                    <Image src="/bloggr.png" height="auto" width="auto"/>
                    <div className={style.about} >
                        <h1>Blogr</h1>
                        <h4>Projeto criado usando :</h4>
                        <p>HTML , CSS e Javascript.</p>
                        <p>Responsivo.</p>
                    </div>
                </div>

                <div className={style.projeto2}>
                    <Image src="/room.png" height="auto" width="auto"/>
                    <div className={style.about} >
                        <h1>Room</h1>
                        <h4>Projeto criado usando :</h4>
                        <p>HTML , CSS e Javascript.</p>
                        <p>Responsivo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}