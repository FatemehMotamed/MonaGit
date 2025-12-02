import React, { useState, useEffect } from 'react'
import styles from './Table.module.css'
import { getChartUrl } from '../../service/cryptoApi'
import { convertData } from '../../service/ConvertData'
// import ResponsiveContainer
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({ hiddenFunction, id }) {
    // this is prices
    const [type, setType] = useState('prices')
    const [chart, setChart] = useState([])
    useEffect(() => {
        const getChart = async () => {
            try {
                const res = await fetch(getChartUrl(id))
                const data = await res.json()
                const myChart = convertData(data, type)
                console.log('data:', data)
                console.log('data:', myChart)
                setChart(myChart)
            } catch (error) {
                console.log(error.message)
            }
        }
        getChart()

    }, [])

    return (
        <>
            <button onClick={hiddenFunction}>X</button>


        {/* modal box and chart box added in css module */}
            <div className={styles.modalBox}>


                {chart.length > 0 ? (
                    <div className={styles.chartBox}>
                        {/* set width and height */}
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={500}
                                height={300}
                                data={chart}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />

                                {/* set datakey */}
                                <Line type="monotone" dataKey={type} stroke="#8884d8" activeDot={{ r: 8 }} />
                                 {/* set datakey */}
                                <YAxis dataKey={type} domain={["auto", "auto"]} />
                                 {/* set datakey */}
                                <XAxis dataKey="date" />
                                <Legend />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <p>Loading chart...</p>
                )}

            </div>
        </>
    )
}

export default Chart