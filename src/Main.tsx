import React, { Component } from 'react'
import { Routes, Route, NavLink, HashRouter } from 'react-router-dom'

// Pages
import PokemonList from './Pages/PokemonList'
import PokemonDetail from './Pages/PokemonDetail'
import MyPokemonList from './Pages/MyPokemonList'
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className='title'>Pokemon</h1>
          <ul className='header'>
            <li><NavLink to='/'>Finding Pokemon</NavLink></li>
            <li><NavLink to='/pokemon-list'>My Pokemon List</NavLink></li>
          </ul>
          <div className='content'>
            <Routes>
              <Route path='/' element={<PokemonList />}/>
              <Route path='/pokemon-detail' element={<PokemonDetail />}>
                <Route path=":pokemon" element={<PokemonDetail />} />
              </Route>
              <Route path='/pokemon-list' element={<MyPokemonList />}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;