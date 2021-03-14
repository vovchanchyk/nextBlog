import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Wrapper } from "../components/wrapper";
import { loginActionCreator } from "../store/actions/userAction";
import formValues from "../types/formTypes";
import styles from "../styles/login.module.css";

export default function Login() {
  const router = useRouter();
  const initialValues: formValues = {
    name: "",
    password: "",
  };
  const dispatch = useDispatch();
  function handle(values: formValues) {
    dispatch(loginActionCreator(values));
    router.push("/posts/newpost");
  }

  return (
    <Wrapper>
      <Formik initialValues={initialValues} onSubmit={handle}>
        <Form className={styles.form}>
          <h4 className={styles.form__title}>LOG IN</h4>
          <Field
            className={styles.form__input}
            id="name"
            name="name"
            placeholder="Name"
          />
          <Field
            className={styles.form__input}
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <button className={styles.form__btn} type="submit">
            LOG IN
          </button>
        </Form>
      </Formik>
    </Wrapper>
  );
}
