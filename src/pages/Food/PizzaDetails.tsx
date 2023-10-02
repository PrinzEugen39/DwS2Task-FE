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
import axios from "axios";

interface PizzaDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Food {
    name: string;
    badge: string;
    description: string;
  }

export default function PizzaDetails({ isOpen, onClose }: PizzaDetailsProps) {
  const [food, setFood] = useState< Food | undefined >();
  const { id } = useParams();

  function getFoodDetails(id: number) {
    axios
      .get(`http://localhost:9000/foods/${id}`)
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (id !== undefined) {
      const idNumber = Number(id);
      if (!isNaN(idNumber)) {
        getFoodDetails(idNumber);
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
