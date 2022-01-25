import React, { useState, useEffect } from 'react';
import * as PokemonServices from './services/Pokemon';
import { Pagination } from 'antd';
import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemon, setPokemon] = useState({});
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(20);

    const perPage = 20;

    const handleList = async() => {
        try{
            const data = await PokemonServices.fetch();
            setPokemonList(data);
        } catch(err) {
            alert(err);
        }
    }

    const handleGetById = async() => {
        try{
            const data = await PokemonServices.fetchById(id);
            setPokemon(data);
        } catch(err) {
            alert(err);
        }
    }

    const handleGetByName = async() => {
        try{
            const data = await PokemonServices.fetchByName(name);
            setPokemon(data);
        } catch(err) {
            alert(err);
        }
    }

    const handleChange = value => {
        setMinValue((value - 1) * perPage);
        setMaxValue(value * perPage);
    };

    const Pokemons = () => pokemonList.slice(minValue, maxValue).map(poke => (
        <PokemonCard name={poke.name} />
        
    ));

    useEffect(() => {
        handleList();
    }, []);

  return (
    <div className="App">
        <input type='number' value={id} onChange={e => setId(e.target.value)} />
        <button type='submit' onClick={handleGetById}>Search by ID</button>

        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button type='submit' onClick={handleGetByName}>Search by name</button>

        <div className='container'>
        
        {!pokemon.name ? 
            <div className='pokemon-container'>
                <div className='pokemon-cards'>
                    <Pokemons />
                </div>
                <div>
                    <Pagination 
                        defaultCurrent={1}  
                        defaultPageSize={perPage}
                        onChange={handleChange}
                        total={100} 
                    /> 
                </div>
            </div> 
            : 
                <div className='pokemon-cards'>
                    <PokemonCard name={pokemon.name} />
                </div>
        }

        </div>
    </div>
  );
}

export default App;
