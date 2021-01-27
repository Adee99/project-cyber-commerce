import React from 'react'

import { Card, CardMedia, CardContent, CardAction, Typography, IconButton, CardActions } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles'

const Product = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={className.root}>
            
            <CardMedia className={className.media} image = '' title = {product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant="h5">
                        {product.price}
                    </Typography>

                    <Typography variant="h2" color="textSecondary"> 
                        {product.description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product