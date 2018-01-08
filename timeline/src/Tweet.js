import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import More from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const Tweet = () => (
    <div>
    <Card style={{maxWidth: 760}}>
        <CardHeader
            title={<div><b style={{ fontSize: 17 }}>Nat Geo </b> &nbsp;<span style={{ color: '#657786'}}>@NatGeo · <a>1h</a></span>
            </div>}
            avatar="./timelineav1.jpg"
        />
        <IconMenu
            iconButtonElement=
            {<IconButton style={{ float: 'right', marginLeft: 605, marginTop: -80}} className="floatingButton"
                backgroundColor='#66757f'>
                <More color={'#66757f'}  />
            </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
            
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Copy link to Tweet</span>} />
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Embed Tweet</span>} />
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Mute @NatGeo</span>} />
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Block @NatGeo</span>} />
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Report Tweet</span>} />
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Add to new Moment</span>} />

        </IconMenu>
        <CardText style={{marginTop:-30}}>
                <span style={{ fontFamily: "sans-serif", fontSize: 14,marginLeft:'5rem'}}>When an animal gets scared, it either stays very still or revs up
            for a "fight or flight" response—but elephants </span><span style={{ fontFamily: "sans-serif", fontSize: 14, marginLeft: '5rem' }}>do both.</span>
        </CardText>
        <CardMedia style={{maxWidth:650, margin:'auto'}}>
            <img src="./timeline1.jpg" alt="elephant wildlife" style={{ borderRadius: 4, maxWidth:150}} height="400" width="150" />
        </CardMedia>
        <div >
            <IconButton  tooltip="Reply" tooltipPosition="top-center">
                <img src="./reply1.png" width="23" height="23"/>
            </IconButton>
            <IconButton tooltip="Retweet" tooltipPosition="top-center" >
                <img src="./retweet.png" width="25" height="25" />
            </IconButton>
            <IconButton tooltip="Like" tooltipPosition="top-center" >
                <img src="./like.png" width="20" height="20" />
            </IconButton>
            <IconButton tooltip="Direct message" tooltipPosition="top-center" >
                <img src="./DM.png" width="20" height="20" />
            </IconButton>
        </div>
    </Card>
    <br />
        <Card style={{ maxWidth: 760}}>
            <CardHeader
                title={<div><b style={{ fontSize: 17 }}>Times of India </b> &nbsp;<span style={{ color: '#657786' }}>@timesofindia · <a>1h</a></span>
                </div>}
                avatar="./timelineav2.jpg"
            />
            <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 605, marginTop: -80 }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >

                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Mute @timesofindia</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Block @timesofindia</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 14,marginLeft:'5rem' }}>We believe that every American should stand for the National Anthem,
                and we proudly pledge allegiance to one NATION UNDER GOD! :<b> Donald Trump</b></span>
            </CardText>
            <CardMedia style={{ maxWidth: 650, margin: 'auto' }}>
                <img src="./timeline2.jpg" alt="trump" style={{ borderRadius: 4, maxWidth: 150 }} height="400" width="150" />
            </CardMedia>
            <div >
                <IconButton tooltip="Reply" tooltipPosition="top-center">
                    <img src="./reply1.png" width="23" height="23" />
                </IconButton>
                <IconButton tooltip="Retweet" tooltipPosition="top-center" >
                    <img src="./retweet.png" width="25" height="25" />
                </IconButton>
                <IconButton tooltip="Like" tooltipPosition="top-center" >
                    <img src="./like.png" width="20" height="20" />
                </IconButton>
                <IconButton tooltip="Direct message" tooltipPosition="top-center" >
                    <img src="./DM.png" width="20" height="20" />
                </IconButton>
            </div>
        </Card>
        <br />
        <Card style={{ maxWidth: 760 }}>
            <CardHeader
                title={<div><b style={{ fontSize: 17 }}>CNN Breaking News </b> &nbsp;<span style={{ color: '#657786' }}>@cnnbrk · <a>1h</a></span>
                </div>}
                avatar="./timelineav3.jpg"
            />
            <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 605, marginTop: -80 }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >

                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Mute @cnnbrk</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Block @cnnbrk</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 14 }}>Prime Minister Narendra Modi talks about 3 factors that 
                helped reduce corruption, bring transparency. Also speaks about de-monetisation.</span>
            </CardText>
            <CardMedia style={{ maxWidth: 650, margin: 'auto' }}>
                <img src="./timeline3.jpg" alt="Narendra Modi" style={{ borderRadius: 4, maxWidth: 150 }} height="400" width="150" />
            </CardMedia>
            <div >
                <IconButton tooltip="Reply" tooltipPosition="top-center">
                    <img src="./reply1.png" width="23" height="23" />
                </IconButton>
                <IconButton tooltip="Retweet" tooltipPosition="top-center" >
                    <img src="./retweet.png" width="25" height="25" />
                </IconButton>
                <IconButton tooltip="Like" tooltipPosition="top-center" >
                    <img src="./like.png" width="20" height="20" />
                </IconButton>
                <IconButton tooltip="Direct message" tooltipPosition="top-center" >
                    <img src="./DM.png" width="20" height="20" />
                </IconButton>
            </div>
        </Card>
        <br />
        <Card style={{ maxWidth: 760 }}>
            <CardHeader
                title={<div><b style={{ fontSize: 17 }}>Paytm </b> &nbsp;<span style={{ color: '#657786' }}>@paytm · <a>1h</a></span>
                </div>}
                avatar="./timelineav4.jpg"
            />
            <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 605, marginTop: -80 }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >

                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Mute @paytm</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Block @paytm</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 14 }}>We are extremely proud to announce that we have 
                received INR 1 Crore+ from Paytm users across India for the Armed Forces Flag Day Fund.</span>
            </CardText>
            <CardMedia style={{ maxWidth: 650, margin: 'auto' }}>
                <img src="./timeline4.jpg" alt="paytm" style={{ borderRadius: 4, maxWidth: 150 }} height="400" width="150" />
            </CardMedia>
            <div >
                <IconButton tooltip="Reply" tooltipPosition="top-center">
                    <img src="./reply1.png" width="23" height="23" />
                </IconButton>
                <IconButton tooltip="Retweet" tooltipPosition="top-center" >
                    <img src="./retweet.png" width="25" height="25" />
                </IconButton>
                <IconButton tooltip="Like" tooltipPosition="top-center" >
                    <img src="./like.png" width="20" height="20" />
                </IconButton>
                <IconButton tooltip="Direct message" tooltipPosition="top-center" >
                    <img src="./DM.png" width="20" height="20" />
                </IconButton>
            </div>
        </Card>
        <br />
        <br />
    {/*
    <Card >
        <CardHeader
            title={<div><b style={{ fontSize: 17 }}>Times of India </b> &nbsp;<span style={{ color: '#657786' }}>@timesofindia · <a>1h</a></span>
            </div>}
            avatar="./timelineav2.jpg"
        />
        <IconMenu
            iconButtonElement=
            {<IconButton style={{ float: 'right', marginLeft: 605, marginTop: -80 }} className="floatingButton"
                backgroundColor='#66757f'>
                <More color={'#66757f'} />
            </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >

            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Copy link to Tweet</span>} />
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Embed Tweet</span>} />
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Mute @timesofindia</span>} />
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Block @timesofindia</span>} />
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Report Tweet</span>} />
            <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Add to new Moment</span>} />

        </IconMenu>
        <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 14 }}>We believe that every American should stand for the National Anthem,
                and we proudly pledge allegiance to one NATION UNDER GOD! :<b> Donald Trump</b></span>
        </CardText>
        <CardMedia style={{ maxWidth: 650, margin: 'auto' }}>
            <img src="./timeline2.jpg" alt="elephant wildlife" style={{ borderRadius: 4, maxWidth: 150 }} height="400" width="150" />
        </CardMedia>
        <div >
            <IconButton tooltip="Reply" tooltipPosition="top-center">
                <img src="./reply1.png" width="23" height="23" />
            </IconButton>
            <IconButton tooltip="Retweet" tooltipPosition="top-center" >
                <img src="./retweet.png" width="25" height="25" />
            </IconButton>
            <IconButton tooltip="Like" tooltipPosition="top-center" >
                <img src="./like.png" width="20" height="20" />
            </IconButton>
            <IconButton tooltip="Direct message" tooltipPosition="top-center" >
                <img src="./DM.png" width="20" height="20" />
            </IconButton>
        </div>
    </Card>
        <Card style={{ width: 680, marginTop: 10, marginLeft: -250 }} >
            <CardHeader
                title={<div><b style={{ fontSize: 17 }}>CNN Breaking News </b> &nbsp;<span style={{ color: '#657786' }}>@cnnbrk · <a>1h</a></span>
                </div>}
                avatar="./timelineav3.jpg"
            />
            <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 605, marginTop: -80 }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >

                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Mute @cnnbrk</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Block @cnnbrk</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 14 }}>Prime Minister Narendra Modi talks about 3 factors that 
                helped reduce corruption, bring transparency. Also speaks about de-monetisation.</span>
            </CardText>
            <CardMedia style={{ maxWidth: 650, margin: 'auto' }}>
                <img src="./timeline3.jpg" alt="elephant wildlife" style={{ borderRadius: 4, maxWidth: 150 }} height="400" width="150" />
            </CardMedia>
            <div >
                <IconButton tooltip="Reply" tooltipPosition="top-center">
                    <img src="./reply1.png" width="23" height="23" />
                </IconButton>
                <IconButton tooltip="Retweet" tooltipPosition="top-center" >
                    <img src="./retweet.png" width="25" height="25" />
                </IconButton>
                <IconButton tooltip="Like" tooltipPosition="top-center" >
                    <img src="./like.png" width="20" height="20" />
                </IconButton>
                <IconButton tooltip="Direct message" tooltipPosition="top-center" >
                    <img src="./DM.png" width="20" height="20" />
                </IconButton>
            </div>
        </Card>
        <Card style={{ width: 680, marginTop: 10, marginLeft: -250 }} >
            <CardHeader
                title={<div><b style={{ fontSize: 17 }}>Paytm </b> &nbsp;<span style={{ color: '#657786' }}>@Paytm · <a>1h</a></span>
                </div>}
                avatar="./timelineav4.jpg"
            />
            <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 605, marginTop: -80 }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >

                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Mute @Paytm</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Block @Paytm</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <CardText style={{ marginTop: -30 }}>
                <span style={{ fontFamily: "sans-serif", fontSize: 14 }}>We are extremely proud to announce that we have 
                received INR 1 Crore+ from Paytm users across India for the Armed Forces Flag Day Fund.</span>
            </CardText>
            <CardMedia style={{ maxWidth: 650, margin: 'auto' }}>
                <img src="./timeline4.jpg" alt="elephant wildlife" style={{ borderRadius: 4, maxWidth: 150 }} height="400" width="150" />
            </CardMedia>
            <div >
                <IconButton tooltip="Reply" tooltipPosition="top-center">
                    <img src="./reply1.png" width="23" height="23" />
                </IconButton>
                <IconButton tooltip="Retweet" tooltipPosition="top-center" >
                    <img src="./retweet.png" width="25" height="25" />
                </IconButton>
                <IconButton tooltip="Like" tooltipPosition="top-center" >
                    <img src="./like.png" width="20" height="20" />
                </IconButton>
                <IconButton tooltip="Direct message" tooltipPosition="top-center" >
                    <img src="./DM.png" width="20" height="20" />
                </IconButton>
            </div>
        </Card>
    */}
    </div>
);

export default Tweet;

