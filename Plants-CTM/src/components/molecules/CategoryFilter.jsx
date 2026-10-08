import CheckBox from "../atoms/CheckBox";

export default function CategoryFilter({ categorias, seleccionadas, onToggle }) {
    return(
        <div>
            <h6 className="fw-blod mb-3">Filtros</h6>
            {categorias.map((cat) =>(
                <CheckBox
                    key={cat}
                    label={cat}
                    checked={seleccionadas.includes(cat)}
                    onChange={() => onToggle(cat)}
                />
            ))}
        </div>
    );
 
}