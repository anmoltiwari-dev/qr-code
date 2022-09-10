import Head from "next/head";
import Image from "next/image";
import qrCodeImg from '../public/image-qr-code.png';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet" /> 
      </Head>
      <div className="flex justify-center items-center h-screen bg-light-gray">
        <div className="flex flex-col justify-center bg-white w-[90%] sm:w-[22%] h-auto items-center rounded-[20px]">
          <div className="h-3/12 w-[90%] pt-4">
            <Image
              src={qrCodeImg}
              alt='QR Code'
              priority
              className="rounded-[10px]"
            />
          </div>
          <div className="w-[80%] text-center pt-5">
            <h1 className="font-bold pb-3 text-[1.4rem] text-dark-blue">Improve your front-end skills by building projects</h1>
            <p className="pb-10 text-[1.066rem] text-grayish-blue">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
    </div>
  );
}
