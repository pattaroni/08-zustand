import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchSingleNote } from "@/lib/api";
import NoteDetailsClient from "./NoteDetails.client";
import { notFound } from "next/navigation";

type NotDetailsProps = {
  params: Promise<{ id: string }>;
};

async function NoteDetails({ params }: NotDetailsProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  if (id === "action" || id === "filter") notFound();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchSingleNote(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}

export default NoteDetails;
