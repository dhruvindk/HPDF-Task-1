import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import ReactDOM from 'react-dom';
import './App.css'

class WebApp extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      <div align="center">
        <h1>Twitter</h1>
        </div>
        <div align="center">
        <h2>What's new?</h2>
        </div>
        <div className="tabs">
    <Tabs>
      <Tab label="Featured" >
        <div>
        <Card>
          <CardHeader
            title="Twitter"
            subtitle="@twitter"
            avatar="twitter.jpg"
          />
          <CardText>
          Twitter is an online news and social networking service where users post and interact messages, called tweets.
          </CardText>
        </Card>
        </div>
      </Tab>
       <Tab label="Cricket" >
        <div>
        <Card>
          <CardHeader
            title="Crickbuzz"
            subtitle="@Crickbuzzinfo"
            avatar="crickbuzz.jpg"
          />
          <CardText>
         CricBuzz is a sports news website and app to all exclusively for the game of cricket. The site features news, articles, live coverage of cricket matches (including videos and scorecards), player rankings and team rankings.
          </CardText>
        </Card>
        </div>
      </Tab>
      <Tab
        label="Music World"
        data-route="/home"
      >
        <div>
        <Card>
          <CardHeader
            title="Coke studio"
            subtitle="@coke"
            avatar="coke.jpg"
          />
          <CardText>
              Coke Studio is a Pakistani musical television series. Its tenth season began on 11 August and ended on 21 September 2017. Strings and The Coca-Cola Company emceed the show as executive producers, while the show returned with the previous year's format of music directors leading and producing their own songs.
          </CardText>
          <CardMedia>
            <img src="coke2.jpg" />
          </CardMedia>
        </Card>
        </div>
      </Tab>
      <Tab label="Movie" >
        <div>
        <Card>
          <CardHeader
            title="Shahid Kapoor"
            subtitle="@sahidkapoor"
            avatar="kapoor.jpg"
          />
          <CardText>
              Dialogue from Teri Meri Kahaaniahaani: Aap hum mein bhool jao, hum mein koi gham nahi ... jis din humne aapko bhula diya, samajh li jiyega is duniya mein hum nahi
          </CardText>
        </Card>
        </div>
      </Tab>
      <Tab label="Politics" >
        <div>
        <Card>
          <CardHeader
            title="Narendra Modi"
            subtitle="@modi"
            avatar="modi.jpg"
          />
          <CardText>
            Narendra Damodardas Modi, born 17 September 1950 is an Indian politician who is the 14th and current Prime Minister of India, in office since May 2014. He was the Chief Minister of Gujarat from 2001 to 2014. 
          </CardText>
          <CardMedia>
            <img src="modi2.jpg" />
          </CardMedia>
        </Card>
        </div>
      </Tab>
      <Tab label="Tourism" >
        <div>
        <Card>
          <CardHeader
            title="Gujarat Gir"
            subtitle="@Gir_tourism"
            avatar="lion.jpeg"
          />
          <CardText>
            The Gir Forest National Park and Wildlife Sanctuary, also known as Sasan-Gir is a forest and wildlife sanctuary near Talala Gir in Gujarat, India.
          </CardText>
          <CardMedia>
            <img src="lion2.jpg" width="728" height="728"/>
          </CardMedia>
        </Card>
        </div>
      </Tab>
    </Tabs>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <WebApp />, document.getElementById('root')
);