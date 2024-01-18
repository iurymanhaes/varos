type Props = {
  ellipsePath: string;
  middle?: boolean;
  top?: boolean;
};

const EllipticalGradient = ({ ellipsePath, middle, top }: Props) => {
  let position = "";

  if (!top && !middle) {
    position = "60px";
  } else if (middle) {
    position = "0px";
  } else {
    position = "168px";
  }

  return (
    <div
      className="absolute h-28"
      style={{
        zIndex: -1,
        top: "-25px",
        left: `${position}`,
        width: `${top ? "128px" : "188px"}`,
        backgroundImage: `url(${ellipsePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default EllipticalGradient;
