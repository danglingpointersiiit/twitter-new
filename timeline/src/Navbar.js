import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Home from 'material-ui/svg-icons/action/home';
import Notifications from 'material-ui/svg-icons/social/notifications-none';
import Messages from 'material-ui/svg-icons/communication/mail-outline';
import SearchBar from 'material-ui-search-bar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Search from './Search';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const style= {
    height:50,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    margin:'auto',
    marginLeft:1,
    overlay: 'hidden',
    position:'fixed',
    width:'100%',
    zIndex: 20
  
}

const button={
    borderRadius: '22px',
    fontWeight: 800,
    padding: '8px',
    border: 'white solid 0px',
    backgroundColor: '#4ab3f4',
    color: 'white',
    position: 'absolute',
    marginLeft: 230,
  
    height:28,
    width:60,
    fontSize:'11px',
    cursor:'pointer'
}


const imgStyle={
    width:20,
    height:20,
    position: 'absolute',
    
}

const hintStyle={
    color: '#6e7f8d',
    paddingBottom:13,
    paddingLeft:8,
    fontSize:12
}

const Paperstyle={
   marginLeft: 480,
    width : 180,
    height: 20,
    borderRadius: 20,
    backgroundColor:'#f5f8fa'
}
const inputStyle={
    position:'absolute',
    width: 170,
    height: 20,
    paddingLeft: 9,
    fontSize:12,
    marginTop:1

}
const imgStyle1 = {
    width: 19,
    height: 18,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 637,
    marginTop: 1
}

const avatar={
    borderRadius: '50%',
     width: 26, 
     height: 26,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 670,
    marginTop: -3
}



export default class Navbar extends React.Component {

    render() {
        return (
            <Paper style={style} zDepth={1} >
            <Toolbar style={style}>
                <ToolbarGroup firstChild={true} >
                        {/*<IconButton iconStyle={{height:35,width:40}} style={{position:'absolute',marginLeft:240,width:20}} className="floatingButton"
                            backgroundColor='#66757f'>
                            <Home color={"#1da1f2"}/>
                        </IconButton>
                        <span style={{
                            fontSize: 18,
                            textAlign: 'center',
                            paddingLeft: 300,
                            paddingTop:12,
                            color: "#1da1f2",
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}><a className="changeColor">Home</a>
                        </span>
                        
                        <IconButton iconStyle={{ height: 35, width: 40 }} style={{ position: 'absolute', marginLeft: 351, width: 20 }} 
                            backgroundColor='#66757f' >
                            <Notifications hoverColor={'#1da1f2'} color={'#66757f'} />
                        </IconButton>
                        <span style={{
                            fontSize: 18,
                            textAlign: 'center',
                            paddingTop: 12,
                            color: '#66757f',
                            paddingLeft: 55,
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}><a className="changeColor">Notifications</a>
                        </span>

                        <IconButton iconStyle={{ height: 35, width: 40 }} style={{ position: 'absolute', marginLeft: 520, width: 20 }} className="floatingButton"
                            backgroundColor='#66757f'>
                            <Messages hoverColor={'#1da1f2'} color={'#66757f'} />
                        </IconButton>
                        <span style={{
                            fontSize: 18,
                            textAlign: 'center',
                            paddingTop: 12,
                            color: '#66757f',
                            paddingLeft: 60,
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}><a className="changeColor">Messages</a>
                    </span>*/}
                    
                        <div style={{ position: 'absolute' }}>
                    <Tabs 
                            inkBarStyle={{ backgroundColor: '#1da1f2', width: 120}} 
                            initialSelectedIndex={1}
                           
                            >
                            <Tab disabled={true} style={{ backgroundColor: 'white', width: 120 }}  />
                            <Tab icon={<FlatButton hoverColor={'white'}
                                label="Home" labelStyle={{color: '#1da1f2', fontWeight: 900 }}
                                icon={<i style={{ color: '#1da1f2' }} class="material-icons">home</i>} />}
                                style={{ backgroundColor:'white',width: 120} } />
                            <Tab icon={<FlatButton hoverColor={'white'}
                                label="Moments" labelStyle={{ color: '#66757f', fontWeight: 900 }}
                                icon={<i style={{ color: '#66757f' }} class="material-icons">flash_on</i>} />}
                                style={{ backgroundColor: 'white', width: 150 }} />
                            <Tab icon={<FlatButton hoverColor={'white'}
                                label="Notifications" labelStyle={{ color: '#66757f', fontWeight: 900 }}
                                icon={<i style={{ color: '#66757f' }} class="material-icons">notifications_none</i>} />}
                                style={{ backgroundColor: 'white', width: 150 }} />
                            <Tab icon={<FlatButton hoverColor={'white'}
                                label="Messages" labelStyle={{ color: '#66757f', fontWeight: 900 }}
                                icon={<i style={{ color: '#66757f' }} class="material-icons">mail_outline</i>} />}
                                style={{ backgroundColor: 'white', width: 160 }} />
                                <Tab disabled={true} style={{ backgroundColor: 'white', width: 160 }} />

                                <Tab disabled={true} style={{ backgroundColor: 'white', width: 90 }} />
                                <Tab disabled={true} icon={<img height="20" width="20" src={"./twitter.png"} />} 
                                    style={{ backgroundColor: 'white', position : 'absolute' , marginLeft : '900px'}}/>

                        </Tabs>
                        </div>
                </ToolbarGroup>
                <ToolbarGroup >
                <div>       
                 
                </div>
                </ToolbarGroup>
                <ToolbarGroup>
                        
                       
                            {/*<img src="./mypic.jpg" style={avatar} alt="Avatar" />*/}
                    
                        <div style={{ position: 'absolute', marginLeft: '-400px' , zIndex: 22 }}>
                            <button style={button}>Tweet</button>
                            <Search  />
                            </div>

                </ToolbarGroup>
            </Toolbar>
            </Paper>
        );
    }
}