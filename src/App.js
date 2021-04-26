import React from 'react';

import { Cards, Chart }  from './components';
// import {Cards, Chart, PrefecturePicker}  from './components';
import styles from './App.module.css';
import { fetchTotal } from './api';

import covid from './img/covid.png';

class App extends React.Component {
    state = {
        Cardsdata: {},
        Chartdata: {},
        // name_jp: '',
    }
    // Componentがマウント（呼び込まれたら）apiのデータ取得を実行し、Cardsdataへ入れ込む（非同期処理）
    async componentDidMount() {
        const fetchedData = await fetchTotal();
        
        this.setState({ Cardsdata: fetchedData});
        console.log({Cardsdata: fetchedData});
    }

    // 設定している県名が変更したとき、県の情報を取得する（非同期処理）
    // handleprefectureChange = async (name_jp) => {
    //     const fetchedData = await fetchData(name_jp);
        
    //     this.setState({ data: fetchedData, name_jp: name_jp });
    // }
    render() {
        const { Cardsdata, Chartdata} = this.state;
        
        // const { data, name_jp } = this.state;
        
        // top画像、全県or各県のデータ値、セレクトボタン、チャートの順で挿入
        return (
            <div className={styles.container}>
                <p> { process.env.REACT_APP_TEST }</p>
                <img className={ styles.image } src={ covid } alt="Covid-19" />
                <Cards Cardsdata={ Cardsdata }/>
                {/* <PrefecturePicker handleprefectureChange={this.handleprefectureChange}/> */}
                <Chart Chartdata={ Chartdata }/>
                {/* <Chart data={ data } name_jp={ name_jp }/> */}
            </div>
        )
    }
}

export default App;