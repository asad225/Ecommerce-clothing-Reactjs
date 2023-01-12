import { async } from "@firebase/util";
import Button from "../button/button.component";
import './sign-up-form.styles.scss'
import { useState } from "react";
import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
// import { UserContext } from "../../context/user.context";
// import { useContext } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // const {setCurrentUser} = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!password === confirmPassword) {
      alert("passwords dont match");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user)
      await createUserDocumentFromAuth(user,{displayName})
      setFormFields(defaultFormFields)
    } catch (error) {
        console.log(error)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label='Email'
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label='Password'
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label = 'Confirm Password'
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
