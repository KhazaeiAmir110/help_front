import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";
import {useEffect, useState} from "react";

function Home() {


    const [spotPrice, setSpotPrice] = useState(4569694); // نرخ طلا

    const [netWeight, setNetWeight] = useState(1); // وزن خالص
    const [attachments, setAttachments] = useState(0);

    const [hallmark, setHallmark] = useState(18); // اجرت ساخت
    const [markup, setMarkup] = useState(7); // سود فروش


    // payments
    const [paymentWeight, setPaymentWeight] = useState(0);
    const [paymentHallmark, setPaymentHallmark] = useState(0);
    const [paymentMarkup, setPaymentMarkup] = useState(0);
    const [paymentFinal, setPaymentFinal] = useState(0);


    function Services(spotPrice, netWeight, attachments, hallmark, markup) {
        const payment_weight = Math.ceil(spotPrice * netWeight);
        const payment_hallmark = Math.ceil((hallmark / 100) * payment_weight);
        const payment_markup = Math.ceil((payment_weight + payment_hallmark) * (markup / 100));
        const payment_final = payment_weight + payment_hallmark + payment_markup;

        setPaymentWeight(payment_weight);
        setPaymentHallmark(payment_hallmark);
        setPaymentMarkup(payment_markup);
        setPaymentFinal(payment_final);
    }

    useEffect(() => {
        Services(spotPrice, netWeight, attachments, hallmark, markup);
    }, [spotPrice, netWeight, attachments, hallmark, markup]);


    return (
        <div className={"mt-40"}>
            <div
                className={"bg-white border border-gray-300 max-w-2xl w-full shadow shadow-gray-500 mx-auto mb-8 p-12 px-8"}>
                <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                        <h1>نرخ طلا :</h1>
                        <FormControl className="w-4/5 ml-0 pl-8" sx={{m: 1}} size="small" variant="filled">
                            <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                            <FilledInput
                                id="filled-adornment-amount"
                                startAdornment={<InputAdornment position="start">تومان</InputAdornment>}
                                defaultValue={spotPrice}
                            />
                        </FormControl>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h1>وزن خالص طلا:</h1>
                            <FormControl className="w-4/5 ml-0 pl-8" sx={{m: 1}} size="small" variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    startAdornment={<InputAdornment position="start">گرم</InputAdornment>}
                                    defaultValue={netWeight}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <h1>ملحقات:</h1>
                            <FormControl className="w-4/5 ml-0 pl-8" sx={{m: 1}} size="small" variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    startAdornment={<InputAdornment position="start">تومان</InputAdornment>}
                                    defaultValue={attachments}
                                />
                            </FormControl>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h1>اجرت ساخت:</h1>
                            <FormControl className="w-4/5 ml-0 pl-8" sx={{m: 1}} size="small" variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                    defaultValue={hallmark}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <h1>سود فروش:</h1>
                            <FormControl className="w-4/5 ml-0 pl-8" sx={{m: 1}} size="small" variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                    defaultValue={markup}
                                />
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div
                    className={"mt-8 p-8 bg-[#9a8450] rounded-3xl w-full h-full text-sky-50"}>

                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <h1 className="text-lg">قیمت نهایی محصول:</h1>
                            <h1>{paymentFinal}<span className="mr-1 text-[#c7c7c7] text-xs font-semibold">تومان</span>
                            </h1>
                        </div>
                        <div>
                            <h2 className="text-[#c7c7c7] text-xs">قیمت طلا + اجرت ساخت + سود + ملحقات</h2>
                        </div>
                    </div>
                    <div className="mt-2 bg-[#c7c7c7] w-full h-[0.5px]"/>

                    <div className="mt-5 flex flex-col">
                        <div className="flex justify-between">
                            <h1 className="text-sm">قیمت طلای محصول:</h1>
                            <h1>{paymentWeight}<span className="mr-1 text-[#c7c7c7] text-xs font-semibold">تومان</span>
                            </h1>
                        </div>
                        <div>
                            <h2 className="text-[#c7c7c7] text-xs">وزن ✕ نرخ روز طلا</h2>
                        </div>
                    </div>
                    <div className="mt-2 bg-[#c7c7c7] w-full h-[0.5px]"/>

                    <div className="mt-5 flex flex-col">
                        <div className="flex justify-between">
                            <h1 className="text-sm">اجرت ساخت:</h1>
                            <h1>{paymentHallmark}<span
                                className="mr-1 text-[#c7c7c7] text-xs font-semibold">تومان</span></h1>
                        </div>
                        <div>
                            <h2 className="text-[#c7c7c7] text-xs">قیمت طلا ✕ 18 %</h2>
                        </div>
                    </div>
                    <div className="mt-2 bg-[#c7c7c7] w-full h-[0.5px]"/>

                    <div className="mt-5 flex flex-col">
                        <div className="flex justify-between">
                            <h1 className="text-sm">سود فروش طلا:</h1>
                            <h1>{paymentMarkup}<span className="mr-1 text-[#c7c7c7] text-xs font-semibold">تومان</span>
                            </h1>
                        </div>
                        <div>
                            <h2 className="text-[#c7c7c7] text-xs">(قیمت طلا + اجرت ساخت) ✕ 7 %</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;


/*
* <form className="mt-0 block isolate" action="https://saatchico.com/calculator" method="POST">
                    <input type="hidden" name="_token" value="hkPpYGcOHMkuNyAPKaNC27ZmemMqJyQjS9ywD4A6"/>
                    <div className="form-group">
                        <div className={"flex flex-wrap -mx-4"}>
                            <div className={"relative mt-2.5 flex justify-between mb-7"}>
                                <div className={"flex flex-col gap-8"}>
                                    <div className={"relative pr-0 pl-0 w-full"}>
                                        <label htmlFor="carat" className="pt-3 mt-1">نرخ طلا:</label>
                                    </div>
                                    <div className={"relative col-md-8 w-full"}>
                                        <input type="text"
                                               className={"w-full h-[43px] border border-gray-300 rounded-md text-gray-800 p-1 pl-52 text-sm"}
                                               id="carat"
                                               name="carat_price" inputMode="numeric" value="4546609" required=""
                                               maxLength="19" data-parsley-id="5"/>
                                        <span
                                            className={"absolute left-[1px] bottom-[1px] h-[41px] flex items-center px-8 border-r border-gray-300 rounded-l-md"}>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4"></div>
                        <div className="flex flex-wrap -mx-4"></div>
                    </div>
                </form>
                * */