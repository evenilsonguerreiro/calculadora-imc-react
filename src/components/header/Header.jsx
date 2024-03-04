import { useState } from 'react'
import './Header.css'


const Header = () => {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0);


    const renderizarResultado = () => {
        const imc = peso / (altura * altura)
        const media = imc.toFixed(2)

        if(media < 18){
            return (
                <p> IMC {media}: VOCÊ ESTÁ ABAIXO DO PESO</p>
            )
        } else if(media < 25){
            return (
                <p> IMC {media}:PESO NORMAL</p>
            )
        } else if(media < 30){
            return (
                <p> IMC {media}:VOCÊ ESTÁ ACIMA DO PESO</p>
            )
        }else if(media < 35){
            return (
                <p> IMC {media}: VOCÊ ESTÁ ACIMA DO PESO GRAU I</p>
            )
        } else if(media < 40){
            return (
                <p> IMC {media}: VOCÊ ESTÁ ACIMADO PESO GRAU II</p>
            )
        } else if(media <= 45) {
            return (
                <p> IMC {media}: VOCÊ ESTÁ ACIMA DO PESO GRAU III</p>
            )
        }
        

    }







    return (
        <>
            <main>
                <h1>CALCULADORA DE IMC</h1>
                <p><b>Insira seus dados abaixo e compare com nossa tabela</b></p>
                <input type="number"placeholder="Digite seu peso (kg)" onChange={e=> setPeso(+e.target.value)}/>
                <input type="number"placeholder="Digite sua altura (M)" onChange={e=> setAltura(+e.target.value)}/>
                {renderizarResultado()}   
            </main>
        </>
    )
}

export default Header