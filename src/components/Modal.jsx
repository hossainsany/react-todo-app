import "./Modal.css";

export default function Modal({ children, modalHandle }) {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button className="close-btn" onClick={modalHandle}>
                    X
                </button>
            </div>
        </div>
    );
}
