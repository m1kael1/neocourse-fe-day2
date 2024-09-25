import SigninForm from "../components/form/sign-in-form";

const Signin = () => {
  return (
    <section className='grid grid-cols-2 h-screen p-10 gap-10'>
      <div className='w-full max-h-screen overflow-hidden '>
        <img
          className='w-full h-full object-cover rounded-3xl'
          src='https://www.linearity.io/blog/content/images/2023/11/childrens-book-illustrations-cover-1.png'
          alt=''
        />
      </div>
      <SigninForm />
    </section>
  );
};

export default Signin;
