import http from "node:http";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const HTML_PATH = fileURLToPath(new URL("./template.html", import.meta.url));

const interpolate = (html, data) => {
    return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, placeholder) => {
        return data[placeholder] || "";
    });
}

const formatNotes = (notes) => {
    return notes.map(note => {
        return `
        <div class="note">
          <p>${note.content}</p>
          <div class="tags">
            ${note.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
      `
    }).join('\n')
}

const createServer = (notes) => {
    const server = http.createServer(async (req, res) => {
        const template = await fs.readFile(HTML_PATH, "utf-8")
        const html = interpolate(template, { notes: formatNotes(notes) })

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(html);
    });
    return server;
}

const startServer = (notes, port = 5000) => {
    const server = createServer(notes);
    server.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
}

export { startServer }