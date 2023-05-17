"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../utils/cn";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./Command";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "./Button";
import { ScrollArea } from "./ScrollArea";

export function Combobox({ items, placeholder, onChange, defaultValue }) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(defaultValue || "");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant='outline' role='combobox' aria-expanded={open} className='min-w-[200px] w-fit justify-between bg-background'>
					{value ? items.find((item) => item === value) : placeholder}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					<CommandInput placeholder={placeholder} />
					<CommandEmpty>No items found.</CommandEmpty>
					<ScrollArea className='h-72 bg-background'>
						<CommandGroup>
							{items.map((framework) => (
								<CommandItem
									key={framework}
									onSelect={(currentValue) => {
										const selectedItem = items.find((item) => item.toLowerCase() === currentValue);
										setValue(selectedItem === value ? "" : selectedItem);
										setOpen(false);
										onChange?.(selectedItem === value ? "" : selectedItem);
									}}
								>
									<Check className={cn("mr-2 h-4 w-4", value === framework ? "block" : "hidden")} />
									{framework}
								</CommandItem>
							))}
						</CommandGroup>
					</ScrollArea>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
