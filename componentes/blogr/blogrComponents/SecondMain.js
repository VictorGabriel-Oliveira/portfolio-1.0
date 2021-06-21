import Image from "next/image"
import style from '/styles/blogr.module.css'

export default function SecondMain(){
    return(
            <div className={style.secondContent}>
                <div id={style.phones}>
                    <div id={style.illustrationPhones}>
                        <Image id={style.phone} src="/blogr/illustration-phones.svg" height="400px" width="400"/>
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
    )

}