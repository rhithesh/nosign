import { Poppins } from "next/font/google";
import { Textarea } from "@/components/ui/textarea";
const inter = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export default function Textareaa() {
	return (
		<div
			className={`   min-h-screen ${inter.className}  w-screen  flex  text-slate-700  relatve`}>
			<Textarea className=" min-h-screen   basis-full   mx-4  	 outline-none       pl-1"></Textarea>
		</div>
	);
}
