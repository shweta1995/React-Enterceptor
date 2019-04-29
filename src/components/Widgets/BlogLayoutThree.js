/**
 * Blog Layout Three
 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import IconButton from 'material-ui/IconButton';
import MoreHorizIcon from 'material-ui-icons/MoreHoriz';

const styles = {
    media: {
        height: 520,
        paddingTop: '56.25%', // 16:9
    },
};

const BlogLayoutThree = ({ classes }) => (
    <Card className="rounded mb-30 text-white blog-layout-three position-relative">
        <CardMedia
            className={classes.media}
            image={require('../../assets/img/post-1.jpg')}
            title="Contemplative Reptile"
        />
        <div className="position-absolute blog-overlay">
            <div className="overlay-content d-flex align-items-end">
                <div className="w-100">
                    <CardContent className="card-content">
                        <div className="blog-title">
                            <h3 className="font-weight-bold">5 Text editor that are free</h3>
                            <span className="fs-12">By: Admin, 3 Days Ago</span>
                        </div>
                    </CardContent>
                    <CardActions className="d-flex justify-content-between border-top py-0">
                        <div>
                            <IconButton aria-label="Share" className="text-white">
                                <ShareIcon />
                            </IconButton>
                            <IconButton aria-label="Add to favorites" className="text-white">
                                <FavoriteIcon />
                            </IconButton>
                        </div>
                        <IconButton aria-label="Show more" className="text-white">
                            <MoreHorizIcon />
                        </IconButton>
                    </CardActions>
                </div>
            </div>
        </div>
    </Card>
);

export default withStyles(styles)(BlogLayoutThree);