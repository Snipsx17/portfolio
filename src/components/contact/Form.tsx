import React from 'react';

export const Form = () => {
  return (
    <form action="">
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
          name="subject"
          id="subject"
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
          className="w-full outline-none text-white bg-transparent border-b-[1px] resize-none mb-6 px-3"
          id="message"
          required
        ></textarea>
      </div>
      <button
        className="w-full border-blue hover:bg-blue border-2 text-blue hover:text-white rounded-3xl py-4 uppercase font-bold font-p shadow-md"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
