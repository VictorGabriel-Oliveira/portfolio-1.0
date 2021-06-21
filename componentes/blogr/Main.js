
import style from '/styles/blogr.module.css'

import FirstMain from "./blogrComponents/FirstMain"
import SecondMain from "./blogrComponents/SecondMain"
import ThirdMain from "./blogrComponents/ThirdMain"

export default function (){
    return(

        <div className={style.main}>

            <h1>Desingne for the future</h1>

            <FirstMain/>
            <SecondMain/>
            <ThirdMain/>

           
        </div>

    )
}