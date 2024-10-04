import { WifiLoader } from "react-awesome-loaders";
export const Loader = () => {
  return (
    <div
      style={{
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(2px)",
        zIndex: 9999, 
      }}
    >
      <WifiLoader
        background={"transparent"}
        desktopSize={"70em"}
        mobileSize={"70em"}
        text={""}
        backColor="black"
        frontColor="#FFB933"
      />
    </div>
  );
};