import react from "react";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function useBrain(){
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState(0);  

    const handleNumberPress = (num) =>
    {
        setExpression((prev) => prev + num);

    };

    const handleOperatorPress = (operator) =>
    {
        if (expression === "") return;
        const lastChar = expression.slice(-1);
        if ("+-*/%".includes(lastChar)) return;
        setExpression((prev) => prev + operator);
    };

    const clear_all = () =>
    {
        setExpression("");
        setResult("");
    };
    
    const clear_entry = () =>
    {
        setExpression("");
    };

    const delete_last = () =>
    {
        setExpression((prev) => prev.slice(0, -1));
    };

   const calculate = () =>
   {
        if (expression === "") return;
        try{
            const evalResult = evaluate(expression);
            setResult(evalResult.toString());
        }
        catch (error)
        {
            setResult("Error");
        }
   };

   return {
    expression,
    result,
    handleNumberPress,
    handleOperatorPress,
    clear_entry,
    delete_last,
    clear_all,
    calculate,
   };
}

