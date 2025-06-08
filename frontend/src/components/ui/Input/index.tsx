import styles from './index.module.scss';
import type { UseFormRegister, RegisterOptions } from 'react-hook-form';

interface InputProps {
  register: UseFormRegister<any>; 
  name: string;
  options?: RegisterOptions; 
  error?: string;
  [key: string]: any; // для rest параметров
}
export const Input = ({ register, name, options, error, ...rest }: InputProps) => {
	return (
		<div>
			<input {...register(name, options)} {...rest} className={styles.input} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	);
};
