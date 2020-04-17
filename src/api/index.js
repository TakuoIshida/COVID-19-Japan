import axios from 'axios';

const Charturl = 'https://covid19-japan-web-api.now.sh/api/v1/total?history=true';
const Cardsurl = 'https://www.stopcovid19.jp/data/covid19japan.json';

// APIから全国の最新データを取得する→Cards
export const fetchTotal = async () => {
    
    try {
       const  { data: {description, lastUpdate, npatients, nexits, ndeaths }}= await axios(Cardsurl);
       console.log({ description, lastUpdate, npatients, nexits, ndeaths  });
       return {description, lastUpdate, npatients, nexits, ndeaths };
        
    } catch(error) {
        console.log(error);
    }
}
// APIから全都道府県の情報date, positive, discharge, deathを取得する→Chart、Cardの表示に使用
export const fetchDailyData = async () =>{
    try {
        const { data } = await axios.get(Charturl);

        const modifiedData = data.map((DailyData) => ({
            date: DailyData.date,
            positive: DailyData.positive,
            discharge: DailyData.discharge,
            death: DailyData.death,
            // 死亡率を計算
            deathRate: DailyData.death / DailyData.positive * 100
        }));
        console.log(modifiedData);
        return modifiedData
    } catch(error) {
        console.log(error);
    }

}

// 各県の名前を配列で取得（async非同期処理）
// export const fetchPrefecture = async () => {
//     try {
//         const {data: {prefectures}} = await axios.get(`${url}/area`);
//         console.log({data: {prefectures}});
//         return prefectures.map((prefecture) => prefecture.name_jp);
//     } catch(error) {
//         console.log(error);
//     }
// }