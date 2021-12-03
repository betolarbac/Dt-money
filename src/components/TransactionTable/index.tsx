import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionTable() {
useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
},[]);

    //tabelas 
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> desenvolvimento</td>
                        <td  className="deposit">R$1000</td>
                        <td>Desenvolvimento</td>
                        <td>02/12/2021</td>
                    </tr>

                    <tr>
                        <td>desenvolvimento</td>
                        <td className="withdraw">-R$500</td>
                        <td>Desenvolvimento</td>
                        <td>02/12/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}