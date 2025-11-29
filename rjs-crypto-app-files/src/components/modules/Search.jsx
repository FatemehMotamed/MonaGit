
import { useState,useEffect } from "react"
import { ColorRing } from 'react-loader-spinner'
import style from "./Search.module.css"
import { getSearchUrl} from "../../services/cryptoApi"

function Search({ setCoinType}) {

  const [searchText, setSearchText] = useState("")
  const [searchList, setSearchList] = useState([])
  const [isSearchLoad, setIsSearchLoad] = useState(false)
  const [searchState, setSearchState] = useState(false)
    
  useEffect(()=>{
    setSearchList([])
    setIsSearchLoad(false)
    if (searchText===""){
      setSearchState(false)
      setIsSearchLoad(false)
      return
    } 
      const controller = new AbortController()
      const searchData = async ()=>{
         await fetch(getSearchUrl(searchText),{signal: controller.signal}).then(
          async (res)=>{
            const data = await res.json()
            if(data.coins) setSearchList(data.coins)
            setSearchList
            // {console.log("Home file++++++",searchList)}
            setIsSearchLoad(true)
          }
        ).catch(
          (error)=>{
            if (!error.name ==="AboartError")
            console.log(error.message)
          setIsSearchLoad(false)
          }
        )
      }
      setIsSearchLoad(false)
      searchData()
      
      return ()=>{
        controller.abort()
        console.log("Im Clean!")
      }
  },[searchText])

    const changeHandler = (event)=>{
        setCoinType(event.target.value)
    }
    const searchHandler = (event)=>{
        setSearchState(true)
        setSearchText(event.target.value)

    }
  return (
    <div className={style.container}>
        <div className={style.searchContainer} >

        <input type="text" onChange={searchHandler} />
        <div className={`${style.result} ${searchState ? style.on : style.off}`}>
            {}
            {/* {console.log("serch file++++++",searchList)} */}

               {!isSearchLoad && <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                 />}

            {
            Array.isArray(searchList) && searchList.length>0  ? 
            searchList.map((coin)=>(<div key={coin.id} className={style.searchBox}><img src={coin.thumb} /><p >{coin.name}</p></div>) ) : "No Math Found"
            
            }
        </div>
        </div>
        <select onChange={changeHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="JPY">JPY</option>
        </select>
    </div>
  )
}

export default Search