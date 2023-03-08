import { forwardRef } from "react";
import { ErrorTextStyled, InputStyled, LabelStyled } from "./Input.styled";

type InputProps = {
    name: string;
    label: string;
    errors?: string;
    rest?: any;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ name, label, errors, ...rest }, ref) => {
        return (
            <div>
                <LabelStyled htmlFor={name}>{label}</LabelStyled>
                <InputStyled
                    ref={ref}
                    name={name}
                    hasError={Boolean(errors)}
                    {...rest}
                />
                {errors && <ErrorTextStyled>{errors}</ErrorTextStyled>}
            </div>
        );
    }
);

export default Input;
