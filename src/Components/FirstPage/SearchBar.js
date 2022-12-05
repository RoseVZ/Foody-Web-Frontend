import * as react from 'react';

export default function SearchBar(){
    return(
        <div>
            <form action="#">
                <input type="text"
                    placeholder=" Search Courses"
                    name="search" />
                <button>Search</button>
            </form>
        </div>
    )
}