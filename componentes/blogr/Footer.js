import Image from "next/image"
import style from '/styles/blogr.module.css'
export default function(){
    return(
        <div className={style.footer}>
        <div id={style.footerImg}>
            <Image  src="/blogr/logo.svg" height="60" width="90"/>
        </div>

        <section>
            <h3>Product</h3>
            <ul>
                <li>Overview</li>
                <li>Princing</li>
                <li>Marketplace</li>
                <li>features</li>
                <li>integration</li>
            </ul>
        </section>
        <section>
            <h3>Company</h3>
            <ul>
                <li >About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>careers</li>
            </ul>
        </section>
        <section>
            <h3>Connect</h3>
            <ul>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>Linkedin</li>
            </ul>
        </section>
    </div>


    )
}