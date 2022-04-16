function Search({handleFilter}) {
    return ( 
        
        <input
            onChange={e => handleFilter(e.target.value)}
        />
    );
}

export default Search;