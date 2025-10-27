import { mainContext } from "./../context/MainContext";
import { useContext } from "react";

function Header() {
  const contexto = useContext(mainContext);
  if (!contexto) return null;
  const { HeaderLogo, headerTitle, HeaderAdress, HeaderMinimalOrder } =
    contexto;
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex">
          <div className="flex  gap-2">
            <img className="rounded-full w-[150px]" src={HeaderLogo} alt="" />
            <div className="flex flex-col gap-2  ">
              <h1 className="text-2xl poppins ">{headerTitle}</h1>
              <p className="text-[10px] tracking-tight poppins">
                {HeaderAdress}
              </p>
              <p className="text-[10px] tracking-tight poppins">
                {HeaderMinimalOrder}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-amber-500">2</div>
      </div>
    </div>
  );
}

export default Header;
