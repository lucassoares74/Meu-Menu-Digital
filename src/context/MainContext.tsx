import { useState, createContext } from "react";

import type { ReactNode } from "react";

//Aqui Você define os tipos que serão usados nos states e funções
interface Exemple {
  exemple: string;
}

//aqui voce declara todas os tipos das states e funções que voce criar
type MainContextType = {
  exempleList: Exemple[];
  setexempleList: React.Dispatch<React.SetStateAction<Exemple[]>>;
  _delete: (id: number) => void;
  teste: string;
  setteste: React.Dispatch<React.SetStateAction<string>>;
};

//aqui você exporta o context tipado ou nulo
export const mainContext = createContext<MainContextType | null>(null);

type MainProviderProps = {
  children: ReactNode;
};

export function MainProvider({ children }: MainProviderProps) {
  const [exempleList, setexempleList] = useState<Exemple[]>([
    { exemple: "exemplo" },
  ]);
  const [teste, setteste] = useState<string>("teste");
  const [HeaderLogo, setHeaderLogo] = useState<string>("https://placehold.co/400");
  const [headerTitle, setHeaderTitle] = useState<string>("Sabor Da Massa");
  const [HeaderAdress, setHeadderAdress] = useState<string>();
  const [HeaderMinimalOrder, setHeaderMinimalOrder] = useState();
  function _delete(id: number) {
    console.log("deletado" + id);
  }

  return (
    <mainContext.Provider
      value={{ exempleList, setexempleList, _delete, teste, setteste }}
    >
      {children}
    </mainContext.Provider>
  );
}
