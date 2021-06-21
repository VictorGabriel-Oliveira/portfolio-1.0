import Image from "next/image"
import style from '/styles/blogr.module.css'

export default function ThirdMain(){
    return(
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
    )

}