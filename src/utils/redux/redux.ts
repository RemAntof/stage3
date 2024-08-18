import {
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface FormDataState {
  name: string;
  email: string;
  age: number | null;
  gender: string;
  country: string;
  picture: string;
  terms: boolean;
  password: string;
}

const initialState: FormDataState = {
  name: '',
  email: '',
  age: null,
  gender: '',
  country: '',
  picture: '',
  terms: false,
  password: '',
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState: [
    'USA',
    'Canada',
    'Mexico',
    'Germany',
    'Australia',
    'Poland',
    'Belarus',
  ], // Add more countries as needed
  reducers: {},
});

const uncontrolledFormDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    saveUncontrolledFormData: (
      state,
      action: PayloadAction<FormDataState>
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { saveUncontrolledFormData } =
  uncontrolledFormDataSlice.actions;

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    uncontrolledFormData: uncontrolledFormDataSlice.reducer,
  },
});

export default store;
