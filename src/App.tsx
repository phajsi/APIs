import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoredAPI from "./components/BoredAPI";
import Iframe from "./components/Iframe";

const Header = styled.header`
  background-color: #edb148;
  height: 10vh;
  & > h1 {
    margin: 0;
    top: 50%;
    transform: translateY(50%);
    text-transform: uppercase;
  }
`;

const AppContent = styled.div`
  height: 100vh;
  background-color: #f7d499;
  text-align: center;
  padding: 5vh;
`;

const Activity = styled.div`
  padding: 10px;
`;

function App() {
  const [api, setApi] = useState("");
  const [data, setData] = useState("");

  console.log('data',data);

/*   const loadSpotify = () => {
    window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
      let element = document.getElementById('embed-iframe');
      let options = {
          uri: 'spotify:episode:1jfXAHmiy9ZC0r0zLZyuY7'
        };
      let callback = (EmbedController : any) => {};
      IFrameAPI.createController(element, options, callback);
    };
  } */

/*   useEffect(() => {
    loadSpotify();
  }, [])
   */
  const url = '';

  const fetchSpotify = () => {
    fetch(`https://api.spotify.com/v1/search?q=jo%20nesbø&type=episode`, 
      {
        method: "GET",
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
      } 
   )
    .then(response => response.json())
    .then(res => {
      console.log(res.episodes.items);
      setData(res.episodes.items[2].external_urls.spotify.split('episode/')[1]);
    });
  }
   

  useEffect(() => {
    fetchSpotify();
  }, [])


  return (
    <AppContent>
      <Header>
        <h1>Test API: {api}</h1>
      </Header>
      <button onClick={() => setApi("bored API")}>bored Api</button>
      <button onClick={() => setApi("")}>Clear</button>
      <Activity>{api === "bored API" && <BoredAPI />}</Activity>
      {data !== "" &&
      <Iframe src={data}/>}
      <div>
        {/* {data.map((data) => {
          return (<p></p>)
        })} */}
      </div>
    </AppContent>
  );
}

export default App;