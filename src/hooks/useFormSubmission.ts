import { useRef, startTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/schemas/contact-schema";
export function useFormSubmission(
  
  submitAction: (formData: FormData) => void,
) {
   const {
    control,
    trigger,
    reset,
    formState: { errors: rhfErrors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  });

  // Ref for the form element
  const formRef = useRef<HTMLFormElement>(null);

  // Handle Submit Click
  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    // Prevent default form submission
    e.preventDefault();

    // Trigger RHF validation manually (submit)
    const isValid = await trigger();
    // If valid, submit the form to the server action using the ref
    if (isValid && formRef.current) {
     
      const formData = new FormData(formRef.current);
      startTransition(() => {
        submitAction(formData);
      });
    }
  
  };

  return { control, formRef, handleFormSubmit, rhfErrors, reset };
}
