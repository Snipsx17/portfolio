export const reducer = (
  state: { form: any; error: boolean; success: boolean },
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case 'SET_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.target.name]: action.payload.target.value,
        },
      };
    case 'SET_SUCCESS':
      return {
        form: {
          name: '',
          email: '',
          telephone: '',
          subject: '',
          message: '',
        },
        success: true,
        error: false,
      };
    case 'SET_ERROR':
      return { ...state, error: true, success: false };
    default:
      return state;
  }
};

export const initState = () => ({
  form: {
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  },
  success: false,
  error: false,
});
