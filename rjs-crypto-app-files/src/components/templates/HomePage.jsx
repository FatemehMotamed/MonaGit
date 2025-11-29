import { useEffect, useState } from "react"
import TableCoin from "../modules/TableCoin"
import { getChartUrl } from "../../services/cryptoApi"
import Search from "../modules/Search"
import Modal from "../modules/Modal"
import { convertData } from "../../helpers/convertData"

function HomePage() {

  const [coinType, setCoinType] = useState("usd")
  const [modalOn, setModalOn] = useState(false)
  const [modalCoin, setModalCoin] = useState(null)
  const [chartType, setChartType] = useState("prices")
  const [chartData, setChartData] = useState([])
  const [chartCoverted, setChartCoverted] = useState([])
  useEffect(()=>{
    if (modalCoin === null) return
    const getChart = async () =>{
      await fetch(getChartUrl(modalCoin.id, coinType)).then(async (res)=>{
      const data = await res.json()
      setChartData(data)
      }).catch((error)=>{
        console.log(error.message)
      })

    }

    getChart()

  },[modalCoin])

  useEffect(()=>{
    if (modalCoin === null) return
    const newData = convertData(chartType ,chartData)

    console.log(newData)
    
    setChartCoverted(newData,"***********")
    // setChartCoverted({...newData,coin: coinData})
    // console.log("++++++++++++++",newData)

  },[chartType,chartData])



  return (
    <>
      <Search setCoinType={setCoinType}  />
      <TableCoin coinType={coinType}  setModalOn={setModalOn} setModalCoin={setModalCoin} />
    
      <Modal modalOn={modalOn} setModalOn={setModalOn} chartType={chartType} setChartType={setChartType} chartData={chartCoverted} modalCoin={modalCoin} />
    </>
  )
}

export default HomePage