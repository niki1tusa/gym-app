import { Layout } from '../../components/Layout';
import { Input } from '../../components/ui/Input';
import { set, useForm, type SubmitHandler } from 'react-hook-form';
import { Button } from '../../components/ui/Button';
import { Loader } from '../../components/Loader';
import styles from './index.module.scss';
import { useState } from 'react';
interface FormInputType {
	email: string;
	password?: number;
}
const isLoading = true;
const isLoadingAuth = true;
export const AuthPage = () => {
	const [type, setType] = useState('auth');
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormInputType>();
	const onSubmit: SubmitHandler<FormInputType> = data => console.log(data);
	console.log(errors?.email?.message);
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
						<Button clickHandler={() => setType('auth')}>Sign In</Button>
						<Button clickHandler={() => setType('reg')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	);
};
