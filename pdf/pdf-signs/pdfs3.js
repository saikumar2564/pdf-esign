import { PdfReader } from "pdfreader";
import { recognize } from "node-tesseract-ocr";
import fs from "fs";
import moment from "moment";
import child_process from "child_process";

const filePath = './T1.pdf';
const outputFile = 'previews/convert.png';
const pdfReader = new PdfReader();
const config = {
    lang: "eng",
    oem: 3,
    psm: 3,
};

function timeout(secs) {
    return new Promise(resolve => setTimeout(resolve, secs * 1000));
}

async function runChildProcess(cmd) {
    return new Promise((resolve, reject) => {
        try {
            child_process.exec(cmd, function (error, stdout, stderr) {
                if (error) {
                    console.error(error);
                    return reject(error);
                }
                return resolve(stdout);
            });
        } catch (e) {
            console.log(e);
            throw e;
        }
    });
}

async function waitForFile(path) {
    let startTime = moment().toDate();
    while (true) {
        let isExists = fs.existsSync(process.cwd() + "/" + path);
        if (isExists) {
            break;
        }
        if (moment().diff(startTime, 'minutes') > 2) {
            break;
        }
        await timeout(10);
    }
}

async function run() {
    pdfReader.parseFileItems(filePath, async (err, item) => {
        if (err) {
            console.error("Error reading PDF:", err);
            return;
        }
        if (item && item.page) {
            console.log(`Page ${item.page} - Width: ${item.width}, Height: ${item.height}`);
            console.log(item);
        }

        if (item && item.text) {
            console.log(`Text: ${item.text} - Coordinates: (X: ${item.x}, Y: ${item.y})`);
            console.log(item.text);
        }
    });
    
    const text = await recognize(outputFile, config);
    const searchTerm = "Signed by:";
    let count = 0;
    let index = text.indexOf(searchTerm);
    while (index !== -1) {
        count++;
        index = text.indexOf(searchTerm, index + 1);
    }
    console.log("Result:", text);
    console.log(count);
}

run();
