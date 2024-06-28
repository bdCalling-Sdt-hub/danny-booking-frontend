import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    makeReservation: builder.mutation({
      query: (data) => ({
        url: `/booking`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
    getSingleReservation: builder.query({
      query: (id) => ({
        url: `/booking/${id}`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    canCelBooking: builder.mutation({
      query: (id) => ({
        url: `/booking/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useMakeReservationMutation,
  useGetSingleReservationQuery,
  useCanCelBookingMutation,
} = bookingApi;
