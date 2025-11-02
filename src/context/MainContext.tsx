import { useState, createContext, useRef, useEffect } from "react";
import React from "react";

import type { ReactNode } from "react";

interface Horarios {
  fromday: string;
  today: string;
  fromhour: number;
  tohour: number;
}

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  img: string;
  category: string;
}
//aqui voce declara todas os tipos das states e funções que voce criar
type MainContextType = {
  floatParaHorario: (valor: number) => string;
  _filter: (category: string) => Products[];
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
  isCategoriesOpen: boolean;
  setisCategoriesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  Categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  ProductsList: Products[];
  setProductsList: React.Dispatch<React.SetStateAction<Products[]>>;
  categoriaRefs: React.MutableRefObject<{
    [key: string]: React.RefObject<HTMLDivElement | null>;
  }>;
  scrollToCategoria: (cat: string) => void;
  isCategoriesVisible: boolean;
  setisCategoriesVisible: React.Dispatch<React.SetStateAction<boolean>>;
  refCategoriesVisibily: React.RefObject<HTMLDivElement | null>;
  isSingleOpen: boolean;
  setisSingleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  singleTempId: number;
  setsingleTempId: React.Dispatch<React.SetStateAction<number>>;
  searchValue: string;
  setsearchValue: React.Dispatch<React.SetStateAction<string>>;
};

//aqui você exporta o context tipado ou nulo
export const mainContext = createContext<MainContextType | null>(null);

type MainProviderProps = {
  children: ReactNode;
};

