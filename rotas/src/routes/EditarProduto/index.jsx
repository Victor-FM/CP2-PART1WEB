import { useParams, useNavigate } from "react-router-dom"
import { listaProdutos } from "../../components/listaProdutos"

export default function EditarProduto(){

    const lista = listaProdutos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const produto = proc[0]

   

    return(
        <main>
            <h1>Editando o Produto</h1>
            
        </main>
    )
}