import React, {useState} from 'react';

import Notice from './notice'
import LoginForm from './loginform';

const Login = () => {
	const [noticeOptions, setNoticeOptions] = useState({view: false})
	console.log(noticeOptions)
	if(noticeOptions.view) {
		return (
			<>
				<Notice heading={noticeOptions.heading} message={noticeOptions.message} variant={noticeOptions.variant}   />
				<LoginForm setNoticeStateFunction={setNoticeOptions} />
			</>
		)
		
	}
	else {
		return (
			<LoginForm setNoticeStateFunction={setNoticeOptions} />
		)
	}
}

export default Login