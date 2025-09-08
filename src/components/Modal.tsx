import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Input,
  NativeSelect,
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
}

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
    if (!name.trim() || !quantity || !price || !category) return;
    onAdd(name, quantity, price, category);
    setName("");
    setPrice(0);
    setQuantity(0);
    setCategory(null);
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
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <NumberInput
          value={price}
          label="Price per dish"
          description="Price per dish"
          placeholder="0"
          onChange={setPrice}
          min={0}
          max={100}
          error={!price && "Price per dish is required"}
        />
        <NumberInput
          label="Quantity"
          description="Quantity"
          placeholder="0"
          onChange={setQuantity}
          min={0}
          max={100}
          error={!quantity&& "Quantity is required"}
        />
        <NativeSelect
          label="Category"
          onChange ={setCategory}
          description="Category"
          error={!category?.trim() && "Category is required"}
          data={["MainCourse", "Drink", "Dessert"]}
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Modal>
  );
}
