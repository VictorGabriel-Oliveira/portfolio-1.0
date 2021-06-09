import  Header  from '../componentes/Header'
import Main from '../componentes/Main'
import Habilit from '../componentes/Habilities'
function  Home () {
   
    return ( 
        <div>
            <Header/>
            <Main/>
            <Habilit/>

            <style jsx global>{`
                body {
                    margin:0;
                    padding:0;
                }
            `}</style>
        </div>
    )
}

export default Home