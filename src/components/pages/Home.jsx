import {useState} from "react";
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";

import CalculatorService from "../../services/CalculatorService.js";

function Home() {
    const [spotPrice, setSpotPrice] = useState(4569694); // نرخ طلا

    const [netWeight, setNetWeight] = useState(1); // وزن خالص
    const [attachments, setAttachments] = useState(0);

    const [hallmark, setHallmark] = useState(18); // اجرت ساخت
    const [markup, setMarkup] = useState(7); // سود فروش

    const {
        paymentWeight,
        paymentHallmark,
        paymentMarkup,
        paymentFinal
    } = CalculatorService(spotPrice, netWeight, attachments, hallmark, markup);


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
                                value={spotPrice}
                                onChange={(e) => setSpotPrice(e.target.value)}
                                sx={{height: "2.5rem"}}
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
                                    value={netWeight}
                                    onChange={(e) => setNetWeight(e.target.value)}
                                    sx={{height: "2.5rem"}}
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
                                    value={attachments}
                                    onChange={(e) => setAttachments(e.target.value)}
                                    sx={{height: "2.5rem"}}
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
                                    value={hallmark}
                                    onChange={(e) => setHallmark(e.target.value)}
                                    sx={{height: "2.5rem"}}
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
                                    value={markup}
                                    onChange={(e) => setMarkup(e.target.value)}
                                    sx={{height: "2.5rem"}}
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