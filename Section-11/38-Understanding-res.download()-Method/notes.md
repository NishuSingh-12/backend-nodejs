Understanding res.download() Method

The res.download() method is used to send a file to the client as an attachment, causing the browser to download the file instead of displaying it.

Syntax
res.download(path);
Example
app.get("/download", (req, res) => {
res.download("./files/report.pdf");
});

When the user visits:

/download

The browser automatically starts downloading:

report.pdf
Custom Download Filename
app.get("/download", (req, res) => {
res.download(
"./files/report.pdf",
"my-report.pdf"
);
});

The user downloads:

my-report.pdf

instead of the original filename.

How It Works

Internally, Express sets the:

Content-Disposition: attachment

header before sending the file.

Example:

Content-Disposition: attachment; filename="report.pdf"

This tells the browser to download the file.

Difference Between res.sendFile() and res.download()
res.sendFile() res.download()
Displays the file in the browser (if supported). Forces the browser to download the file.
Used for serving files. Used for file downloads.

Example:

res.sendFile("./report.pdf");

May open the PDF in the browser.

res.download("./report.pdf");

Downloads the PDF.

Interview Answer

The res.download() method in Express sends a file to the client as an attachment, prompting the browser to download it instead of displaying it.

One-line definition:
res.download() is used to force a file download from an Express server. 🚀
