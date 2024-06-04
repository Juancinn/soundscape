import React from "react";
import styles from "./FormInput.module.css";

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;
