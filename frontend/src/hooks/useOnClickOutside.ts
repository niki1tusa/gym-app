import { useEffect, useRef, useState } from 'react';

export const useOnClickOutside = (initialValue: boolean) => {
	const [isShow, setIsShow] = useState(initialValue);
	const ref = useRef<HTMLElement>(null);
	const handleClick = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsShow(false);
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClick, true);
		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	}, []);

	return { ref, isShow, setIsShow };
};
