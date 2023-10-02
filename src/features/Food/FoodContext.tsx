import { createContext, useState, useCallback, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";

interface FoodContextData {
    getFood: () => void;
    foods: Food[];
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    selectedFood: boolean | selectedFood;
    setSelectedFood: React.Dispatch<React.SetStateAction<boolean | selectedFood>>;
    handleOpen: () => void;
    onClose: () => void;
    isOpen: boolean;
  }
  

export const FoodContext = createContext<FoodContextData | undefined>(undefined);

interface Food {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  categories: string[];
}

interface selectedFood {
  detail: boolean;
}

interface FoodsProviderProps {
    children: React.ReactNode
}

function FoodsProvider({ children }: FoodsProviderProps) {
  const [foods, setFoods] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFood, setSelectedFood] = useState<selectedFood | boolean>(
    false
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
    setSelectedFood(true);
  };

  const getFood = useCallback(() => {
    axios
      .get("http://localhost:9000/foods")
      .then((res) => {
        setIsLoading(true);
        setFoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 200);
      });
  }, [])

  useEffect(() => {
    getFood();
  }, [getFood]);

  return (
    <FoodContext.Provider
      value={{
        getFood,
        foods,
        isLoading,
        setIsLoading,
        selectedFood,
        setSelectedFood,
        handleOpen,
        onClose,
        isOpen,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}


export { FoodsProvider };