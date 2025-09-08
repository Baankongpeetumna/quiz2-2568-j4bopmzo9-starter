import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Input
} from "@mantine/core";



interface AddFoodModalProps {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};



export default function AddModalProps({
  opened,
  onClose,
  onAdd,
}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!name.trim() || !quantity || !price) return;
    onAdd(name, quantity, price);
    setName("");
    setPrice(null);
    setQuantity(null);
    onClose();
  };



  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    <Modal opened={opened} onClose={onClose} title="Add Task">
      <Stack>
        {/* TextInput, Textarea, Date */}
        <TextInput
      label="Name of item"
      withAsterisk
      description="Name of item"
      error={!name.trim() && "Name of item is required"}
      placeholder="e.g.,rice,fish"
      value={name}
      onChange={(e)=>setName(e.currentTarget.value)}
    />
    <NumberInput
      label="Price per dish"
      description="Price per dish"
      placeholder="Input placeholder"
    />
    <NumberInput
      label="Quantity"
      description="Quantity"
      placeholder="Input placeholder"
    />


        <Button onClick={handleSubmit}>Save</Button>
      </Stack>
    </Modal>

  );
}
