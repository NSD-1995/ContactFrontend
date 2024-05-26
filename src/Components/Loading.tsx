import { CSSProperties } from "react";
import BounceLoader from "react-spinners/BounceLoader";

const containerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh", 
};

const loaderStyle: CSSProperties = {
  margin: "0 auto",
};

function Loading() {
  return (
    <div style={containerStyle}>
      <BounceLoader
        color="#36d7b7" 
        loading={true}
        cssOverride={loaderStyle} 
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
