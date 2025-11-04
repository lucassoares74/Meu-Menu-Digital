import { useContext } from "react";
import { mainContext } from "./../context/MainContext";
import { ArrowDown, Plus, Minus } from "lucide-react";

function Single() {
  const contexto = useContext(mainContext);
  if (!contexto) return null;
  const {
    isSingleOpen,
    setisSingleOpen,
    singleTempId,
    ProductsList,
    singleTempQnt,
    setsingleTempQnt,
    setsingleTempValue,
    singleTempValue,
    setsingleTempAdds,
    singleTempAdds,
  } = contexto;

  return (
    <div className={isSingleOpen ? "flex justify-center" : "hidden"}>
      <div className="fixed inset-0 bg-black/30 z-40 pointer-events-none"></div>

      <div className="bg-white border rounded-md p-6 fixed bottom-0 md:w-[50%] z-50 flex flex-col gap-8 overflow-y-auto max-h-screen">
        <div className="flex justify-center">
          <button onClick={() => setisSingleOpen(false)}>
            <ArrowDown></ArrowDown>
          </button>
        </div>
        <div>
          {ProductsList.filter((a) => a.id === singleTempId).map((b) => {
            return (
              <div className="flex flex-col gap-4">
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex justify-center">
                    <img className="border rounded-md" src={b.img} alt="" />
                  </div>
                  <div>
                    <h1 className="poppins text-2xl">{b.title}</h1>
                    <p>{b.description}</p>
                  </div>
                </div>
                <div
                  className={b.needaddone ? "flex flex-col gap-4" : "hidden"}
                >
                  <div className="flex justify-center border">
                    <h1 className="text-2xl poppins">Adicionais Primarios</h1>
                  </div>
                  <div>
                    {b.addsone?.map((a) => {
                      return (
                        <div className="flex gap-2">
                          <input
                            onChange={(event) => {
                              if (event.target.checked) {
                                setsingleTempValue((prev) => prev + a.value);
                                setsingleTempAdds((prev) => [...prev, a.title]);
                              } else {
                                setsingleTempValue((prev) => prev - a.value);
                                setsingleTempAdds((prev) =>
                                  prev.filter((item) => item !== a.title)
                                );
                              }
                              console.log(singleTempAdds);
                            }}
                            type="checkbox"
                          />
                          <h1 className="poppins">{a.title}</h1>
                          <h1>
                            {a.value.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                  <div className={b.needaddtwo ? "" : "hidden"}>
                    <div className="flex justify-center border">
                      <h1 className="poppins text-2xl">
                        Adicionais Secundarios
                      </h1>
                    </div>
                    <div>
                      {b.addstwo?.map((a) => {
                        return (
                          <div className="flex gap-2">
                            <input
                              onChange={(event) => {
                                if (event.target.checked) {
                                  setsingleTempValue((prev) => prev + a.value);
                                  setsingleTempAdds((prev) => [
                                    ...prev,
                                    a.title,
                                  ]);
                                } else {
                                  setsingleTempValue((prev) => prev - a.value);
                                  setsingleTempAdds((prev) =>
                                    prev.filter((item) => item !== a.title)
                                  );
                                }
                                console.log(singleTempAdds);
                              }}
                              type="checkbox"
                            />
                            <h1 className="poppins">{a.title}</h1>
                            <h1>
                              {a.value.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </h1>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-gray-400">Observações:</h1>
                  <textarea className="border rounded-md w-full h-full text-start" />
                </div>
                <div className="flex">
                  <div className="flex gap-2 border rounded-md">
                    <button
                      onClick={() => setsingleTempQnt((prev) => prev + 1)}
                    >
                      <Plus />
                    </button>
                    <h1>{singleTempQnt}</h1>
                    <button
                      onClick={() =>
                        singleTempQnt > 1
                          ? setsingleTempQnt((prev) => prev - 1)
                          : console.log("menor")
                      }
                    >
                      <Minus />
                    </button>
                  </div>
                  <div className="flex justify-end w-full">
                    <div>
                      <button className="border rounded-md poppins flex gap-10">
                        Adicionar
                        <h1>
                          {(
                            (b.price + singleTempValue) *
                            singleTempQnt
                          ).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </h1>
                      </button>
                    </div>
                  </div>
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
