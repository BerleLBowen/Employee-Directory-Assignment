const app = require('./app'); 
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Employee Directory API is listening on port ${PORT}`);
});