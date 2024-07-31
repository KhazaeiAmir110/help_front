import './App.css';
import First from "./components/first/first";
import Modal from "./components/modal/Modal";

export default function App() {
    return (
        <div>
            <First title="Strat Props"/>

            <br/><hr/>

            <First title="End Props"/>

            <br/><hr/>

            <Modal>
                <h2>10% off Coupon Code</h2>
                <p>Use the Code OPEN-CODE</p>
            </Modal>
        </div>
    );
}
