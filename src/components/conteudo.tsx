export default function Conteudo (props: any) {

    return(
        <div className={`flex justify-center items-center text-3xl
         rounded-lg bg-emerald-500 flex-1`}>
            {props.children}
        </div>
    )
}