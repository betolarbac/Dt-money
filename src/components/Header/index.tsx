import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

//função para controlar um estado do componente pai App
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

 return (
     <Container>
         <Content>
            <img src={logoImg} alt="cr money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>

        </ Content>
     </Container>
 )

}