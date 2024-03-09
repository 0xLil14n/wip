import Image from "next/image";

const Wip = () => {
  return (
    <div className="relative flex flex-col gap-5 rounded-xl border-2  border-solid p-3">
      <WipTitle />
      <div className="flex flex-row gap-5 overflow-x-scroll ">
        <VideoOrImage color="green" />
        <VideoOrImage color="purple" />
        <VideoOrImage color="pink" />
      </div>
    </div>
  );
};

const darkGreen = "#97BA0D";
const lightGreen = "rgb(217 249 157)";
const colors = {
  green: { light: lightGreen, dark: darkGreen },
  purple: { light: "rgb(196 181 253)", dark: "rgb(91 33 182)" },
  pink: { light: "rgb(255 157 217)", dark: "#BA0D97" },
} as const;

type Color = keyof typeof colors;

const VideoOrImage = ({ color }: { color: Color }) => {
  const { light, dark } = colors[color];
  return (
    <div className={`rounded-xl`}>
      <Image
        src="https://images.unsplash.com/photo-1651342703853-2594571bb96a?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="rounded-xl p-5"
        width={350}
        height={400}
        alt="Wip #7 Floral Cardigan"
        style={{
          objectFit: "cover",
          height: "400px",
          backgroundColor: dark,
          backgroundImage: `linear-gradient(45deg, ${light} 25%, transparent 25%), linear-gradient(-45deg, ${light} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${light} 75%), linear-gradient(-45deg, transparent 75%, ${light} 75%)`,

          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          minWidth: "350px",
        }}
      />
    </div>
  );
};
const WipTitle = () => (
  <div className="flex flex-row justify-between">
    <div>
      <h1 className="text-xl">Wip #7 Floral Cardigan</h1>
      <h3>32 days in progress</h3>
    </div>
    <button className="rounded-md border-2 border-solid p-1">
      Follow Project
    </button>
  </div>
);
export default Wip;
