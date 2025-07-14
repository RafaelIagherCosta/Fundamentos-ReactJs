import Cabecalho from "@/components/Cabecalho"
import Conteudo from "@/components/conteudo"
import Rodape from "@/components/Rodape"


export default function Page() {
    return(
        <>
        <div className={`flex-col gap-4 p-4 h-screen`}>
        <Cabecalho  titulo="Minha aplicacao" subtitulo="melhor aplicacao web"/>
        <Conteudo >
            <p>Teste</p>
        </Conteudo>
        <Rodape  feito ="Feito com amor por Rafael Iagher" copy ="CopyRightdwadwadwadwadwadwa"/>
        </div>
        </>
    )
}