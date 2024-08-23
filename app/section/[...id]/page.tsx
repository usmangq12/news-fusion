"use client";
import React from "react";
import { Details } from "@/app/components/home/Details";

const getJoinedId = (id: string[]) => {
  const list = id?.join(", ");
  return list.replace(/, /g, "/");
};

type Props = {
  params: { id: string[] };
  searchParams: { source: string };
};

const SectionTypeDetailsPage = async ({ params, searchParams }: Props) => {
  const id = getJoinedId(params?.id);
  return <Details id={id} source={searchParams?.source} />;
};

export default SectionTypeDetailsPage;
