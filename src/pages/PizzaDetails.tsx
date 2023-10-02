import {
  Button,
  Modal,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface PizzaDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  foodmodal: object;
}

interface Food {
    name: string;
    badge: string;
    description: string;
    // include other properties as needed
  }

export default function PizzaDetails({ isOpen, onClose, foodmodal }: PizzaDetailsProps) {
  const [food, setFood] = useState< Food | undefined >();
  const { id } = useParams();

  async function getPizza(id: number) {
    try {
      const res = await fetch(`http://localhost:9000/foods/${id}`);
      const data = await res.json();
      
      setFood(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (id !== undefined) {
      const idNumber = Number(id);
      if (!isNaN(idNumber)) {
        getPizza(idNumber);
      }
    }
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => {
          onClose();
          navigate(-1);
        }}
        closeOnOverlayClick={false}
      >
        <ModalContent>
          <ModalHeader>{food ? food.name : 'Loading...'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Arrival: {food ? food.badge : ""}</Text>
            <Text>{food ? food.description : 'Loading...'}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                onClose();
                navigate(-1);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
