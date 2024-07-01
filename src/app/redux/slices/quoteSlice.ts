import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionCurrency {
  currency: string;
  exchange_rate: number;
  is_base_currency: boolean;
  customer_currency: string;
}

interface SectionData {
  basis: string;
  unit_of_measurement: string;
  unit: number;
  rate: number;
  amount: number;
}

interface Section {
  section_name: string;
  section_number: number;
  section_currency: SectionCurrency;
  section_data: SectionData[];
}

interface QuoteState {
  id: string | null;
  quote_title: string;
  quote_date: string;
  sections: Section[];
  message: string | null;
  loading: boolean;
  error: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  step: number;
}

const initialState: QuoteState = {
  id: null,
  quote_title: "",
  quote_date: "",
  sections: [],
  message: null,
  loading: false,
  error: null,
  createdAt: null,
  updatedAt: null,
  step: 1,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    createQuoteRequest: (state, action: PayloadAction<QuoteState>) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    createQuoteSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      (state.id = action.payload._id),
        (state.quote_title = action.payload.quote_title);
      state.quote_date = action.payload.quote_date;
      state.sections = action.payload.sections;
      state.message = action.payload.message;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.error = null;
    },
    createQuoteFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },

    updateFormData: (state, action: PayloadAction<Partial<QuoteState>>) => {
      return { ...state, ...action.payload };
    },
    nextStep: (state) => {
      state.step += 1;
    },

    prevStep: (state) => {
      state.step -= 1;
    },
    resetForm: () => initialState,
  },
});

export const {
  createQuoteRequest,
  createQuoteSuccess,
  createQuoteFailure,
  updateFormData,
  nextStep,
  prevStep,
  resetForm,
} = quoteSlice.actions;

export default quoteSlice.reducer;
