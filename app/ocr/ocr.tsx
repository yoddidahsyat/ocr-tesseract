"use client";

import { useState } from "react";
import runOCR from "./function";
import Image from "next/image";
import { languages } from "./lang";

const OCR = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [language, setLanguage] = useState<string>("eng");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const handleImageUpload = (event: any) => {
    const image = event.target.files[0];
    setSelectedImage(URL.createObjectURL(image));
  };

  const handleClick = async () => {
    if (!selectedImage) {
      alert("Please select an image");
      return;
    }
    try {
      setLoading(true);
      const OCRresult = await runOCR(language, selectedImage);
      setResult(OCRresult);
      setLoading(false);
    } catch (error: any) {
      setResult(error);
      setLoading(false);
    }
  };
  return (
    <div className='mt-4 grid gap-4'>
      <div className='flex gap-2'>
        <label htmlFor='language'>Choose language</label>
        <select
          id='language'
          className='bg-white text-black px-3 py-2'
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      <div className='flex gap-2'>
        <label htmlFor='image'>
          Insert image (.bmp, .jpg, .png, .pbm, .webp)
        </label>
        <input
          id='image'
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
          className='cursor-pointer'
        />
      </div>
      <button
        className='bg-white text-black px-3 py-2 disabled:bg-slate-500'
        onClick={handleClick}
        disabled={loading}
      >
        Run OCR
      </button>
      {selectedImage && (
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
          <Image src={selectedImage} alt='Selected' width={500} height={500} />
          <div>
            <h5>Output Text:</h5>
            <div id='result'>{loading ? "Loading..." : result}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OCR;
