import {
  configureStore,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export interface FormDataState {
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
  ],
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

const controlledFormDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    saveControlledFormData: (
      state,
      action: PayloadAction<FormDataState>
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { saveUncontrolledFormData } =
  uncontrolledFormDataSlice.actions;
export const { saveControlledFormData } =
  controlledFormDataSlice.actions;

const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    uncontrolledFormData: uncontrolledFormDataSlice.reducer,
    controlledFormData: controlledFormDataSlice.reducer,
  },
});

export default store;
