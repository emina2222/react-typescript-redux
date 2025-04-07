import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerFilterProps {
    startDate: Date | null;
    endDate: Date | null;
    onStartDateChange: (date: Date | null) => void;
    onEndDateChange: (date: Date | null) => void;
}

const DatePickerFilter = ({startDate, endDate, onStartDateChange, onEndDateChange}: DatePickerFilterProps) => {
    return(
        <div className="flex flex-col md:flex-row gap-4 md:items-end mb-6">
            <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">From:</label>
                <DatePicker
                    selected={startDate}
                    onChange={onStartDateChange}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Start date"
                />
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">To:</label>
                <DatePicker
                    selected={endDate}
                    onChange={onEndDateChange}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    dateFormat="yyyy-MM-dd"
                    placeholderText="End date"
                />
            </div>
        </div>
    )
}

export default DatePickerFilter;