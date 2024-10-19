import z from "zod";

const signupFormSchema = z.object({
  name: z.string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  username: z.string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be less than 20 characters" }),
  email: z.string()
    .email({ message: "Invalid email address" }),
  password: z.string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      { message: "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character" }
    )
});

const signinFormSchema = z.object({
  email: z.string()
    .email({ message: "Invalid email address" }),
  password: z.string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      { message: "Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character" }
    )
});

const addBookFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title can't be more than 100 characters"),
  author: z
    .string()
    .min(1, "Author is required")
    .max(100, "Author can't be more than 100 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(500, "Description can't be more than 500 characters"),
  genre: z.string().min(1, "Genre is required"),
  image_uri: z
    .string()
    .url("Image URL must be a valid URL"),
  year: z.coerce
    .number()
    .min(1800, "Year must be later than 1800")
    .max(new Date().getFullYear(), "Year must be this year or earlier")
});

export { signinFormSchema, signupFormSchema, addBookFormSchema };