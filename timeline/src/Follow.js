import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import People from 'material-ui/svg-icons/social/people-outline';
import IconButton from 'material-ui/IconButton';
import Footer from './Footer';

const style = {
    height: 275,
    width: 250,
   // marginLeft:-260,
    textAlign: 'center',
    
   
}

// const button = { 
//     float:'left',
//     marginLeft:'80px',
//     marginTop:'-30px',
//     borderRadius: 20, 
//     borderStyle: 'solid', 
//     borderWidth: '1px', 
//     borderColor: '#1da1f2', 
//     color: '#1da1f2', 
//     height: '30px',
//    }
const Follow = () => (
    <div>
    <Card style={style}>   
        <div style={{  paddingLeft: 20, fontWeight: 'bold', textAlign: 'left', fontSize: '13px' }}><br /> Who to follow <span style={{ fontSize: '10px', fontWeight: 'normal', color: '#1c94e0' }}> · <a>Refresh</a> · <a>View all</a></span> </div>
        <CardHeader
            title=
            {<div><h5 style={{ marginTop: '3px', fontFamily: "Helvetica", textAlign: 'left', display: 'inline-block', float: 'left' }}>
            Narendra Modi</h5>
            <span style={{ position: 'absolute', marginTop: '5px', fontSize: '11px', display: 'inline-block', textAlign: 'left', paddingLeft: 4, color: '#657786' }}>
            <a>@narendramodi</a></span>
            </div>}
            avatar={<Avatar src="./follow1.jpg" style={{float:'left',marginBottom:'13px'}} />}
        />
        
        

    </Card>
    <br />
    <Footer />
   </div>
);

export  default Follow;
