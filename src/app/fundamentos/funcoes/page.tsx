export default function Page(){

    function renderizarTitulo (){

        return(
            <div>
                <h1>titulo</h1>
                <h2>subTitulo</h2>
            </div>
        )
    }

    function renderizarConteudo (){
        return(
            <ul>
                <li>Ana</li>
                <li>rafA</li>
                <li>Maria</li>
            </ul>
        )
    }

    return(
        <>
        <div>
            {renderizarTitulo()}
        </div>

        <div>
            {renderizarConteudo()}
        </div>
        
        </>
    )

}