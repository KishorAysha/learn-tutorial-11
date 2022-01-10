import useWindowWidth from "./useWindowWidth";

export default function LayoutComponent() {
  const onSmallScreen = useWindowWidth(768);

  return (
    <div>
      <h2>Your screen is on {onSmallScreen ? "small" : "Large"} device</h2>
    </div>
  );
}
