import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinFormSchema } from "../../lib/schema";
import { useForm } from "react-hook-form";
import { InputField } from "./input-field";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-5 items-center mt-24 max-w-xl mx-auto'
      >
        <h1 className='text-5xl font-bold'>Sign In</h1>
        <p className='mb-5'>Sign In to access your Neobook account</p>
        <div className='flex flex-col w-full gap-7 '>
          <InputField
            name='email'
            type='email'
            placeholder='Email'
            validation={{ required: true }}
            errors={errors}
            register={register}
          />

          <InputField
            name='password'
            type='password'
            placeholder='Password'
            validation={{ required: true }}
            errors={errors}
            register={register}
          />
        </div>
        <button
          type='submit'
          className='p-2 bg-[#515DEF] w-full text-white rounded-sm'
        >
          Sign In
        </button>
      </form>
      <p className='mt-5 text-center'>
        Don’t have an account?{" "}
        <Link to='/sign-up' className='text-[#FF8682] hover:underline'>
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export default SignInForm;
