import "./../App.css";
import { Button } from "./Button";

export const FirstComponent = () => {
    return(
        <div className="wrapper-first">
            <h1>ini komponent pertama saya</h1>
            <Button name={"Masuk"}/>
        </div>
    );
};