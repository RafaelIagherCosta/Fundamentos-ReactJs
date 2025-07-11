import Cabecalho from "@/components/Cabecalho"
import Conteudo from "@/components/conteudo"
import Rodape from "@/components/Rodape"


export default function Page() {
    return(
        <>
        <div className={`flex-col gap-4 p-4 h-screen`}>Montar uma pagina</div>
        <Cabecalho  titulo="Minha aplicacao" subtitulo="melhor aplicacao web"/>
        <Conteudo />
        <Rodape />
        </>
    )
}