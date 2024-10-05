import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <section>
      <form className='flex flex-col gap-5 items-center mt-24 min-w-xl'>
        <h1 className='text-5xl font-bold'>Sign In</h1>
        <p className='mb-5'>Sign In to access your Neobook account</p>
        <div className='flex flex-col w-full gap-7 '>
          <input
            type='email'
            name='email'
            id='email'
            className='border-2 h-14 p-2 rounded-xl'
            placeholder='Email'
          />
          <input
            type='password'
            name='password'
            id='password'
            className='border-2 h-14 p-2 rounded-xl'
            placeholder='Password'
          />
        </div>
        <button className='p-2 bg-[#515DEF] w-full text-white rounded-sm'>
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
