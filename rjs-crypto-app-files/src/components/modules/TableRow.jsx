import React from 'react'
import style from "./TableRow.module.css"
import upImg from "../../assets/chart-up.svg"
import downImg from "../../assets/chart-down.svg"

function TableRow({ coin, setModalOn, setModalCoin, }) {
  const { id, name, image, symbol, current_price, price_change_percentage_24h, total_volume } = coin
  const modalHandler = () => {
    setModalOn(true)
    setModalCoin(coin)
  }
  return (

    <tr >

      <td><div onClick={modalHandler}><img src={image} className={style.symbol} /><span>{symbol}</span></div></td>
      <td>{name}</td>
      <td>{current_price.toLocaleString()}</td>
      <td>{price_change_percentage_24h.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td><img className={style.chart} src={price_change_percentage_24h > 0 ? upImg : downImg} alt={name} /></td>
    </tr>
  )
}

export default TableRow