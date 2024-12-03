import {useEffect, useState} from "react";

/**
 * Calculate the final payment based on various parameters.
 * @param {number} spotPrice - The price per unit of the spot.
 * @param {number} netWeight - The net weight of the item.
 * @param {number} attachments - Additional charges or costs.
 * @param {number} hallmark - The percentage of hallmark.
 * @param {number} markup - The percentage markup to apply.
 * @returns {{payment_final: number, payment_markup: number, payment_weight: number, payment_hallmark: number}} The final calculated payment.
 */
function CalculatorService(spotPrice = 1, netWeight = 1, attachments = 0, hallmark = 18, markup = 7) {
    const [paymentWeight, setPaymentWeight] = useState(0);
    const [paymentHallmark, setPaymentHallmark] = useState(0);
    const [paymentMarkup, setPaymentMarkup] = useState(0);
    const [paymentFinal, setPaymentFinal] = useState(0);


    function Services(spotPrice, netWeight, attachments, hallmark, markup) {
        const payment_weight = Math.ceil(spotPrice * netWeight);
        const payment_hallmark = Math.ceil((hallmark / 100) * payment_weight);
        const payment_markup = Math.ceil((payment_weight + payment_hallmark) * (markup / 100));
        const payment_final = payment_weight + payment_hallmark + payment_markup + Number(attachments);

        setPaymentWeight(payment_weight);
        setPaymentHallmark(payment_hallmark);
        setPaymentMarkup(payment_markup);
        setPaymentFinal(payment_final);
    }

    useEffect(() => {
        Services(spotPrice, netWeight, attachments, hallmark, markup);
    }, [spotPrice, netWeight, attachments, hallmark, markup]);

    return {paymentWeight, paymentHallmark, paymentMarkup, paymentFinal};
}

export default CalculatorService;