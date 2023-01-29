import { PropsWithChildren, useState } from "react";

type Props = {
	checked?: boolean;
	onChange?: (event: { checked: boolean }) => void;
};

export default function ObjectiveCheckbox({
	children,
    onChange,
	checked = false,
}: PropsWithChildren<Props>) {

    const [ isChecked, setChecked ] = useState(checked)

    const handleClick = () => {
        onChange?.(({ checked: !isChecked }))
        setChecked(!isChecked)
    }

	return (
		<button onClick={ handleClick } className="bg-slate-200 border w-full border-slate-600 rounded-lg flex justify-between p-4 items-center text-left gap-2 text-sm">
			<div className="text-black">{children}</div>
			<div
				className={`w-4 h-4 border border-blue-900 rounded-sm flex-center flex-none text-base ${
					isChecked ? "bg-blue-900" : "bg-transparent"
				}`}
			>
				{isChecked && <i className="bi bi-check-lg relative right-0.5 bottom-1" />}
			</div>
		</button>
	);
}
