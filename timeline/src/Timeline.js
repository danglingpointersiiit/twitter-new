import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import More from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Tweet from './Tweet';
import TweetBox from './TweetBox';



const Timeline = () => (
    <div >
        <TweetBox  />
        <br /><br />
        <Tweet />
        
    </div>
);

export default Timeline;