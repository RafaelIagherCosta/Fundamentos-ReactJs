export default function Rodape(props: any) {

    return(
        <div className="flex justify-between items-center h-36 rounded-lg text-2xl px-10 bg-cyan-600">

            <h3>{props.feito}</h3>
            <h3>{props.copy}</h3>
        </div>
    )
}