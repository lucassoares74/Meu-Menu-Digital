import { mainContext } from "./../context/MainContext";
import { useContext } from "react";
import { ArrowDown } from "lucide-react";

function Header() {
  const contexto = useContext(mainContext);
  if (!contexto) return null;
  const {
    HeaderLogo,
    headerTitle,
    HeaderAdress,
    HeaderMinimalOrder,
    isScheduleOpen,
    setisScheduleOpen,
    Status,
    Schedule,
    floatParaHorario,
  } = contexto;
  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="flex">
          <div className="flex items-start gap-2">
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
        <div className="">
          <div>
            <h1
              className={
                Status.toLowerCase() === "funcionando"
                  ? "poppins text-green-600"
                  : "poppins text-red-500"
              }
            >
              status: {Status}
            </h1>
            <button
              onClick={() => {
                setisScheduleOpen(!isScheduleOpen);
              }}
              className="flex justify-center w-full gap-2 border rounded-md hover:bg-amber-300 poppins"
            >
              {!isScheduleOpen ? (
                <>
                  Ver horários <ArrowDown />
                </>
              ) : (
                "Fechar"
              )}
            </button>
            <div className={isScheduleOpen ? "border rounded-md" : "hidden"}>
              <div className="justify-center flex">
                <h1 className="font-extrabold poppins">
                  Horarios de funcionamento:
                </h1>
              </div>
              {Schedule.map((a) => {
                return (
                  <div className=" p-1 ">
                    <h1 className="poppins font-bold">
                      {a.fromday + "-" + a.today}
                    </h1>
                    <h1 className="poppins">
                      {floatParaHorario(a.fromhour) +
                        "-" +
                        floatParaHorario(a.tohour)}{" "}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
