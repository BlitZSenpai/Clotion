"use client";

import { Doc } from "@/convex/_generated/dataModel";

interface PublishProps {
	initialData: Doc<"documents">;
}

export const Publish = ({ initialData }: PublishProps) => {
	return (
		<div>
			<div>Publish</div>
		</div>
	);
};
