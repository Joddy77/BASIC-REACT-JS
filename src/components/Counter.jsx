import { useState } from "react";

export const Counter = () => {
    const [num,setNum] = useState(0);
    const minusButton = () => {
        if (num === 0) {
            return alert('Angka tidak boleh minus');
        }
        setNum((prev) => prev - 1); // this best practice for coding 
    };
    const plusButton = () => {
        setNum((prev) => prev + 1);
    };
    return (
        <div className="">
            <h1 className="text-center">Counter</h1>
            <div className="border border-black mx-auto w-[50%] h-[400px]">
                <div className="text-center text-[150px]">{num}</div>
                <div className="flex justify-center gap-[20px]">
                    <button className="bg-red-500 w-[100px] h-[100px] text-[50px] font-bold"
                    onClick={minusButton}
                    >
                        -
                    </button>
                    <button className="bg-green-400 w-[100px] h-[100px] text-[50px] font-bold"
                     onClick={plusButton}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};