import { Pencil, X } from "lucide-react";
import { useState } from "react";
import { InputField } from "./input-field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addBookFormSchema } from "../../lib/schema";
import { useBook } from "../../hooks/use-book";

const EditBookForm = (props) => {
  const { Title, Description, Author, Year, ImageURI, Genre } = props;
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const { editBookMutation } = useBook();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(addBookFormSchema),
    defaultValues: {
      title: Title,
      description: Description,
      author: Author,
      year: Year,
      image_uri: ImageURI,
      genre: Genre,
    },
  });

  const onSubmit = (data) => {
    editBookMutation.mutate(
      {
        bookId: props.ID,
        bookData: data,
      },
      {
        onSuccess: () => {
          alert("Book updated successfully");
          reset();
          closeModal();
        },
      }
    );
  };

  return (
    <div>
      <button
        onClick={openModal}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        <Pencil size={20} />
      </button>

      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-lg relative'>
            <button
              className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            <h2 className='text-lg font-semibold mb-4'>Edit Book</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <InputField
                className='h-12'
                label='Title'
                name='title'
                type='text'
                placeholder='Book Title'
                register={register}
                errors={errors}
                validation={{ required: true }}
              />
              <InputField
                className='h-12'
                label='Author'
                name='author'
                type='text'
                placeholder='Book Author'
                register={register}
                errors={errors}
                validation={{ required: true }}
              />
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Description
                </label>
                <textarea
                  rows={3}
                  name='description'
                  placeholder='Book Description'
                  className='w-full p-2 border border-gray-300 rounded-lg'
                  {...register("description")}
                />
                {errors?.description && (
                  <p className='text-red-500 mt-1'>
                    {errors.description?.message}
                  </p>
                )}
              </div>
              <InputField
                className='h-12'
                label='Genre'
                name='genre'
                type='text'
                placeholder='Genre'
                register={register}
                errors={errors}
                validation={{ required: true }}
              />
              <InputField
                className='h-12'
                label='Year'
                name='year'
                type='Number'
                placeholder='Year'
                register={register}
                errors={errors}
                validation={{ required: true }}
              />
              <InputField
                className='h-12'
                label='Image URL'
                name='image_uri'
                type='text'
                placeholder='Image URL'
                register={register}
                errors={errors}
                validation={{ required: true }}
              />
              <button
                type='submit'
                className='w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700'
              >
                Edit Book
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBookForm;
