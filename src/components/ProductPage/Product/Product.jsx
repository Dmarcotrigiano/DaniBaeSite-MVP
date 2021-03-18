import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "./Modal";
import useModal from "./useModal";
import useStyles from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
export const ActiveItem = React.createContext(null);

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  // const handleClick=(event)=> setActiveItem(product) &&console.log(event);
  const handleAddToCart = () => onAddToCart(product.id, 1);
  const { open, openModal, closeModal } = useModal();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />

      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="p" />
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
        <IconButton onClick={openModal}>
          <ZoomInIcon />
        </IconButton>

        {open ? (
          <Modal
            render={() => (
              <Card className={classes.root}>
                <CardContent>
                  <CardMedia
                    className={classes.mediaExpand}
                    image={product.media.source}
                    title={product.name}
                  />
                  <div className={classes.cardContentExpand}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      ${product.price.formatted}
                    </Typography>
                  </div>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  />
                  <IconButton
                    aria-label="Add to Cart"
                    onClick={handleAddToCart}
                  >
                    <AddShoppingCart />
                  </IconButton>
                  <IconButton onClick={closeModal}>
                    <CloseIcon />
                  </IconButton>
                </CardContent>
              </Card>
            )}
          />
        ) : null}
      </CardActions>
    </Card>
  );
};

export default Product;
