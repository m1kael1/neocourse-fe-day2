import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { borrowBook, getBooks, postBook } from "../api/book";

export function useBook() {
  const queryClient = useQueryClient();

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

  return { bookQuery, postBookMutation, borrowBookMutation }
};