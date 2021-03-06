import React from 'react';
import classes from './original.css';
import PropTypes from 'prop-types';

const BurgerIngridients=(props)=>{
    let ingridients=null;
    switch(props.type){
        case('bread-bottom'):
            ingridients=(<div className={classes.BreadBottom}></div>);
            break;
        case('bread-top'):
            ingridients=(<div className={classes.BreadTop}>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                        </div>
                        );
            break;
        case('meat'):
            ingridients=<div className={classes.Meat}></div>;
            break;
        case('cheese'):
            ingridients=<div className={classes.Cheese}></div>;
            break;
        case('salad'):
            ingridients=<div className={classes.Salad}></div>;
            break;
        case('bacon'):
            ingridients=<div className={classes.Bacon}></div>;
            break;
        default:
            ingridients=null;
    }
    return ingridients;
}

BurgerIngridients.prototype={
    type:PropTypes.string.isRequired
}

export default BurgerIngridients;