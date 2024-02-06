import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Signup() {
	return (
		<>
			<LoginLink>Sign in</LoginLink>
			<RegisterLink>Sign up</RegisterLink>
		</>
	);
}
