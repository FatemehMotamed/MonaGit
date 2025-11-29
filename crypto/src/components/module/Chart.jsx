import React, { useState, useEffect } from 'react'
import styles from './Table.module.css'
import { getChartUrl } from '../../service/cryptoApi'
import { convertData } from '../../service/ConvertData'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Chart({ hiddenFunction, id }) {
    const [type, setType] = useState('price')
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
            <button className={styles.closeButton} onClick={hiddenFunction}>X</button>
            <section className={styles.chart}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                        responsive
                        data={chart}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis width="auto" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </section>
        </>
    )
}

export default Chart