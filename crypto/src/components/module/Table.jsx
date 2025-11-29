import React, { useEffect, useState } from 'react'
import styles from './Table.module.css'
import MainTable from './MainTable'
import '../../GlobalStyles.css'
import Chart from './Chart'
import Search from './Search'
import PagInation from './PagInation'
import {createCoinURL} from '../../service/cryptoApi'
function Table() {
      const [userType, setUserType] = useState('')
    
    const [page , setPage] = useState(1)
    const [coins, setCoins] = useState([])
    const [clickCoin, setclickCoin] = useState([])
    const [closeButton, setcloseButton] = useState(false)
    const [errors, setErrors] = useState(false)
    useEffect(() => {
        const controller = new AbortController()
        const getData = async () => {
            try {
                const res = await fetch(createCoinURL(page),
                    { signal: controller.signal }
                )
                if (!res.ok) throw new Error(res.status)
                const data = await res.json()
                setCoins(data)
                console.log(res)
                console.log(data)
            } catch (error) {
                if (error.name !== 'AbortError' && !controller.signal.eborted) {
                    console.log(error.message)
                    setErrors(error.message)
                }
            }
        }
        getData()

        return () => {
            controller.abort()
        }

    }, [page])

    const showChart = (id) => {
        const chartCoin = coins.filter(item => item.id == id)
        setclickCoin(chartCoin)
        setcloseButton(true)
    }

    const hiddenFunction = () => {
        setcloseButton(false)
        setclickCoin([])
    }

    return (
        <>
            <div className={styles.search}>
                <Search coins={coins} userType={userType} setUserType={setUserType}/>
            </div>

            <div className={styles.forChart}>
                <table className='container'>
                    <caption>Coins Table</caption>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h</th>
                            <th>Total Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coins.map(item => (<MainTable key={item.id} name={item.name} price={item.current_price} img={item.image} symbol={item.symbol} ath={item.ath} total={item.total_supply} showChart={showChart} id={item.id} />))
                        }
                    </tbody>
                </table>
                <article className={`${styles.chartPage} ${closeButton ? styles.chartVisible : styles.chartHidden}`}>
                    {
                        clickCoin.map(item => <Chart key={item.id} id={item.id} img={item.image} name={item.name} hiddenFunction={hiddenFunction} />)
                    }
                </article>
            </div>
            <section className={styles.pagInation}>
                <header>Page&nbsp;:</header>
               <PagInation page={page} setPage={setPage}/> 
            </section>
        </>
    )
}

export default Table