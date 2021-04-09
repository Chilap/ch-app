import Nav from "./nav";

export default function Presentation() {
  return (
    <div className="text-center m-6">
      <h1 className="text-7xl text-center">📸 攝影吹</h1>

      <p className="text-xl leading-8 text-center hidden md:inline lg:inline">
        The arts, the tech, the gears, the business.... ALL about photography.
        <br />
        關於攝影，無所不談；無所不吹。 <br />{" "}
        不論你係專業攝影師，定係攝影愛好者，入嚟吹吓攝影！
      </p>

      {/* -----------Mobile----------- */}
      <p className="text-center text-gray-700 m-3 md:hidden lg:hidden">
        ALL about photography
      </p>
      <p className="text-center text-gray-700 m-3 md:hidden lg:hidden">
        關於攝影，無所不談；無所不吹。
      </p>
      <Nav />
    </div>
  );
}
