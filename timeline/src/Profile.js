import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
const avatarStyle={
   float:'left',
   position:'absolute',
    marginTop:80,
    marginLeft:5,
    padding:3,
    boxShadow: 'inset 0 0 0 12px white'
}
const titleStyle={
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:20
}
const subtitleStyle={
    fontSize: 15,
    paddingLeft:20
}
const textStyle1 = {
    fontSize: 15,
    textAlign: 'left',
    paddingLeft: 18,
    color: "#1da1f2",
    fontWeight: 550,
    cursor: 'pointer'
}


const textStyle2 = {
    fontSize: 12,
    textAlign: 'left',
    paddingLeft: 18,
    color: "#78889c"
}

const Profile = () => (
    <div>
    <Card style={{ width: '280px',height:'218px', /*marginLeft: '190px', marginTop: '10px',*/}}>
        <img src="./image.jpg" alt="none" width="280px" height="100px" style={{  position: 'absolute'}} />
        <Avatar src="./mypic.jpg" size='68px' style={avatarStyle} />
        <div style={{paddingTop:90}}>
        <CardHeader
            style={{marginLeft:48}}
            title={<a><nobr>Soumya Rn. Mohanty</nobr></a>}
            subtitle={<span>@<a>SoumyaRnMohanty</a></span>}
            titleStyle={titleStyle}
            subtitleStyle={subtitleStyle}/>
            
    

        <span style={{ position:'absolute',color: '#657786', fontSize: 13, fontWeight:'bold',paddingLeft:15 }}>
                    <a className="changeColor">Tweets</a> &nbsp;&nbsp;&nbsp; <a className="changeColor">Following</a> &nbsp;&nbsp;&nbsp; <a className="changeColor">Followers</a>
        </span>
        <br/>
                <span style={{ position: 'absolute', color: '#1da1f2', marginBottom: '10px'}}>
                    
                    <div style={{marginTop:'0.9rem'}}><span style={{ paddingLeft: 17, cursor: 'pointer', fontSize: 17 }}>50</span> <span style={{ paddingLeft: 38, cursor: 'pointer', fontSize: 17 }}> 408</span> 
                    <span style={{ paddingLeft: 51, cursor: 'pointer', fontSize: 17 }}>10K</span></div>
        </span>
        </div>
    </Card>
    <br /> <br />
        <div >
            <Paper style={{ width: '280px', height: '390px', /*marginLeft: '190px', marginTop: '10px', display: 'inline-block', float: 'left' */}}>
                <Subheader style={{ color: "black", fontFamily: "Helvetica",fontSize:18 }}><b>Trends for you </b>  ·
                <span style={{ color: "#1c94e0", fontSize: 12, cursor: 'pointer' }}> &nbsp;&nbsp;<a>Change</a></span>
                </Subheader>
                <div style={textStyle1}><a>#HPDF</a></div>
                <div style={textStyle2}>12.1K Tweets</div>
                <br />
                <div style={textStyle1}><a>#HasuraCLI</a></div>
                <div style={textStyle2}>15K Tweets</div>
                <br />
                <div style={textStyle1}><a>#earthquake</a></div>
                <div style={textStyle2}>10K Tweets</div>
                <br />
                <div style={textStyle1}><a>#INDvBEL</a></div>
                <div style={textStyle2}>4908 Tweets</div>
                <br />
                <div style={textStyle1}><a>#Virushka</a></div>
                <div style={textStyle2}>9K Tweets</div>
                <br />
                <div style={textStyle1}><a>#MustHaveDevTools</a></div>
                <div style={textStyle2}>14K Tweets</div>
                <br />
                <div style={textStyle1}><a>#FitToFIghtAwards</a></div>
                <div style={textStyle2}>5104 Tweets</div>
                <br />
            </Paper>
        </div>
    </div>
);

export default Profile;