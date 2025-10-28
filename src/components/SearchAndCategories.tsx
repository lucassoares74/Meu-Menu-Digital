import { useContext } from "react";
import { mainContext } from "./../context/MainContext";
import { ArrowDown } from "lucide-react";

function SearchAndCategories() {
  const contexto = useContext(mainContext);
  if (!contexto) return null;
  const { isCategoriesOpen, setisCategoriesOpen } = contexto;
  return (
    <div className="flex flex-col gap-4">
      <div>
        <input
          className="border w-full rounded-full p-1"
          type="text"
          placeholder="Pesquisar..."
        />
      </div>
      <div>
        <h1 className="poppins  text-2xl">Categorias</h1>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="lg:flex gap-8 justify-center text-[18px] hidden ">
          <li>Massas</li>
          <li>lanches</li>
          <li>doces</li>
          <li>Massas</li>
          <li>lanches</li>
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
              <li>Massas</li>
              <li>lanches</li>
              <li>doces</li>
              <li>bebidas</li>
              <li>pasteis</li>
              <li>outros...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchAndCategories;
