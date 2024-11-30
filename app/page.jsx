import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <>
      <div className="h-screen relative">
        <div className="absolute top-0 left-0 z-40 text-gray-800">gads</div>
        <Spline scene="https://prod.spline.design/HZ6fpkvYDOzGC8mf/scene.splinecode" />
      </div>
    </>
  );
}
