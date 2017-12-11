import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import ReactDOM from 'react-dom';
import './App.css'

injectTapEventPlugin();
class WebApp extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div align="center">
        <h2>What’s happening?</h2>
        </div>
        <div className="cards">
  <Card>
    <CardHeader
      title="Twitter"
      subtitle="@Twitter"
    />
<CardText>
<CardMedia>
<img src="twitter.jpg alt="Twitter"/>
<CardText>
Welcome to Twitter... 
Twitter is an online news and social networking service where users post and interact messages, called tweets.
 </CardText>
 
</CardMedia>
<CardText>
<CardMedia>
<img src="twitter2.jpg alt="Twitter"/>
<CardText>
Welcome to Twitter! Twitter provides social networking service.
<CardText> 
</CardMedia>
   
  </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <WebApp />, document.getElementById('root')
);
