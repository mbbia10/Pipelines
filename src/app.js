const express = require('express');
const healthCheck = require('./routes/health');

const app = express();

app.get('/health', healthCheck);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
