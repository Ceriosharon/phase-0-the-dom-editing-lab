const { JSDOM } = require('jsdom');
const { window } = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <h1>Hello World</h1>
      <p>This is a <strong>test</strong> with <em>emphasis</em> and a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">link</a>.</p>
      <table></table>
    </body>
  </html>
`);

global.document = window.document;

describe("within index.html", () => {
  it("contains a <body> tag", () => {
    expect(document.querySelector("html").innerHTML).to.include("<body>");
  });
  it("contains a </body> tag", () => {
    expect(document.querySelector("html").innerHTML).to.include("</body>");
  });
  it("contains an <h1> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("<h1>");
  });
  it("contains a <p> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("<p>");
  });
  it("within the <p>, it contains a <strong> tag", () => {
    expect(document.querySelector("p").innerHTML).to.include("<strong>");
  });
  it("within the <p>, it contains an <em> tag", () => {
    expect(document.querySelector("p").innerHTML).to.include("<em>");
  });
  it("within the <p>, it contains an <a> tag", () => {
    expect(document.querySelector("p").innerHTML).to.include(
      '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">'
    );
  });
  it("within the <body>, it contains a <table> tag", () => {
    expect(document.querySelector("body").innerHTML).to.include("table");
  });
});
