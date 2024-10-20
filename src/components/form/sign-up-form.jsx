import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema } from "../../lib/schema";
import { InputField } from "./input-field";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <form
        className='flex flex-col gap-5 items-center mt-24 max-w-xl mx-auto'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-5xl font-bold'>Sign Up</h1>
        <p className='mb-5'>Sign Up to access your Neobook account</p>
        <div className='flex flex-col w-full gap-7  '>
          <InputField
            name='name'
            placeholder='Name'
            validation={{ required: true }}
            errors={errors}
            register={register}
          />

          <InputField
            name='username'
            placeholder='Username'
            validation={{ required: true }}
            errors={errors}
            register={register}
          />

          <InputField
            name='email'
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
          Sign Up
        </button>
      </form>
      <p className='mt-5 text-center'>
        Already have an account?{" "}
        <Link to='/sign-in' className='text-[#FF8682] hover:underline'>
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default SignUpForm;
