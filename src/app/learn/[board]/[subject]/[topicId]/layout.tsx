import { Metadata } from "next";
import { TOPIC_MANIFEST } from "@/lib/content";

type Props = {
  params: Promise<{ board: string; subject: string; topicId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topicId } = await params;
  const topic = TOPIC_MANIFEST.find((t) => t.id === topicId);

  if (!topic) {
    return {
      title: "Topic Not Found",
    };
  }

  const title = `${topic.topic_title} - ${topic.subject.replace(/_/g, " ").toUpperCase()}`;
  const description = `Comprehensive revision for ${topic.topic_title} (${topic.exam_board.toUpperCase()}). Includes key concepts, worked examples, practice questions and exam guidance.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default function TopicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
