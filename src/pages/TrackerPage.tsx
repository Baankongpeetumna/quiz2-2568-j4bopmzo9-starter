import { useState } from "react";
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import Modal from "../components/Modal";

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};

const addItems = (
    items: string,
  ) => {
    const newTask: Items = {
      id: uuidv4(),
      items,
    };
    setItems((prev) => [...prev, newTask]);
  };

export default function FoodTracker() {
  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState<FoodItem[]>([]);
  const categories = ["Main Course", "Drink", "Dessert"];

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button onClick={() => setOpened(true)}>Add an item</Button>
      {/* Type additional AddFoodModal here. */}
      <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          onAdd={addItems}
        />

      <Divider my="md" />

      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{/* Type additional food card list here. */}</Stack>
    </Container>
  );
}