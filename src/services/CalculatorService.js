import {useEffect, useState} from "react";

/**
 * A service to calculate various payment components based on the given parameters.
 *
 * This service computes the payment weight, hallmark value, markup amount, and final payment
 * based on the specified spot price, net weight, additional attachments, hallmark percentage,
 * and markup percentage.
 *
 * @param {number} [spotPrice=1] - The price per unit of the spot (default is 1).
 * @param {number} [netWeight=1] - The net weight of the item (default is 1).
 * @param {number} [attachments=0] - Additional charges or costs (default is 0).
 * @param {number} [hallmark=18] - The percentage of hallmark (default is 18).
 * @param {number} [markup=7] - The percentage markup to apply (default is 7).
 * @returns {{paymentWeight: number, paymentHallmark: number, paymentMarkup: number, paymentFinal: number}}
 * The calculated payment components, including:
 * - paymentWeight: The computed payment weight.
 * - paymentHallmark: The computed hallmark value.
 * - paymentMarkup: The computed markup amount.
 * - paymentFinal: The final calculated payment amount.
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