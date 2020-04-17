import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async() => {
            setDailyData(await fetchDailyData());
    }

    fetchAPI();
    },[]);

    const lineChart = (
        console.log(dailyData[0]),
        dailyData[0]
        ? (
        <Line
        data={{
             labels: dailyData.map(({ date })=> date),
             datasets: [{
                data: dailyData.map(({ positive }) => positive),
                label: '感染者数',
                borderColor: '#3333ff',
                fill: true,
             }, {
                data: dailyData.map(({ death }) => death),
                label: '死亡者数',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
             }, {
                data: dailyData.map(({ discharge }) => discharge),
                label: '退院者数',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
             }],
         }}
        />) :null
    );

    // const barChart = (
    //     lastUpdate
    //       ? (
    //         <Bar
    //         data={{
    //             labels: ['感染者数', '退院者数', '死亡者数'],
    //             datasets: [{
    //                 label: 'People',
    //                 backgroundColor: [
    //                  'rgba(0, 0, 255, 0.5)',
    //                  'rgba(0, 255, 0, 0.5)',
    //                  'rgba(255, 0, 0, 0.5)',
    //                 ],
    //                 data:[ncurrentpatients, nexits, ndeaths]
    //             }],
    //         }}
    //         options={{
    //             legend: { display: false },
    //             title: { display: true, text: `Current in ${prefecture}`},
    //         }}
    //         /> 
    //       ) : null
    // )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;
