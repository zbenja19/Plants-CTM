import  {Form } from "react-bootstrap";
export default function SearchInput({ value, onChange,placeholder }) {
  return (
    <Form.Control
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}