import { useFormInput } from "./utils";

export const useSignupFields = () => {

    return [
        {
            id: "first name",
            label: "First Name",
            required: false,
            input: {

                props: {

                    type: "text",
                    placeholder: "Ngoc"
                },
                state: useFormInput("")
            }
        },
        {
            id: "last name",
            label: "Last Name",
            required: false,
            input: {

                props: {

                    type: "text",
                    placeholder: "Nguyen"
                },
                state: useFormInput("")
            }
        },
        {
            id: "email",
            label: "Email",
            required: true,
            input: {

                props: {

                    type: "email",
                    placeholder: "Abcd@gmail.com"
                },
                state: useFormInput("")
            }
        },
        {
            id: "password",
            label: "Password",
            required: true,
            input: {

                props: {

                    type: "password",
                    placeholder: "*********"
                },
                state: useFormInput("")
            }
        },
        {
            id: "confirm password",
            label: "Confirm Password",
            required: true,
            input: {

                props: {

                    type: "password",
                    placeholder: "*********"
                },
                state: useFormInput("")
            }
        }
    ];
}

export const useLoginFields = () => {

    return [

        {
            id: "email",
            label: "Email",
            required: true,
            input: {

                props: {
                    type: "email",
                    placeholder: "Abcd@gmail.com"
                },
                state: useFormInput("")
            }
        },
        {
            id: "password",
            label: "Password",
            required: true,
            input: {

                props: {
                    type: "password",
                    placeholder: "*******"
                },
                state: useFormInput("")
            }
        }
    ];
}
export const useCreateProfileFields = () => {

    return [

        {
            id: "username",
            label: "UserName",
            required: true,
            input: {

                props: {
                    type: "text",
                    placeholder: "Thanh Ngoc"
                },
                state: useFormInput("")
            }
        }
    ];
}