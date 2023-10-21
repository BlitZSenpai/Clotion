"use client";

import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useOrigin } from "@/hooks/use-origin";
import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

interface PublishProps {
	initialData: Doc<"documents">;
}

export const Publish = ({ initialData }: PublishProps) => {
	const origin = useOrigin();
	const update = useMutation(api.documents.updateDocument);
	const [copied, setCopied] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const url = `${origin}/preview/${initialData._id}`;

	const onPublish = () => {
		setIsSubmitting(true);

		const promise = update({
			id: initialData._id,
			isPublished: true,
		}).finally(() => setIsSubmitting(false));

		toast.promise(promise, {
			loading: "Publishing...",
			success: "Note published!",
			error: "Failed to publish note.",
		});
	};

	const onUnPublish = () => {
		setIsSubmitting(true);

		const promise = update({
			id: initialData._id,
			isPublished: false,
		}).finally(() => setIsSubmitting(false));

		toast.promise(promise, {
			loading: "Unpublishing...",
			success: "Note unpublished!",
			error: "Failed to unpublish note.",
		});
	};

	const onCopy = () => {
		navigator.clipboard.writeText(url);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};

	return (
		<div>
			<div>Publish</div>
		</div>
	);
};
