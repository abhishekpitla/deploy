import React from 'react' 
import {Card , CardContent , Typography , Grid} from '@material-ui/core' 
import Countup from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames'
const Cards = ({data : {confirmed,recovered,deaths,lastupdate} }) => { 

    if(!confirmed){
            return "loading" ; 
    }
    
    return (
        <div className = {styles.container}>
            <Grid container spacing = {3} justify = "center">
            
            <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card , styles.infected)}> 
            <CardContent>
            
            <Typography color = "textSecondary" gutterBottom>
            Infected 
            </Typography> 
            
            <Typography variant = 'h5'>
                <Countup 
                    start = {0}  
                    end = {confirmed.value} 
                    duration = {0.5} 
                    seperator = ","
                ></Countup>
            </Typography>
            
            <Typography variant = 'body2'>Number of active cases</Typography>
            
            </CardContent>
            
            </Grid>
            <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card , styles.recovered)}> 
            <CardContent>
            
            <Typography color = "textSecondary" gutterBottom>
            recovered
            </Typography> 
            
            <Typography variant = 'h5'>
                <Countup 
                    start = {0}  
                    end = {recovered.value} 
                    duration = {0.5} 
                    seperator = ","
                ></Countup>
            </Typography>
            
            
            <Typography variant = 'body2'>Number of recoered cases</Typography>
            </CardContent>
            </Grid>
            
            
            <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card , styles.deaths)}> 
            <CardContent>
            <Typography color = "textSecondary" gutterBottom>
            deaths
            </Typography> 
            <Typography variant = 'h5'>
            <Countup 
                    start = {0}  
                    end = {deaths.value} 
                    duration = {0.5} 
                    seperator = ","
                ></Countup> 
            </Typography>
            
            <Typography variant = 'body2'>Number of deaths cases</Typography>
            </CardContent>
            </Grid>
            </Grid>

        </div>
    )

}
export default Cards ; 