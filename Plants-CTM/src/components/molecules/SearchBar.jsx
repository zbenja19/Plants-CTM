import { InputGroup} from "react-bootstrap";
import SearchInput from "../atoms/SearchInput";

export default function SearchBar({ value, onChange }) {
return (
    <InputGroup className=" search-bar mb-3">
        <InputGroup.Text>🔍</InputGroup.Text>
        <SearchInput value={value} onChange={onChange} placeholder="Buscar productos..." />
    </InputGroup>
);    
}