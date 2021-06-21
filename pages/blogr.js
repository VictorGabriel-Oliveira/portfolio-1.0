import style from "../styles/blogr.module.css"

import Header from "../componentes/blogr/Header"
import Main from "../componentes/blogr/Main"
import Footer from "../componentes/blogr/Footer"

export default function blogr (){

    return (
        <div className={style.conteiner}>
            <Header/>
            <Main/>
            <Footer/>    
        </div>
    )
}

   



