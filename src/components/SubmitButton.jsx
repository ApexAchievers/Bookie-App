import { useFormStatus } from "react-dom";

export default function SubmitButton({title}){

    const {pending} = useFormStatus();

    return (
         <button
              type="submit"
              className="mt-4 p-3 bg-primary text-black font-semibold rounded-md hover:bg-secondary transition duration-300"
              disabled = {pending}
            >
              {title}
            </button>
    );
}