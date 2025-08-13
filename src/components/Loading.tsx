import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center p-10">
       <DotLottieReact
      src="https://lottie.host/c67fc83c-0625-41b1-86ca-cd3c9d6394b9/vt0sEMaZdP.lottie"
      loop
      autoplay
      className="w-3xl"
    />
    <p className="text-3xl text-amber-700 font-semibold mb-4">Loading books...</p>
    </div>
  );
};

export default Loading;
