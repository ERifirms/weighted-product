const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const resultV1 = null;
  const resultV2 = null;
  const resultV3 = null;
  const resultV4 = null;
  res.render("app/form", { resultV1, resultV2, resultV3, resultV4 });
});

router.post("/submit", async (req, res) => {
  const {
    c1,
    c2,
    c3,
    c4,
    c5,
    r1c1,
    r1c2,
    r1c3,
    r1c4,
    r1c5,
    r2c1,
    r2c2,
    r2c3,
    r2c4,
    r2c5,
    r3c1,
    r3c2,
    r3c3,
    r3c4,
    r3c5,
    r4c1,
    r4c2,
    r4c3,
    r4c4,
    r4c5,
  } = req.body;

  // w1
  const totalSumW1 =
    parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4) + parseInt(c5);
  const result1 = parseInt(c1) / totalSumW1;
  const W1 = result1.toFixed(3);
  console.log("Total Sum:", W1);

  // w2
  const totalSumW2 =
    parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4) + parseInt(c5);
  const result2 = parseInt(c2) / totalSumW2;
  const W2 = result2.toFixed(3);
  console.log("Total Sum:", W2);

  // w3
  const totalSumW3 =
    parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4) + parseInt(c5);
  const result3 = parseInt(c3) / totalSumW3;
  const W3 = result3.toFixed(3);
  console.log("Total Sum:", W3);

  // w4
  const totalSumW4 =
    parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4) + parseInt(c5);
  const result4 = parseInt(c4) / totalSumW4;
  const W4 = result4.toFixed(3);
  console.log("Total Sum:", W4);

  // w5
  const totalSumW5 =
    parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4) + parseInt(c5);
  const result5 = parseInt(c5) / totalSumW5;
  const W5 = result5.toFixed(3);
  console.log("Total Sum:", W5);

  const resultW1 = W1 * 1;
  const resultW2 = W2 * -1;
  const resultW3 = W3 * 1;
  const resultW4 = W4 * 1;
  const resultW5 = W5 * -1;

  console.log("=== Tahap 1 ===");
  console.log(resultW1);
  console.log(resultW2);
  console.log(resultW3);
  console.log(resultW4);
  console.log(resultW5);

  const hasil1 =
    r1c1 ** resultW1 *
    r1c2 ** resultW2 *
    r1c3 ** resultW3 *
    r1c4 ** resultW4 *
    r1c5 ** resultW5;

  const hasil2 =
    r2c1 ** resultW1 *
    r2c2 ** resultW2 *
    r2c3 ** resultW3 *
    r2c4 ** resultW4 *
    r2c5 ** resultW5;

  const hasil3 =
    r3c1 ** resultW1 *
    r3c2 ** resultW2 *
    r3c3 ** resultW3 *
    r3c4 ** resultW4 *
    r3c5 ** resultW5;

  const hasil4 =
    r4c1 ** resultW1 *
    r4c2 ** resultW2 *
    r4c3 ** resultW3 *
    r4c4 ** resultW4 *
    r4c5 ** resultW5;

  console.log("=== tahap 2 ====");
  console.log("total hasil: ", hasil1.toFixed(4));
  console.log("total hasil: ", hasil2.toFixed(4));
  console.log("total hasil: ", hasil3.toFixed(4));
  console.log("total hasil: ", hasil4.toFixed(4));

  const exV1 = hasil1 + hasil2 + hasil3 + hasil4;
  const V1 = hasil1.toFixed(4) / exV1;

  const exV2 = hasil1 + hasil2 + hasil3 + hasil4;
  const V2 = hasil2.toFixed(4) / exV2;

  const exV3 = hasil1 + hasil2 + hasil3 + hasil4;
  const V3 = hasil3.toFixed(4) / exV3;

  const exV4 = hasil1 + hasil2 + hasil3 + hasil4;
  const V4 = hasil4.toFixed(4) / exV4;

  console.log("R1: ", V1.toFixed(4));
  console.log("R2: ", V2.toFixed(4));
  console.log("R3: ", V3.toFixed(4));
  console.log("R4: ", V4.toFixed(4));

  const resultV1 = V1.toFixed(4);
  const resultV2 = V2.toFixed(4);
  const resultV3 = V3.toFixed(4);
  const resultV4 = V4.toFixed(4);

  res.json({ resultV1, resultV2, resultV3, resultV4 });
});

module.exports = router;
