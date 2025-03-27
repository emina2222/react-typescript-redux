import {useState} from "react";
import '../styles/MovieStyle.css'

interface CheckboxProps {
    values: number[];
    onChange: (selectedRatings: number[]) => void;
}

const CheckboxComponent = ({values, onChange}: CheckboxProps) => {
    const [selected, setSelected] = useState<number[]>([])

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        let updated: number[]

        if (e.target.checked) {
            updated = [...selected, value]
        } else {
            updated = selected.filter(s => s !== value)
        }

        setSelected(updated)
        onChange(updated)
    }

    return (
        <div className="checkbox-wrapper-65">
            {values.map(val => (
                <label key={val} className="flex items-center gap-3 cursor-pointer select-none mb-2">
                    <input
                        type="checkbox"
                        value={val}
                        checked={selected.includes(val)}
                        onChange={handleCheckboxChange}
                        className="sr-only"
                    />
                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition
        ${selected.includes(val) ? "bg-blue-600 border-blue-600" : "border-gray-400"}`}>
                        {selected.includes(val) && (
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                <polyline
                                    points="1 5.5 4.5 9 11 1"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>
                        )}
                    </div>
                    <span className="text-sm">{val}+</span>
                </label>
            ))}
        </div>
    );
}

export default CheckboxComponent;