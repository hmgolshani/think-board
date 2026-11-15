import * as Select from "@radix-ui/react-select";
import {Check, ChevronDown} from "lucide-react";
import type {SortOption} from "../../types/note.ts";

type SortSelectProps = {
    value: SortOption
    onChange: (value: SortOption) => void
}

const options: { value: SortOption; label: string }[] = [
    {value: "newest", label: "Newest first"},
    {value: "oldest", label: "Oldest first"},
    {value: "title", label: "Title A to Z"},
];

const SortSelect = ({value, onChange}: SortSelectProps) => {
    return (
        <Select.Root value={value} onValueChange={(next) => onChange(next as SortOption)}>
            <Select.Trigger
                aria-label="Sort notes"
                className="flex h-11 w-full cursor-pointer items-center justify-between rounded-[10px] border border-line bg-white px-3.5 text-[15px] outline-none focus-visible:border-accent focus-visible:ring-[3px] focus-visible:ring-accent/20 data-[state=open]:border-accent data-[state=open]:ring-[3px] data-[state=open]:ring-accent/20 sm:w-44"
            >
                <Select.Value/>
                <Select.Icon>
                    <ChevronDown size={18} className="text-muted" aria-hidden="true"/>
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    position="popper"
                    sideOffset={6}
                    className="z-50 w-(--radix-select-trigger-width) animate-pop overflow-hidden rounded-[10px] border border-line bg-white p-1 shadow-lg shadow-ink/10 motion-reduce:animate-none"
                >
                    <Select.Viewport>
                        {options.map((option) => (
                            <Select.Item
                                key={option.value}
                                value={option.value}
                                className="relative flex cursor-pointer items-center rounded-lg py-2 pr-8 pl-3 text-[15px] outline-none select-none data-[highlighted]:bg-accent-soft data-[highlighted]:text-accent data-[state=checked]:font-semibold"
                            >
                                <Select.ItemText>{option.label}</Select.ItemText>
                                <Select.ItemIndicator className="absolute right-2.5">
                                    <Check size={16} aria-hidden="true"/>
                                </Select.ItemIndicator>
                            </Select.Item>
                        ))}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};

export default SortSelect;
