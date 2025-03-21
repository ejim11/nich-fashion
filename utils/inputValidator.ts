export const registrationOption = {
  fullname: {
    required: "Fullname is required",
    minLength: {
      value: 2,
      message: "Name must have at least 2 characters",
    },
    maxLength: {
      value: 98,
      message: "Name cannot be greater than 98 characters",
    },
    pattern: {
      value: /^[A-Z][a-z]+\s[A-Z][a-z]+$/i,
      message: "Fullname is required",
    },
  },
  firstName: {
    required: "First name is required",
    minLength: {
      value: 2,
      message: "Name must have at least 2 characters",
    },
    maxLength: {
      value: 98,
      message: "Name cannot be greater than 98 characters",
    },
    pattern: {
      value: /^[A-Z][a-z]+\s[A-Z][a-z]+$/i,
      message: "First name is required",
    },
  },
  lastName: {
    required: "Last name is required",
    minLength: {
      value: 2,
      message: "Last name must have at least 2 characters",
    },
    maxLength: {
      value: 98,
      message: "Last cannot be greater than 98 characters",
    },
    pattern: {
      value: /^[A-Z][a-z]+\s[A-Z][a-z]+$/i,
      message: "Last name is required",
    },
  },
  streetAddress: {
    required: "Street address is required",
  },
  stateBillingAddress: {
    required: "State Billing address is required",
  },
  cityBillingAddress: {
    required: "City Billing address is required",
  },
  streetBillingAddress: {
    required: "Street Billing address is required",
  },
  city: {
    required: "City is required",
    minLength: {
      value: 2,
      message: "City must have at least 2 characters",
    },
  },
  country: {
    required: "Country is required",
    minLength: {
      value: 2,
      message: "Country must have at least 2 characters",
    },
  },
  state: {
    required: "State is required",
    minLength: {
      value: 2,
      message: "State must have at least 2 characters",
    },
  },
  zipCode: {
    minLength: {
      value: 2,
      message: "Zip code must have at least 2 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Valid email address is required",
    },
  },
  message: {
    required: "Message is required",
    maxLength: {
      value: 150,
      message: "Message cannot be greater than 150 characters",
    },
  },
  phoneNumber: {
    required: "Phone number is required",
    pattern: {
      value: /(?:\+?(\d{1,3}))?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/,
      message: "Valid phone number is required",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters",
    },
    maxLength: {
      value: 20,
      message: "Password cannot be greater than 20 characters",
    },
    pattern: {
      value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      message:
        "Minimum eight characters, atleast one letter, number and special character",
    },
  },
};
