import  Header  from '../componentes/Header'
import Main from '../componentes/Main'
function  Home () {
   
    return ( 
        <div>
            <Header/>
            <Main/>

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