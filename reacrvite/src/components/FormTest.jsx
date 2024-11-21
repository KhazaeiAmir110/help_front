import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";


export const FormTest = () => {
    const schema = yup.object().shape({
        name: yup.string().required("فیلد نام اجباری است"),
        email: yup.string().email().required(),
        age: yup.number().positive().required(),
        password: yup.string().required(), // Regular expression
        confirmPassword: yup.string().oneOf([yup.ref('password')]).required(),
    })
    const {register, handleSubmit, formState: {errors}} =
        useForm({resolver: yupResolver(schema)});

    const onSubmit = (value) => {
        console.log(value);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="name..." {...register("name")}/><br/>
            {errors.name && <p>{errors.name?.message}</p>}
            <input type="text" placeholder="email..." {...register("email")}/><br/>
            <input type="number" placeholder="age..." {...register("age")}/><br/>
            <input type="password" placeholder="password..." {...register("password")}/><br/>
            <input type="password" placeholder="confirm password..." {...register("confirmPassword")}/><br/>
            <button type="submit">Submit</button>
        </form>
    )
}