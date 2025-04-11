import OCR from "./ocr/ocr";

const App = () => {
  return (
    <main className='container max-w-screen-md min-h-screen mx-auto px-4 py-8'>
      <div className=' grid gap-3'>
        <h1 className='font-semibold text-2xl'>Simple OCR Project</h1>
        <p>
          This is a simple OCR project using{" "}
          <a
            href='https://github.com/naptha/tesseract.js'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Tesseract.js
          </a>
          . Choose a language and an image, then click on the button. It will
          then recognize the text in the image and show the output text. File is
          not uploaded to any server, the function is processed in the frontend.
        </p>
        <OCR />
      </div>
    </main>
  );
};

export default App;
