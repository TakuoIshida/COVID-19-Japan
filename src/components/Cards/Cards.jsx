import React from 'react';
import { Card, CardContent, Typography, Grid }  from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
// import { Loading } from './../Loading/Loading';

import styles from './Cards.module.css';

const Cards = ({Cardsdata: {description, npatients, nexits, ndeaths  }}) => {
     if(!npatients){
         return <p className={styles.subtitle}> "loading"</p>;
     }
    return (
        <div className={styles.container}>
            <p>{description}</p>
            <Grid container spacing={6} justify="center">
                <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.npatients)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>感染者数</Typography>
                            <Typography variant="h5">
                                <CountUp start ={0} end ={npatients} duration ={2.0} separator =","/>人
                            </Typography>
                    </CardContent>
                </Grid>
            
                 <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.nexits)}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>退院者数</Typography>
                             <Typography variant="h5">
                                  <CountUp start ={0} end = {nexits} duration ={2.0} separator =","/>人
                             </Typography>
                     </CardContent>
                 </Grid>
             </Grid>

             <Grid container spacing={6} justify="center">
                 <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.death)}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>死亡者数</Typography>
                             <Typography variant="h5">
                                 <CountUp start ={0} end = {ndeaths} duration ={2.0} separator =","/>人
                             </Typography>
                     </CardContent>
                 </Grid>

                 <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.death)}>
                     <CardContent>
                         <Typography color="textSecondary" gutterBottom>死亡率</Typography>
                             <Typography variant="h5">
                                 <CountUp start ={0.000} end = {ndeaths/npatients*100} duration ={2.0}/>%
                             </Typography>
                     </CardContent>
                 </Grid>
             </Grid>
         </div> 
    )
}

export default Cards;
