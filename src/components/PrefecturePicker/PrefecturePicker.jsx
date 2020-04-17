import React, {useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './PrefecturePicker.module.css';

import { fetchPrefecture } from '../../api';

// セレクトボタンで県名を変更時に、ステート値としてPrefecture,setPrefectureを設定(hooks)
const PrefecturePicker = ({ handleprefectureChange }) => {
    const [name_jp, setPrefecture] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setPrefecture(await fetchPrefecture());
        }
        fetchAPI();
    },[]);

    return ( 
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleprefectureChange(e.target.value)}>
                <option value=""> 全都道府県 </option>
                {/* handleprefectureChangeのvalue→→usestate→name_jp→Prefecture.mapで配列のvalueで渡し、valueを埋め込む */}
                {name_jp.map((name_jp, i) => <option key={i} value={name_jp}>{name_jp}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default PrefecturePicker;
