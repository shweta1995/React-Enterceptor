/**
 * Blog Layout Two
 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import IconButton from 'material-ui/IconButton';
import MoreHorizIcon from 'material-ui-icons/MoreHoriz';

const styles = {
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

const BlogLayoutTwo = ({ classes }) => (
    <Card className="rounded mb-30">
        <CardContent>
            <h3 className="font-weight-bold">5 Text editor that are free</h3>
            <span className="text-muted fs-12">By: Admin, 3 Days Ago</span>
        </CardContent>
        <CardMedia
            className={classes.media}
            image={require('../../assets/img/post-1.jpg')}
            title="Contemplative Reptile"
        />
        <CardContent>
            <p className="mb-0">
                Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore, similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.
            </p>
        </CardContent>
        <CardActions className="d-flex justify-content-between border-top py-0">
            <div>
                <IconButton aria-label="Share" className="text-success">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="Add to favorites" className="text-danger">
                    <FavoriteIcon />
                </IconButton>
            </div>
            <IconButton
                aria-label="Show more"
            >
                <MoreHorizIcon />
            </IconButton>
        </CardActions>
    </Card>
);

export default withStyles(styles)(BlogLayoutTwo);