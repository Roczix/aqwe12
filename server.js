const express = require('express');
const fs = require('fs');
const path = require('path'); // استدعاء وحدة path
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/save', (req, res) => {
  const textToSave = req.body.text;

  // استخدام path.join للحصول على المسار النسبي
  const filePath = path.join(__dirname, 'text.txt');

  fs.writeFile(filePath, textToSave, (err) => {
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
  // استخدام path.join للحصول على المسار النسبي
  const filePath = path.join(__dirname, 'text.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
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
