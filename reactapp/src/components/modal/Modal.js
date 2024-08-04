import './Modal.css'

export default function Modal(props) {
    return (
        <div className="modal-backdrop">
            <div className="modal" style={{
                border: '4px solid',
                borderColor: props.isSalesModal ? '#cb5e35' : '#555'
            }}>
                {props.children}
            </div>
        </div>
    )
}