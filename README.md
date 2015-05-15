# office2html
node module to convert office files to html

requires unoconv to be installed
https://github.com/dagwieers/unoconv

convert office files (docx, pptx, xlsx) to an html document

### Usage:
```
var office2html = require(office2html),
  generateHtml = office2html.generateHtml;

generateHtml('test/test.pptx', function(err, result) {
  console.log(result);
});
```

### Test:
put a office document (docx, pptx, xlsx) in the test folder.
