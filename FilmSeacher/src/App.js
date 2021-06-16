import React, {useState} from 'react'
import './App.css';
import Header from'./components/Header/Header'
import Content from'./components/Content/Content'
import Modal from './components/Modal/Modal';


function App() {
  const [search, setSearch] = useState('')
  const [ModalCardId, setModalCardId] = useState('')
  console.log('ModalCardId ',ModalCardId)

  return (
    <div className="App">
      <Header setSearch={setSearch}/>
      <Content search={search} setModalCardId={setModalCardId}/>
      {
        ModalCardId ? <Modal ModalCardId={ModalCardId} setModalCardId={setModalCardId} /> : null
      }
    </div>
  );
}

export default App;
