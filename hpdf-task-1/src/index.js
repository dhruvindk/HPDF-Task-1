import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import ReactDOM from 'react-dom';
import './App.css'

injectTapEventPlugin();
class WebApp extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="title">
        <div className="img" align="right">
            <img src="twitterimg.png" alt="Twitter"  />
            <h1 align="right">Twitter</h1>
            <h2>What's happening?</h2>
        </div>
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
           <CardMedia>
            <img src="cricket.jpg" alt="cricket" />
          </CardMedia>
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
            <img src="coke2.jpg" alt="coke" />
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
           <CardMedia>
            <img src="kapoor.jpg" alt="shahid" />
          </CardMedia>
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
            <img src="modi2.jpg" alt="modi"/>
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
            avatar="lion.jpg"
          />
          <CardText>
            The Gir Forest National Park and Wildlife Sanctuary, also known as Sasan-Gir is a forest and wildlife sanctuary near Talala Gir in Gujarat, India.
          </CardText>
          <CardMedia>
            <img src="lion2.jpg" alt="lion" width="728" height="728"/>
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
