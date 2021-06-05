import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onFormSubmit(term);
    }

    return(
        <div className='ui segment search-bar'>
            <form onSubmit={onSubmit} className='ui form'>
                <div className='field'>
                    <label>Search for a video</label>
                    <input 
                        value={term} 
                        type='text' 
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;