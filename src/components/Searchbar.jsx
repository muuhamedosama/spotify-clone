import React, {useState} from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  
  return (
    <form 
      className='p-2 text-gray-400 focus-within:text-gray-600'
      onSubmit={(e)=>{
        e.preventDefault()
        searchTerm && navigate(`/search/${searchTerm}`)
        setSearchTerm('')
      }}
    >
      <div className="flex flex-row justify-start items-center">
        <button type='submit'>
          <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        </button>
        <input
          name="search-field"
          autoComplete="off"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Searchbar
