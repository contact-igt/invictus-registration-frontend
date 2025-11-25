import "@/styles/globals.css";
import CustomCursor from "@/common/Cursor";
import BackgroundAnimation from "@/common/BackgroundAnimation";
import useUTMSource from "@/hooks/useUTMSource";

export default function App({ Component, pageProps }) {
  useUTMSource();

  return (
    <div className="min-h-screen text-[#E0E0E0] font-sans selection:bg-[#2AB182] selection:text-black cursor-none overflow-x-hidden relative">
      <CustomCursor />
      <BackgroundAnimation />
      <Component {...pageProps} />
    </div>
  );
}
