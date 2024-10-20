import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { borrowBook, deleteBook, editBook, getBooks, getBorrowsByUser, postBook, returnBook } from "../api/book";
import useAuth from "./use-auth";

export function useBook() {
  const queryClient = useQueryClient();
  const { data: authUserData } = useAuth();

  const bookQuery = useQuery({
    queryFn: getBooks,
    queryKey: ["books"],
  });

  const postBookMutation = useMutation({
    mutationFn: postBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"]
      });
    }
  })


  const borrowBookMutation = useMutation({
    mutationFn: borrowBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"]
      });
    }
  })

  const borrowBookQuery = useQuery({
    queryFn: () => getBorrowsByUser(authUserData?.user?.ID),
    queryKey: ["borrows"],
  })

  const returnBookMutation = useMutation({
    mutationFn: returnBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books", "borrows"]
      });
    }
  })

  const editBookMutation = useMutation({
    mutationFn: editBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"]
      });
    }
  })

  const deleteBookMutation = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"]
      });
    }
  })

  return { bookQuery, postBookMutation, borrowBookMutation, borrowBookQuery, returnBookMutation, editBookMutation, deleteBookMutation };
};