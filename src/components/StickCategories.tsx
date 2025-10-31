import { useContext } from "react";
import { mainContext } from "./../context/MainContext";

function StickCategories() {
  const contexto = useContext(mainContext);
  if (!contexto) return null;
  const { Categories, scrollToCategoria, isCategoriesVisible } = contexto;
  if (isCategoriesVisible) return null;
  return (
    <div className="p-6 sticky left-0 top-0 w-full border rounded-md bg-white">
      <ul className="flex gap-6 w-full md:justify-center poppins overflow-x-auto whitespace-nowrap">
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
  );
}

export default StickCategories;
