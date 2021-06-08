import style from '../styles/Header.module.css'
function Header() {
    return <div className={style.header}>
        <div className={style.logo}>
            Victor Gabriel
        </div>
        <div className={style.headerConteiner}>
            <ul>
                <li><a href="#">inicio</a></li>
                <li><a href="#">portifolio</a></li>
                <li><a href="#">contato</a></li>
                <li><a href="#">serviços</a></li>
                
            </ul>
        </div>
    </div>
}

export default Header