import React, { Component } from 'react';
import styles from './Loading.module.css';

class Loading  extends Component {

    render () {
        return <div className= {styles.Loading2}>
                <p className={styles.rect1}></p>
                <p className={styles.rect2}></p>
                <p className={styles.rect3}></p>
                <p className={styles.rect4}></p>
                <p className={styles.rect5}></p>
            </div>;
    }
    
}

export default Loading;