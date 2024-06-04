const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir os ficheiros estáticos da pasta "dist"
app.use(express.static(path.join(__dirname, 'dist')));

// Rota para servir o index.html para todas as rotas
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
