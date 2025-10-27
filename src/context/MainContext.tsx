import { useState, createContext } from "react";

import type { ReactNode } from "react";

//Aqui Você define os tipos que serão usados nos states e funções
interface Exemple {
  exemple: string;
}
interface Horarios {
  fromday: string;
  today: string;
  fromhour: number;
  tohour: number;
}
//aqui voce declara todas os tipos das states e funções que voce criar
type MainContextType = {
  exempleList: Exemple[];
  setexempleList: React.Dispatch<React.SetStateAction<Exemple[]>>;
  _delete: (id: number) => void;
  floatParaHorario: (valor: number) => string;
  teste: string;
  setteste: React.Dispatch<React.SetStateAction<string>>;
  HeaderLogo: string;
  setHeaderLogo: React.Dispatch<React.SetStateAction<string>>;
  headerTitle: string;
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
  HeaderMinimalOrder: string;
  setHeaderMinimalOrder: React.Dispatch<React.SetStateAction<string>>;
  HeaderAdress: string;
  setHeadderAdress: React.Dispatch<React.SetStateAction<string>>;
  isScheduleOpen: boolean;
  setisScheduleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  Status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  Schedule: Horarios[];
  setSchedule: React.Dispatch<React.SetStateAction<Horarios[]>>;
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
  const [HeaderLogo, setHeaderLogo] = useState<string>(
    "https://placehold.co/400"
  );
  const [headerTitle, setHeaderTitle] = useState<string>("Sabor Da Massa");
  const [HeaderAdress, setHeadderAdress] = useState<string>(
    "Rua Fernando Leite Mendes, 105 - São Sebastião Ilhéus BA45653-778"
  );
  const [HeaderMinimalOrder, setHeaderMinimalOrder] = useState<string>(
    "Pedido Minimo 18,00"
  );
  const [isScheduleOpen, setisScheduleOpen] = useState<boolean>(false);
  const [Status, setStatus] = useState<string>("Funcionando");
  const [Schedule, setSchedule] = useState<Horarios[]>([
    {
      fromday: "segunda",
      today: "quarta",
      fromhour: 18,
      tohour: 21,
    },
    {
      fromday: "quinta",
      today: "sexta",
      fromhour: 18,
      tohour: 23,
    },
    {
      fromday: "sábado",
      today: "domingo",
      fromhour: 12,
      tohour: 20,
    },
  ]);

  function floatParaHorario(valor: number): string {
    const hora = Math.floor(valor);
    const minuto = Math.round((valor - hora) * 100);

    const h = hora.toString().padStart(2, "0");
    const m = minuto.toString().padStart(2, "0");

    return `${h}:${m}`;
  }

  function _delete(id: number) {
    console.log("deletado" + id);
  }

  return (
    <mainContext.Provider
      value={{
        exempleList,
        setexempleList,
        _delete,
        teste,
        setteste,
        HeaderLogo,
        setHeaderLogo,
        headerTitle,
        setHeaderTitle,
        HeaderAdress,
        setHeadderAdress,
        HeaderMinimalOrder,
        setHeaderMinimalOrder,
        isScheduleOpen,
        setisScheduleOpen,
        Status,
        setStatus,
        Schedule,
        setSchedule,
        floatParaHorario,
      }}
    >
      {children}
    </mainContext.Provider>
  );
}
