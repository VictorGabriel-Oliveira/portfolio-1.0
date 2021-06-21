import style from '../styles/footer.module.css'
export default function footer (){
    return(
        <div className={style.conteiner}>
            <div className={style.list}>
                <h2>contatos</h2>
                <ul>
                    <h3>Watsapp</h3>
                    <p>(63)99999999999</p>
                </ul>
            </div>
        </div>
    )
}
