import {useState, useEffect} from 'react';
import './App.css';
import Search from './components/search/search';
import ShowData from './components/showData/showData';

function App() {

  const [data, setData] = useState([])
  const [showData, setShowData] = useState([])

  useEffect(() => {

    let movieData=[]
    const fetchData = async () => {
      let response = await fetch('https://hexanovate-1oc3v5uf6-thephenom1708.vercel.app/api/movies')
      movieData = await response.json()
      setData(movieData)
      setShowData(movieData)
    }

    fetchData()
    
  }, [])
  

  const handleFilter = (e) => {
    console.log(e)

    let x = data.filter(item => {

      if(item.title.includes(e))
        return true
      else
        return false
    })

    setShowData(x)
  }
  
  return (
    <div className="App">
      <Search handleFilter={handleFilter}  />
      <ShowData data={showData}/>
    </div>
  );
}

export default App;
