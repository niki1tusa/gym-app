import { Layout } from '../../components/Layout';
import { Input } from '../../components/ui/Input';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button } from '../../components/ui/Button';
import { Loader } from '../../components/Loader';
import styles from './index.module.scss';
import { useState } from 'react';
import {useMutation} from '@tanstack/react-query'
import AuthService from '../../services/auth.service';
interface FormInputType {
	email: string;
	password?: number;
}
const isLoading = true;
const isLoadingAuth = true;
export const AuthPage = () => {
  const [type, setType] = useState('login');
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputType>({mode: 'onChange'});

  const { mutate, isPending} = useMutation({
    mutationKey: ['auth'],
    mutationFn: ({ email, password }: FormInputType) => 
      AuthService.main(email, password, type),
    onSuccess: (data) => console.log('success')
  });
  const onSubmit: SubmitHandler<FormInputType> = (data) => mutate(data);
	return (
		<>
			<Layout
				heading='Sign In'
				backLink='/'
				bgImage='../../../public/images/auth-bg.png'
			/>
			<div className='wrapper-inner-page'>
				{(isLoading || isLoadingAuth) && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{ required: 'email is required' }}
						type='email'
						placeholder='Enter email'
					/>

					<Input
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{ required: 'password is required' }}
						type='password'
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign In</Button>
						<Button clickHandler={() => setType('reg')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	);
};
