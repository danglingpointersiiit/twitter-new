import React from 'react';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ImageIcon from 'material-ui/svg-icons/image/image';


export default class TweetBox extends React.Component {

    render() {
        return (
            <Paper zDepth={1} style={{
                height: 55,
               
                display: 'inline-block',
              /*  float: 'left',*/
                backgroundColor: '#e8f5fd',
                width: 760,/* marginTop: 10, marginLeft: -250*/
            }}>
                <Avatar src="./mypic.jpg" size="34px" style={{ marginTop: 9, marginLeft: 7,position:'absolute' }} />
                <input style={{float:'left',postion:'absolute',marginLeft: 47,marginTop:6,height:40,width:708}} type="text" placeholder="What's happening?" />
                <input id="myInput" type="file" ref={(ref) => this.myInput = ref} style={{ display: 'none' }} /> 
                <IconButton 
                    iconStyle={{height:45,width:45}}
                    style={{ float: 'right',marginLeft:-45,marginTop:-10,position:'absolute' }} 
                    className="floatingButton"
                    backgroundColor='#293C8E'
                    onClick={(e) => this.myInput.click()}>
                    <ImageIcon color={'#1DA1F2'} viewBox="0 0 40 20" style={{ float: 'right'}}/>
                </IconButton>  
            </Paper>
        );
    }
}