import style from './Modal.module.css'
import { LineChart, Line, CartesianGrid, ResponsiveContainer, YAxis, XAxis, Legend, Tooltip } from 'recharts'
function Modal({ modalOn, setModalOn, chartType, setChartType, chartData, modalCoin }) {
    return (

        <div>

            <div className={modalOn ? style.modalBox : style.modalOff}>

                <span onClick={() => setModalOn(false)} >x</span>
                <button onClick={() => setChartType("prices")}>Prices</button>
                <button onClick={() => setChartType("market_caps")}>Market Cap</button>
                <button onClick={() => setChartType("total_volumes")}>Total Volume</button>
                <br />
                {modalCoin != null ? (
                    <div className={style.coinInfo}>
                        <img src={modalCoin.image} />
                        <p>{modalCoin.name}</p>
                    </div>)
                    : ""}
                {
                    modalOn &&

                    <div className={style.chartBox}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={chartData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />

                                <Line type="monotone" dataKey={chartType} stroke="#8884d8" activeDot={{ r: 8 }} />
                                <YAxis dataKey={chartType} domain={["auto", "auto"]} />
                                <XAxis dataKey="date" />
                                <Legend />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                }

                {console.log("***********", chartData, chartType)}

            </div>


        </div>
    )
}

export default Modal