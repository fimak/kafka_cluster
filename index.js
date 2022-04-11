const produce = require("./producer");
const consume = require("./consumer");

produce().catch((err) => {
  console.error("error in producer: ", err);
});

consume().catch((err) => {
  console.error("error in consumer: ", err);
});
