import { createWorker } from "tesseract.js";

const runOCR = async (language: string, file: any) => {
  console.log("running OCR..");
  const worker = await createWorker(language);
  const ret = await worker.recognize(file);
  await worker.terminate();
  return ret.data.text;
};

export default runOCR;
