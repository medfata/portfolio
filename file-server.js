const http = require('http');
const fs = require('fs');

const port = 3000;
const pdfFilePath = 'C:/Users/mohfatta/Desktop/personal_projects/Billy-Pearson-Portfolio-DevChallenge/en-CV.pdf';

const server = http.createServer((req, res) => {
  if (req.url === '/download') {
    const file = fs.createReadStream(pdfFilePath);
    res.setHeader('Content-Disposition', 'attachment; filename=mohamed-fatta-cv.pdf');
    res.setHeader('Content-type', 'application/pdf');
    file.pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
