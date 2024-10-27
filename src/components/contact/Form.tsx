import { actions } from 'astro:actions';
import {
  useEffect,
  useReducer,
  useRef,
  useState,
  type ChangeEvent,
} from 'react';
import { reducer, initState } from '@components/contact/reducer';
import ReCAPTCHA from 'react-google-recaptcha';
import './form.css';

export const Form = () => {
  const [state, dispatch] = useReducer(reducer, {}, initState);
  const [isClient, setIsClient] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: 'SET_FORM', payload: e });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (recaptchaRef.current) {
      const recaptchaToken = await recaptchaRef.current.executeAsync();

      const form = new FormData(e.target as HTMLFormElement);
      form.append('recaptchaToken', recaptchaToken as string);
      const { data, error } = await actions.sendForm(form);
      if (error) {
        dispatch({ type: 'SET_ERROR' });
        return;
      }
      dispatch({ type: 'SET_SUCCESS' });
      return;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'RESET_ERROR' });
    }, 3000);
  }, [state.error, state.success]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <form className="contactForm" onSubmit={onSubmitHandler}>
      <div className="input-group w-full relative mb-6 pt-2">
        <label
          className="absolute top-4 left-3 font-p text-3xl text-lightGray transition-all"
          htmlFor="name"
        >
          Name
        </label>

        <input
          className="w-full bg-transparent border-b-[1px] border-lightGray outline-none py-2 px-4 text-lightGray"
          type="text"
          id="name"
          name="name"
          onChange={onChangeHandler}
          value={state.form.name}
          placeholder=" "
          required
        />
      </div>

      <div className="input-group w-full relative mb-6 pt-2">
        <label
          className="absolute top-4 left-3 font-p text-3xl text-white transition-all"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full bg-transparent border-b-[1px] border-lightGray outline-none py-2 px-4 text-white"
          type="email"
          id="email"
          name="email"
          onChange={onChangeHandler}
          value={state.form.email}
          placeholder=" "
          required
        />
      </div>

      <div className="input-group w-full relative mb-8 pt-2">
        <label
          className="absolute top-4 left-3 font-p text-3xl text-white transition-all"
          htmlFor="phone"
        >
          Telephone
        </label>
        <input
          className="w-full bg-transparent border-b-[1px] border-lightGray outline-none py-2 px-4 text-white"
          type="number"
          min="9"
          pattern="^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$"
          id="phone"
          name="telephone"
          onChange={onChangeHandler}
          value={state.form.telephone}
          placeholder=" "
        />
      </div>

      <div className="w-full mb-6">
        <label
          className="top-12 left-3 font-p text-xl text-white mb-8 px-3"
          htmlFor="subject"
        >
          Subject
        </label>
        <select
          className="w-full bg-transparent border-b-[1px] outline-none text-white border-lightGray px-3"
          id="subject"
          name="subject"
          value={state.form.subject}
          onChange={onChangeHandler}
          required
        >
          <option value="job offer">Job offer</option>
          <option value="business inquiry">Business inquiry</option>
          <option value="collaboration">Collaboration</option>
        </select>
      </div>

      <div className="w-full mb-6">
        <label
          className="top-12 left-3 font-p text-xl text-white mb-8 px-3"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="w-full outline-none text-white bg-transparent border-b-[1px] resize-none  px-3"
          id="message"
          name="message"
          value={state.form.message}
          onChange={onChangeHandler}
          required
        ></textarea>
      </div>

      <div className="mb-6 h-8">
        {state.success && (
          <p className="state-message text-blue">✅ Message was send</p>
        )}
        {state.error && (
          <p className="state-message text-red-600">
            ❌ An error occurred, please try again
          </p>
        )}
      </div>

      {isClient && (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LdBMGsqAAAAAEhRzhQXSryid-hu7cCVHZms9qPM"
          size="invisible"
        />
      )}

      <button
        className="w-full border-blue hover:bg-blue border-2 text-blue hover:text-white rounded-3xl py-4 uppercase font-bold font-p shadow-md"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
