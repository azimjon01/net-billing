import { useState } from "react";
import {
  HiddenCheckbox,
  Label,
  Slider,
  Switch,
  ToggleContainer,
} from "./ResponsibleToggle.styles";

interface ResponsibleToggleProps {
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "danger";
  label?: string;
}

const ResponsibleToggle = ({
  disabled = false,
  checked,
  defaultChecked = false,
  onChange,
  size = "sm",
  variant = "primary",
  label = "Я ответственный",
}: ResponsibleToggleProps) => {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    if (!isControlled) setInternalChecked(newChecked);
    onChange?.(newChecked);
  };
  return (
    <>
      <ToggleContainer>
        <Label disabled={disabled}>
          <HiddenCheckbox
            type="Checkbox"
            role="switch"
            aria-checked={isChecked}
            checked={isChecked}
            onChange={handleToggle}
            disabled={disabled}
          />
          <Switch
            checked={isChecked}
            disabled={disabled}
            size={size}
            variant={variant}
          >
            <Slider checked={isChecked} size={size} />
            {label}
          </Switch>
        </Label>
      </ToggleContainer>
    </>
  );
};

export default ResponsibleToggle;
