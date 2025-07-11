export default function Page(){

    const nome = 'Joao'
    const idade = '40'
    const numeroAleatorio =  Math.random()
    return(
        <div>
            <div>O nome dele eh {nome}</div>
            <div>A Idade dele eh {idade}</div>
            <div> Numero random multiplicado por 3 {numeroAleatorio * 3}</div>
        </div>
    )
}