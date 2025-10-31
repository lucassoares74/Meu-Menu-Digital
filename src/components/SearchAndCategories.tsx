import { useContext } from "react";
import { mainContext } from "./../context/MainContext";
import { ArrowDown } from "lucide-react";

function SearchAndCategories() {
  const contexto = useContext(mainContext);

  if (!contexto) return null;
  const {
    isCategoriesOpen,
    setisCategoriesOpen,
    Categories,
    scrollToCategoria,
    refCategoriesVisibily,
  } = contexto;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <input
          className="border w-full rounded-full p-1"
          type="text"
          placeholder="Pesquisar..."
        />
      </div>
      <div ref={refCategoriesVisibily}>
        <h1 className="poppins  text-2xl">Categorias</h1>
      </div>

      <div className="flex flex-col gap-4">
        <ul className="lg:flex gap-8 justify-center text-[18px] hidden">
          {Categories.map((a, i) => {
            if (i < 5) {
              return (
                <li
                  onClick={() => {
                    scrollToCategoria(a);
                  }}
                >
                  {a}
                </li>
              );
            }
          })}
        </ul>
        <div className="flex flex-col gap-1">
          <div className="border rounded-md flex justify-center">
            <button
              onClick={() => {
                setisCategoriesOpen(!isCategoriesOpen);
              }}
              className="poppins text-[18px] flex gap-2"
            >
              {isCategoriesOpen ? (
                "Fechar"
              ) : (
                <>
                  Categorias <ArrowDown></ArrowDown>
                </>
              )}
            </button>
          </div>
          <div className={isCategoriesOpen ? "" : "hidden"}>
            <ul className="flex flex-col gap-2 items-center text-[18px] border rounded-md">
              {Categories.map((a) => (
                <li
                  onClick={() => {
                    scrollToCategoria(a);
                  }}
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchAndCategories;
