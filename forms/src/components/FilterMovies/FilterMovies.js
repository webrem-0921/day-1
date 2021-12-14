import { useState } from 'react'

function FilterMovies({ filterMovieList }) {

    const [firstLetter, setFirstLetter] = useState('All')

    const handleSelect = e => {
        setFirstLetter(e.target.value)
        console.log('selected', e.target.value)

        filterMovieList(e.target.value)
    }


    return (
        <div className="FilterMovies">

            <form>

                <label>Show movies by first letter:</label>

                <select value={firstLetter} onChange={handleSelect}>
                    <option value="All">All</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>

            </form>
        </div >
    );
}

export default FilterMovies;
