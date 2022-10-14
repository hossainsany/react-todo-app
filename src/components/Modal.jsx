import { useEffect, useRef } from "react";
import "./Modal.css";

export default function Modal({ children, modalHandle }) {
	let menuRef = useRef();

	useEffect(() => {
		document.addEventListener("mousedown", (event) => {
			if (!menuRef.current.contains(event.target)) {
				modalHandle();
			}
		});
	});

	return (
		<div className="modal-backdrop">
			<div className="modal" ref={menuRef}>
				{children}
				<button className="close-btn" onClick={modalHandle}>
					X
				</button>
			</div>
		</div>
	);
}