export function MainProvider({ children }: MainProviderProps) {
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
  const [isCategoriesOpen, setisCategoriesOpen] = useState<boolean>(false);
  const [Categories, setCategories] = useState<string[]>([
    "massas",
    "lanches",
    "doces",
    "bebidas",
    "pizzas",
    "pasteis",
    "bolos",
  ]);
  const [ProductsList, setProductsList] = useState<Products[]>([
    {
      id: 1,
      title: "Pastel de Carne",
      price: 10,
      img: "https://placehold.co/200",
      description: "Massa crocante recheada com carne moída temperada",
      category: "pasteis",
    },
    {
      id: 2,
      title: "Pastel de Queijo",
      price: 9,
      img: "https://placehold.co/200",
      description: "Recheio cremoso de queijo derretido envolto em massa fina",
      category: "pasteis",
    },
    {
      id: 3,
      title: "Pastel de Pizza",
      price: 11,
      img: "https://placehold.co/200",
      description: "Mistura de queijo, tomate e orégano em uma massa crocante",
      category: "pasteis",
    },

    // 🍕 Pizzas
    {
      id: 4,
      title: "Pizza Calabresa",
      price: 28,
      img: "https://placehold.co/200",
      description: "Calabresa fatiada com cebola e queijo mussarela",
      category: "pizzas",
    },
    {
      id: 5,
      title: "Pizza Quatro Queijos",
      price: 32,
      img: "https://placehold.co/200",
      description: "Blend de mussarela, provolone, gorgonzola e parmesão",
      category: "pizzas",
    },
    {
      id: 6,
      title: "Pizza Frango com Catupiry",
      price: 30,
      img: "https://placehold.co/200",
      description: "Frango desfiado com catupiry cremoso e queijo",
      category: "pizzas",
    },

    // 🍝 Massas
    {
      id: 7,
      title: "Espaguete ao Alho e Óleo",
      price: 20,
      img: "https://placehold.co/200",
      description: "Massa leve com alho dourado e azeite extra virgem",
      category: "massas",
    },
    {
      id: 8,
      title: "Ravioli de Ricota",
      price: 26,
      img: "https://placehold.co/200",
      description: "Massa recheada com ricota e molho de tomate fresco",
      category: "massas",
    },
    {
      id: 9,
      title: "Fettuccine Alfredo",
      price: 27,
      img: "https://placehold.co/200",
      description: "Massa com molho branco cremoso e parmesão",
      category: "massas",
    },

    // 🍔 Lanches
    {
      id: 10,
      title: "X-Bacon",
      price: 18,
      img: "https://placehold.co/200",
      description: "Hambúrguer com bacon crocante, queijo e molho especial",
      category: "lanches",
    },
    {
      id: 11,
      title: "Cachorro-Quente Tradicional",
      price: 12,
      img: "https://placehold.co/200",
      description: "Salsicha no pão com molho, batata palha e ketchup",
      category: "lanches",
    },
    {
      id: 12,
      title: "Sanduíche Natural",
      price: 14,
      img: "https://placehold.co/200",
      description: "Pão integral com frango, cenoura e maionese leve",
      category: "lanches",
    },

    // 🍰 Doces
    {
      id: 13,
      title: "Brigadeiro",
      price: 4,
      img: "https://placehold.co/200",
      description: "Doce de chocolate com leite condensado e granulado",
      category: "doces",
    },
    {
      id: 14,
      title: "Beijinho",
      price: 4,
      img: "https://placehold.co/200",
      description: "Doce de coco com leite condensado e açúcar cristal",
      category: "doces",
    },
    {
      id: 15,
      title: "Pudim de Leite",
      price: 10,
      img: "https://placehold.co/200",
      description: "Sobremesa cremosa com calda de caramelo",
      category: "doces",
    },

    // 🧃 Bebidas
    {
      id: 16,
      title: "Suco de Laranja Natural",
      price: 8,
      img: "https://placehold.co/200",
      description: "Suco fresco espremido na hora, sem açúcar",
      category: "bebidas",
    },
    {
      id: 17,
      title: "Refrigerante Cola",
      price: 6,
      img: "https://placehold.co/200",
      description: "Bebida gaseificada sabor cola, 350ml",
      category: "bebidas",
    },
    {
      id: 18,
      title: "Água com Gás",
      price: 5,
      img: "https://placehold.co/200",
      description: "Água mineral gaseificada, 500ml",
      category: "bebidas",
    },

    // 🎂 Bolos
    {
      id: 19,
      title: "Bolo de Cenoura com Chocolate",
      price: 20,
      img: "https://placehold.co/200",
      description: "Bolo fofinho com cobertura de chocolate cremosa",
      category: "bolos",
    },
    {
      id: 20,
      title: "Bolo Red Velvet",
      price: 24,
      img: "https://placehold.co/200",
      description: "Bolo vermelho com recheio de cream cheese",
      category: "bolos",
    },
    {
      id: 21,
      title: "Bolo de Coco Gelado",
      price: 22,
      img: "https://placehold.co/200",
      description: "Bolo molhadinho com leite condensado e coco ralado",
      category: "bolos",
    },
  ]);

  const categoriaRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement | null>;
  }>(
    Categories.reduce((acc, cat) => {
      acc[cat] = React.createRef<HTMLDivElement>();
      return acc;
    }, {} as { [key: string]: React.RefObject<HTMLDivElement | null> })
  );

  const scrollToCategoria = (cat: string) => {
    const ref = categoriaRefs.current[cat];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  function floatParaHorario(valor: number): string {
    const hora = Math.floor(valor);
    const minuto = Math.round((valor - hora) * 100);

    const h = hora.toString().padStart(2, "0");
    const m = minuto.toString().padStart(2, "0");

    return `${h}:${m}`;
  }

  function _filter(category: string) {
    const filtred = ProductsList.filter((a) => a.category === category);
    return filtred;
  }

  const [isCategoriesVisible, setisCategoriesVisible] = useState<boolean>(true);
  const refCategoriesVisibily = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = refCategoriesVisibily.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setisCategoriesVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10% visibilidade
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  const [isSingleOpen, setisSingleOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isSingleOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup opcional para garantir que o scroll seja reativado ao desmontar
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSingleOpen]);

  const [singleTempId, setsingleTempId] = useState<number>(0);

  const [searchValue, setsearchValue] = useState<string>("");

  return (
    <mainContext.Provider
      value={{
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
        isCategoriesOpen,
        setisCategoriesOpen,
        Categories,
        setCategories,
        ProductsList,
        setProductsList,
        _filter,
        categoriaRefs,
        scrollToCategoria,
        isCategoriesVisible,
        setisCategoriesVisible,
        refCategoriesVisibily,
        isSingleOpen,
        setisSingleOpen,
        singleTempId,
        setsingleTempId,
        searchValue,
        setsearchValue,
      }}
    >
      {children}
    </mainContext.Provider>
  );
}
