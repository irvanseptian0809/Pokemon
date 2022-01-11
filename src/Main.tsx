import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'

// Pages
import PokemonList from './Pages/PokemonList'
import PokemonDetail from './Pages/PokemonDetail'
import MyPokemonList from './Pages/MyPokemonList'
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className='title'>Single Page Application</h1>
          <ul className='header'>
            <li><NavLink to='/'>My Pokemon List</NavLink></li>
            <li><NavLink to='/pokemon-detail'>Pokemon Detail</NavLink></li>
            <li><NavLink to='/pokemon-list'>Pokemon List</NavLink></li>
          </ul>
          <div className='content'>
            <Route path='/' element={MyPokemonList}/>
            <Route path='/pokemon-detail' element={PokemonDetail}/>
            <Route path='/pokemon-list' element={PokemonList}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;