import { mainContext } from "./../context/MainContext";
import { useContext } from "react";

function Products() {
  const contexto = useContext(mainContext);
  if (!contexto) return null;
  const {
    Categories,
    _filter,
    categoriaRefs,
    setsingleTempId,
    setisSingleOpen,
  } = contexto;
  return (
    <div>
      <ul>
        {Categories.map((a) => {
          return (
            <li>
              <div>
                <h1 ref={categoriaRefs.current[a]} className="text-2xl poppins">
                  {a}
                </h1>
                <ul className="grid md:grid-cols-2 gap-2">
                  {_filter(a).map((b) => {
                    return (
                      <li
                        onClick={() => {
                          setsingleTempId(b.id);
                          setisSingleOpen(true);
                        }}
                        className="border rounded-md p-1"
                      >
                        <div className="flex gap-1">
                          <div>
                            <img className="" src={b.img} alt="" />
                          </div>
                          <div className="flex flex-col gap-1 w-[200px] items-center">
                            <h1 className="poppins">{b.title}</h1>
                            <h1 className="poppins text-[12px] text-slate-400  tracking-tighter">
                              {b.description}
                            </h1>
                            <h1>
                              {b.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </h1>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
