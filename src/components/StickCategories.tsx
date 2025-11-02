import { useContext } from "react";
import { mainContext } from "./../context/MainContext";

function StickCategories() {
  const contexto = useContext(mainContext);
  if (!contexto) return null;
  const { Categories, scrollToCategoria, isCategoriesVisible, setsearchValue } =
    contexto;
  if (isCategoriesVisible) return null;
  return (
    <div className=" sticky left-0 top-0 justify-center flex">
      <ul className="flex gap-6 md:w-[50%] md:justify-center poppins overflow-x-auto whitespace-nowrap border p-2 bg-white rounded-md">
        {Categories.map((a) => (
          <li
            onClick={() => {
              if (setsearchValue) {
                setsearchValue("");
                setTimeout(() => {
                  scrollToCategoria(a);
                }, 100);
              }

              scrollToCategoria(a);
            }}
          >
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StickCategories;
