const express = require('express');
const fs = require('fs');
const app = express();
<<<<<<< HEAD
const port = 3000;
=======
const port = 80;
>>>>>>> 2f14a70d99adb8afa93e132bb3da8594536cc15e

app.use(express.static('public'));
app.use(express.json());

app.post('/save', (req, res) => {
  const textToSave = req.body.text;

  fs.writeFile('text.txt', textToSave, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('حدث خطأ أثناء الحفظ.');
    } else {
      res.send('تم الحفظ بنجاح.');
    }
  });
});

// يقدم محتوى الملف عند الطلب
app.get('/file', (req, res) => {
  fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('حدث خطأ أثناء قراءة الملف.');
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`الخادم يعمل على المنفذ ${port}`);
});
