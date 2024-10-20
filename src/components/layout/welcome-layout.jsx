const WelcomeLayout = ({ children }) => {
  return (
    <section className='md:grid grid-cols-2 h-screen p-10 gap-10 '>
      <div className='w-full max-h-screen overflow-hidden '>
        <img
          className='w-full h-full object-cover rounded-3xl hidden md:block'
          src='https://www.linearity.io/blog/content/images/2023/11/childrens-book-illustrations-cover-1.png'
          alt=''
        />
      </div>
      {children}
    </section>
  );
};

export default WelcomeLayout;
