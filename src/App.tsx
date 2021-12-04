import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";

import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');

export function App() {
      //react modal biblioteca
      //quando precisamos que um estado seja controlado por um componente filho passamos umas função
      const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

      //abrir modal
      function handleOpenNewTransactionModal(){
          setIsNewTransactionModalOpen(true)
      };
  
      //fechar modal
      function handleCloseNewTransactionModal(){
          setIsNewTransactionModalOpen(false)
      }

  return (
      <TransactionsProvider >
      
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
