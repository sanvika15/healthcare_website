const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pregnancy_pal',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.post('/api/form1', (req, res) => {
  const { basicInfo, missedPeriods, kitResult } = req.body;

  const sql = `INSERT INTO form_data_1 (name, age, contact, missed_periods, kit_result) VALUES (?, ?, ?, ?, ?)`;
  const values = [basicInfo.name, basicInfo.age, basicInfo.contact, missedPeriods, kitResult];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(`Error submitting form: ${err.message}`);
      console.error(err.stack);
      res.status(500).json({ message: 'Error submitting form', error: err.message });
    } else {
      console.log(`Form submitted successfully: ${results.insertId}`);
      res.json({ message: 'Form submitted successfully' });
    }
  });
});


app.post('/api/form2', (req, res) => {
  const {
    lastMenstrualPeriodDate,
    weight,
    height,
    bloodPressure,
    sugar,
    pulse,
    hb,
    nausea,
    vomiting,
    pregnancy,
    srNo,
  } = req.body;

  const sql = `INSERT INTO form_data_2 (
    last_menstrual_period_date,
    weight,
    height,
    blood_pressure,
    sugar,
    pulse,
    hb,
    nausea,
    vomiting,
    pregnancy,
    sr_no
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    lastMenstrualPeriodDate,
    weight,
    height,
    bloodPressure,
    sugar,
    pulse,
    hb,
    nausea,
    vomiting,
    pregnancy,
    srNo,
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(`Error submitting form: ${err.message}`);
      console.error(err.stack);
      res.status(500).json({ message: 'Error submitting form', error: err.message });
    } else {
      console.log(`Form submitted successfully: ${results.insertId}`);
      res.json({ message: 'Form submitted successfully' });
    }
  });


app.listen(8081, () => {
  console.log('Listening on port 8081');
});
})