const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
  res.send('NexaVideo HD API Running');
});

app.get('/api/shorts/feed', (req,res)=>{
  res.json([
    {
      id: 1,
      username: "nexa_official",
      title: "First HD Video 🔥",
      playback_url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
    }
  ]);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, ()=> console.log('Running on '+PORT));
