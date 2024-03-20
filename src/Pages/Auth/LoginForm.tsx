import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import Translate from '../../Components/Utils/Translate';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../../api/config';
import useNavigateOnSuccess from '../../Hooks/useNavigateOnSuccess';
import { useLogin } from '../../api/Auth';


const LoginForm = () => {
  const [t] = useTranslation();
  const  {mutate , isLoading , isSuccess, data } = useLogin()
    const Data = data as any;
    const navigate = useNavigate()



  const handelSubmit = (values:any)=>{
    mutate(values)
    
  }

  useEffect(() => {
    if(isSuccess){
      localStorage.setItem(TOKEN, Data?.token);
      navigate('/', { replace: true })


    }


    
  }, [isSuccess])
  
  return (
    <div className='LoginForm'>
      <nav className='Login_Nav'>
        <h5> {t("Login")} </h5>
        <div><Translate /></div>
      </nav>
      <Formik
        initialValues={{ name: 'mohammed', password: 'mohammed' ,email:"mohammed" }}
        onSubmit={handelSubmit}
      >
        <Form>
        <h4 className='Login_H4'>
              {t("Welcome back, please login to your account.")}
            </h4>
        <div className='form-outline mb-2'>
            <label className='form-label' htmlFor='email'>
              {t("email")}
            </label>
            <Field
            placeholder={t('email')}
              as='input'
              type='text'
              id='email'
              name='email'
              className='form-control '
            />
          </div>
       
          <div className='form-outline mb-2'>
            <label className='form-label' htmlFor='password'>
              {t("Password")}
            </label>
            <Field
            placeholder={t('password')}
              as='input'
              type='password'
              id='password'
              name='password'
              className='form-control '
            />
          </div>
          
         

          <button type='submit' className='btn btn-primary btn-block w-100'>
            {t("Sign in")}
          </button>
          {/* <p className='Reserved'>{t("Karim aldeen © 2022 | All Rights Reserved")}</p> */}
        </Form>

      </Formik>
    </div>

  )
}

export default LoginForm