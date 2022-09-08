import { FC } from "react";
import { Link } from "react-router-dom";
import MotionDiv from "../components/MotionDiv";

interface IError {
    message: string;
    status: number;
}

const Error: FC<IError> = ({ message, status }) => {
    return (
        <div className="container">
            <div className="error">
                <div className="error--inner">
                    <div className="error--code">{status}</div>
                    <MotionDiv className="error--text">
                        <h1 className="error--title">{message}</h1>
                        <Link className="btn" to="/">
                            Return to the homepage
                        </Link>
                    </MotionDiv>
                </div>
            </div>
        </div>
    )
}

export default Error