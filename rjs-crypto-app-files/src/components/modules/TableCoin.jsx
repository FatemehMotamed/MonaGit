
import TableRow from "./TableRow"
import { Blocks } from 'react-loader-spinner'
import style from './TableCoin.module.css'
import Pagination from "./Pagination"
import { getCoinsUrl } from "../../services/cryptoApi"
import { useEffect, useState } from "react"


function TableCoin({ setModalOn, setModalCoin, coinType }) {
  const [coinData, setCoinData] = useState([])
  const [page, setPage] = useState(1)
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    const getCoin = async () => {
      setIsLoad(false)
      await fetch(getCoinsUrl(page, coinType)).then(async (res) => {
        const data = await res.json()
        // console.log(data)
        setCoinData(data)
        setIsLoad(true)
      }).catch((error) => {
        console.log(error)
        setCoinData([])
      })
    }
    getCoin()
  }, [page, coinType])

  return (
    isLoad ? (
      <div className={style.container}>

        <table className={style.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>

            </tr>

          </thead>
          <tbody>

            {coinData &&
              coinData.map((coin) => (
                <TableRow key={coin.id} coin={coin} setModalOn={setModalOn} setModalCoin={setModalCoin} />
              )
              )
            }
          </tbody>
        </table>
        <Pagination page={page} setPage={setPage} />

      </ div>
    )
      :
      (<Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />)

  )
}

export default TableCoin