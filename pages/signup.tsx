import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useDispatch} from 'react-redux';
import { Wrapper } from '../components/wrapper';
import {  signupActionCreator } from '../store/actions/userAction';
import formValues from '../types/formTypes';
import styles from '../styles/signup.module.css';


export default function Signup(){
const router = useRouter();
const initialValues:formValues = {
    name:'',
    password:''
}
const dispatch = useDispatch()
function handle(values:formValues){
    console.log(values)
    dispatch(signupActionCreator(values))
    router.push('/newpost')

   
}

return(
    <Wrapper>
    <Formik initialValues={initialValues} onSubmit={handle}>
        <Form className={styles.form}>
        <h4 className={styles.form__title}>SIGN UP</h4>
        <Field className={styles.form__input} id="name" name="name" placeholder="Name" />
        <Field className={styles.form__input} type="password" id="password" name="password" placeholder="password"/>
        <button className={styles.form__btn} type="submit">SIGN UP</button>
        </Form>      
    </Formik>
    </Wrapper>
 )
}