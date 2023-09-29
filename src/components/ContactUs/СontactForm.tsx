"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import cn from "classnames";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
	firstname: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	lastname: z.string().min(2, {
		message: "Lastname must be at least 2 characters.",
	}),
	email: z.string().email(),
	phone: z.string().min(9, {
		message: "Username must be at min 9 characters.",
	}),
	type: z.enum(["1", "2", "3", "4"], {
		required_error: "You need to select a notification type.",
	}),
	message: z
		.string()
		.min(10, {
			message: "Bio must be at least 10 characters.",
		})
		.max(160, {
			message: "Bio must not be longer than 30 characters.",
		}),
})

export function ContactForm() {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			phone: "",
			type: "4",
			message: ""
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)

		form.reset({
			firstname: "",
			lastname: "",
			email: "",
			phone: "",
			type: "1",
			message: ""
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="grid md:grid-cols-2 grid-cols-1 gap-10">
					<FormField
						control={form.control}
						name="firstname"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs text-gray-400 focus:text-opacity-0">First Name</FormLabel>
								<FormControl>
									<Input className="border-t-0 border-x-0 focus-visible:ring-0 border-b-gray-400 focus:border-black rounded-none" placeholder="" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastname"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs text-gray-400">Last Name</FormLabel>
								<FormControl>
									<Input className="border-t-0 border-x-0 focus-visible:ring-0 border-b-gray-400 focus:border-black rounded-none" placeholder="" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs text-gray-400">Email</FormLabel>
								<FormControl>
									<Input className="border-t-0 border-x-0 focus-visible:ring-0 border-b-gray-400 focus:border-black rounded-none" placeholder="" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs text-gray-400">Phone Number</FormLabel>
								<FormControl>
									<Input className="border-t-0 border-x-0 focus-visible:ring-0 border-b-gray-400 focus:border-black rounded-none" placeholder="" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="flex flex-col gap-11">
					<FormField
						control={form.control}
						name="type"
						render={({ field }) => (
							<FormItem className="space-y-3">
								<FormLabel className="font-bold text-sm">Select Subject?</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className="md:flex grid grid-cols-2 gap-5"
									>
										<FormItem className="space-x-3 space-y-0">
											<FormControl>
												<RadioGroupItem value="1" className={cn("bg-gray-400 border-none focus:bg-black focus:text-white",
													{
														"bg-black text-white": field.value === "1",
													})} />
											</FormControl>
											<FormLabel className="font-normal">
												General Inquiry
											</FormLabel>
										</FormItem>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormControl>
												<RadioGroupItem value="2" className={cn("bg-gray-400 border-none focus:bg-black focus:text-white",
													{
														"bg-black text-white": field.value === "2",
													})} />
											</FormControl>
											<FormLabel className="font-normal">
												General Inquiry
											</FormLabel>
										</FormItem>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormControl>
												<RadioGroupItem value="3" className={cn("bg-gray-400 border-none focus:bg-black focus:text-white",
													{
														"bg-black text-white": field.value === "3",
													})} />
											</FormControl>
											<FormLabel className="font-normal">General Inquiry</FormLabel>
										</FormItem>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormControl>
												<RadioGroupItem value="4" className={cn("bg-gray-400 border-none focus:bg-black focus:text-white",
													{
														"bg-black text-white": field.value === "4",
													})} />
											</FormControl>
											<FormLabel className="font-normal">General Inquiry</FormLabel>
										</FormItem>
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs text-gray-400">Message</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Write your message.."
										className="border-t-0 border-x-0 focus-visible:ring-0 border-b-gray-400 focus:border-black rounded-none resize-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="w-full flex justify-end">
					<Button className="md:w-max w-full" type="submit">Send Message</Button>
				</div>
			</form>
		</Form>
	)
}
