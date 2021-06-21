import Image from "next/image"
import style from '/styles/blogr.module.css'
export default function FirstMain(){
    return(

        <div className={style.firstContent}>
               
            <div className={style.sections}>
                <section>
                    <h2>
                        introducing an extencible editor
                    </h2>
                    <p>Blogr feacture an exceedingly intuitive interface which lets your focus </p>
                    <p>on one thing:creating content.The editoh supports manegemant of</p>
                    <p>multiple blogs and allows easy manipulation of embeds such as images,</p>
                    <p>videos,and markdoem.Extensibility with plugins and themes provider</p>
                    <p>easy ways to add functionality or change the looks of a blog</p>
                </section>

                <section>
                    <h2>Robust content management</h2>
                    <p>Flexible constent management anables users to easily move through</p>
                    <p>posts. Inclease the usability of your blog by adding customized </p>
                    <p>categories,sections, format,or flow.with this functionality, you´re in</p>
                    <p>full control</p>
                </section>

            </div>
            
            <div id={style.illustrationEditorDesktop}>
                <Image src="/blogr/illustration-editor-desktop.svg" height="700" width="650"/>
            </div>
            
    
        </div>

    )
}