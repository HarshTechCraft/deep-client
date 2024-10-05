import { Triangle } from "react-loader-spinner";
import '../style/Loader.css'
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
      <Triangle
        visible={true}
        height="100"
        width="100"
        color="#FFB933"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
