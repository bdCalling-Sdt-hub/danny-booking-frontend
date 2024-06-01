import { baseApi } from "../../api/baseApi";

const branchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBranch: builder.query({
      query: (id) => ({
        url: `/branch/openTime-closeTime/${id}`,
        method: "GET",
      }),
      providesTags: ["branch"],
    }),
  }),
});

export const { useGetBranchQuery } = branchApi;
