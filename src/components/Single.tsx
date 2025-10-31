import { useContext } from "react";
import { mainContext } from "./../context/MainContext";
import { ArrowDown, Divide } from "lucide-react";

function Single() {
  const contexto = useContext(mainContext);
  if (!contexto) return null;
  const { isSingleOpen, setisSingleOpen, singleTempId, ProductsList } =
    contexto;

  return (
    <div className={isSingleOpen ? "flex justify-center" : "hidden"}>
      <div className="fixed inset-0 bg-black/30 z-40 pointer-events-none"></div>

      <div className="bg-white border rounded-md p-6 fixed bottom-0 md:w-[50%] z-50 flex flex-col gap-8">
        <div className="flex justify-center">
          <button onClick={() => setisSingleOpen(false)}>
            <ArrowDown></ArrowDown>
          </button>
        </div>
        <div>
          {ProductsList.filter((a) => a.id === singleTempId).map((b) => {
            return (
              <div className="grid md:grid-cols-2 gap-2">
                <div className="flex justify-center">
                  <img className="border rounded-md" src={b.img} alt="" />
                </div>
                <div>
                  <h1 className="poppins text-2xl">{b.title}</h1>
                  <p>{b.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Single;
