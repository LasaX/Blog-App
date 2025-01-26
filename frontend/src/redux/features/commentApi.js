import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const commentApi = createApi({
    reducerPath: "commentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/comments",
        credentials: "include",
    }),
    tagTypes: ["Comments"], // This should be an array of strings
    endpoints: (builder) => ({
        postComment: builder.mutation({
            query: (commentData) => ({
                url: "/post-comment",
                method: "POST",
                body: commentData,
            }),
            invalidatesTags: (result, error, { postId }) => [
                { type: "Comments", id: postId },
            ],
        }),
        getComments: builder.query({
            query: () => ({
                url: "/total-comments",
                method: "GET",
            }),
            providesTags: ["Comments"], // Add this for cache management
        }),
    }),
});

export const { useGetCommentsQuery, usePostCommentMutation } = commentApi;

export default commentApi;
