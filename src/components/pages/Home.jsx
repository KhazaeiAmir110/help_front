import {useState} from "react";

import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import {LineChart} from '@mui/x-charts/LineChart';
import {FilledInput, FormControl, InputAdornment, InputLabel} from "@mui/material";

import CalculatorService from "../../services/CalculatorService.js";
import axios from "axios";

/**
 * A component that manages the state and calculations for a gold pricing calculator.
 *
 * This component defines the necessary states for calculating the price of gold based on
 * the spot price, net weight, additional attachments, hallmark percentage, and markup percentage.
 * It utilizes the `CalculatorService` to compute various payment components.
 *
 * @returns {JSX.Element} A React component that renders the gold pricing calculator.
 */

function Home() {
    const [spotPrice, setSpotPrice] = useState(4569694);
    const [netWeight, setNetWeight] = useState(1);
    const [attachments, setAttachments] = useState(0);
    const [hallmark, setHallmark] = useState(18);
    const [markup, setMarkup] = useState(7);

    const {
        paymentWeight,
        paymentHallmark,
        paymentMarkup,
        paymentFinal
    } = CalculatorService(spotPrice, netWeight, attachments, hallmark, markup);

    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);
    }


    return (
        <div className={"mt-40"}>
            <div
                className={"bg-white border border-gray-300 max-w-2xl w-full shadow shadow-gray-500 mx-auto mb-8 p-12 px-8"}>
                <div className="flex flex-col gap-8">
                    <div className="flex items-center justify-between">
                        <h1>نرخ طلا :</h1>
                        <FormControl className="w-4/5 ml-0 pl-8 text-sky-50" sx={{m: 1}} size="small" variant="filled">
                            <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                            <FilledInput
                                id="filled-adornment-amount"
                                startAdornment={<InputAdornment className="text-sky-50"
                                                                position="start">تومان</InputAdornment>}
                                defaultValue={spotPrice}
                                value={spotPrice}
                                onChange={(e) => setSpotPrice(e.target.value)}
                                sx={{height: "2.5rem"}}
                                className={"text-sky-50"}
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

                <div className="flex place-content-end mt-8">
                    <LoadingButton
                        color="inherit"
                        onClick={handleClick}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon className="ml-2"/>}
                        variant="contained"
                    >
                        صدورفاکتور
                    </LoadingButton>
                </div>
            </div>


            {/*component Calculator*/}
            <div
                className="mt-10 bg-white border border-gray-300 max-w-2xl w-4/5 shadow shadow-gray-500 mx-auto mb-8 p-4">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-around">
                        <h1>نرخ طلا :</h1>
                        <FormControl className="w-1/2 ml-0 pl-8" sx={{m: 1}} size="small" variant="filled">
                            <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                            <FilledInput
                                id="filled-adornment-amount"
                                startAdornment={<InputAdornment position="start">تومان</InputAdornment>}
                                defaultValue={spotPrice}
                                value={spotPrice}
                                onChange={(e) => setSpotPrice(e.target.value)}
                                sx={{height: "2rem"}}
                            />
                        </FormControl>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[#18181b] text-xs">وزن خالص طلا:</p>
                            <FormControl className="w-1/2 ml-0 pl-8" sx={{m: 1}} size="small" variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    startAdornment={<InputAdornment position="start">گرم</InputAdornment>}
                                    defaultValue={netWeight}
                                    value={netWeight}
                                    onChange={(e) => setNetWeight(e.target.value)}
                                    sx={{height: "2rem"}}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <p className="text-[#18181b] text-xs">اجرت ساخت:</p>
                            <FormControl className="w-1/2 ml-0 pl-8" sx={{m: 1}} size="small" variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                    defaultValue={hallmark}
                                    value={hallmark}
                                    onChange={(e) => setHallmark(e.target.value)}
                                    sx={{height: "2rem"}}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <p className="text-[#18181b] text-xs">سود فروش:</p>
                            <FormControl className="w-1/2 ml-0 pl-8" sx={{m: 1}} size="small" variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                    defaultValue={markup}
                                    value={markup}
                                    onChange={(e) => setMarkup(e.target.value)}
                                    sx={{height: "2rem"}}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <p className="text-[#18181b] text-xs">ملحقات:</p>
                            <FormControl className="w-4/5 ml-0 pl-8" sx={{m: 1}} size="small" variant="filled">
                                <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                                <FilledInput
                                    id="filled-adornment-amount"
                                    startAdornment={<InputAdornment position="start">تومان</InputAdornment>}
                                    defaultValue={attachments}
                                    value={attachments}
                                    onChange={(e) => setAttachments(e.target.value)}
                                    sx={{height: "2rem"}}
                                />
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div
                    className={"mt-6 p-3 bg-[#52525b] rounded-xl w-full h-full text-sky-50"}>

                    <div className="flex flex-col">
                        <div className="flex justify-between text-[15px]">
                            <p>قیمت نهایی محصول:</p>
                            <p>{paymentFinal}<span className="mr-1 text-[#c7c7c7] text-[12px] font-semibold">تومان</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-[#c7c7c7] text-[9px]">قیمت طلا + اجرت ساخت + سود + ملحقات</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*component Chart*/}
            <div
                className="mt-10 bg-white border border-gray-300 max-w-2xl w-4/5 shadow shadow-gray-500 mx-auto mb-8 p-4">
                <LineChart
                    xAxis={[{data: [1, 2, 3, 3.5, 4, 4.1, 4.2, 4.3, 9, 10]}]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 0, 2, 3, 22, 8.5],
                            area: {
                                gradient: true,
                                colors: ['#FF6384', '#FF9F40'], // رنگ‌های گرادیانت
                                areaColor: 'rgba(255, 99, 132, 0.2)', // رنگ ناحیه
                            },
                            color: '#FF6384', // رنگ خط
                            point: {
                                size: 50,
                                color: '#FF6384', // اندازه و رنگ نقاط
                            },
                        },
                    ]}
                    width={600}
                    height={400}
                    margin={'100'}
                    title="My Beautiful Line Chart" // عنوان چارت
                    xLabel="X-axis Label" // برچسب محور X
                    yLabel="Y-axis Label" // برچسب محور Y
                />
            </div>
        </div>
    );
}

export default Home;