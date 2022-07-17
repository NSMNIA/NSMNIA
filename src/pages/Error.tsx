import { FC } from "react";

interface IError {
    message: string;
    status: number;
}

const Error: FC<IError> = ({ message, status }) => {
    return (
        <div className="container">
            <h1>{status}</h1>
            <h2>{message}</h2>
        </div>
    )
}

export default Error