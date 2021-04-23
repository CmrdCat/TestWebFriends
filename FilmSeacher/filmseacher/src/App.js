import React, {useState} from 'react'
import './App.css';
import Header from'./components/header/'
import Content from'./components/content/'


function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Header setSearch={setSearch}/>
      <Content search={search}/>
    </div>
  );
}

export default App;
