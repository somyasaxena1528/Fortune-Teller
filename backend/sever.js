const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const fortunes = [
  "A pleasant surprise is waiting for you.",
  "Your hard work will soon pay off.",
  "Good things come to those who wait.",
  "Adventure awaits you in the near future.",
  "A new friendship will brighten your day.",
  "You will find wisdom in unexpected places.",
  "Success is on your horizon.",
  "Today is your lucky day!",
];

app.get('/getall' ,function (_req,res){
  res.json({fortunes});
});

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to Fortune Cookie API! Visit /fortune to get your fortune.' });
});

app.get('/fortune', (_req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.json({ fortune: randomFortune });
});

app.listen(PORT, () => {
  console.log(`Fortune Cookie server running on http://localhost:${PORT}`);
});