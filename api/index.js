const express = require("express");
const app = express();
const mammoth = require("mammoth");

const db = {
  works: [
    { id: 123456, type: "pdf" },
    { id: 1234567, type: "docx" },
    { id: 12345678, type: "pdf" }
  ]
};

app.post("/deneme", (req, res) => {
    console.log(req.body)
    res.status(200).json({ok:"ok"})
})

app.post("/getwork", (req, res) => {
  console.log(req.body);

  const theWork = db.works.find(work => work.id == req.body.id);

  if (theWork != undefined) {
    if (theWork.type == "pdf") {
      res.status(200).json({ type: theWork.type });
    } else if (theWork.type == "docx") {
      mammoth
        .convertToHtml({ path: `./static/${theWork.id}.docx` })
        .then(function(result) {
          var html = result.value; // The generated HTML
          var messages = result.messages; // Any messages, such as warnings during conversion

          res.status(200).json({ type: theWork.type, html });
        })
        .done();
    }
  } else res.status(200).json({ type: null });
});

module.exports = {
  path: "/api",
  handler: app
};
