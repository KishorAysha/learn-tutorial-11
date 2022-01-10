import useWindowWidth from "./useWindowWidth";
export default function LayoutComponent() {
  const onSmallScreen = useWindowWidth(600);

  return (
    <div className={onSmallScreen ? "small" : "large"}>
      <h2>Your screen is on device</h2>
    </div>
  );
}
