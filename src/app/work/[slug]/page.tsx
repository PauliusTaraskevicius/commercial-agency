import { DUMMY_DATA } from "@/dummy-data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const getItemData = (slug: string) => {
    const res = DUMMY_DATA.find((item) => item.slug === slug);
    return res;
  };

  const itemData = getItemData(slug);

  if (!itemData) {
    notFound();
  }

  return <div className="bg-blue-500">{itemData?.title}</div>;
};

export default Page;
