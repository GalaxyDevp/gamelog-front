import { Collection, Label, ListBox, Select } from "@heroui/react";

const SelectCustom = ({
  label,
  value,
  items,
  setValue,
  className = "w-full",
}: {
  label: string;
  value: number;
  items: { id: number; label: string }[];
  setValue: (value: number) => void;
  className?: string;
}) => {
  return (
    <Select
      variant="secondary"
      className={className}
      placeholder="Select one"
      value={value}
      onChange={(val: number) => setValue(val)}
    >
      <Label>{label}</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <Collection items={items}>
            {(item) => (
              <ListBox.Item key={item.id} id={item.id} textValue={item.label}>
                {item.label}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            )}
          </Collection>
        </ListBox>
      </Select.Popover>
    </Select>
  );
};
export default SelectCustom;
