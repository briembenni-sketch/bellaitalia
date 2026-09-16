import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationPage from "../../components/DestinationPage";
import { cityDestinations } from "../../data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return cityDestinations.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const d = cityDestinations.find((x) => x.slug === slug);
  if (!d) return {};
  return {
    title: `${d.title} – skoðunarferðir & skipulagning | Bella Italia`,
    description: d.lead,
    openGraph: { images: [{ url: d.image, alt: d.imageAlt }] },
  };
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const d = cityDestinations.find((x) => x.slug === slug);
  if (!d) notFound();
  return <DestinationPage destination={d} />;
}
