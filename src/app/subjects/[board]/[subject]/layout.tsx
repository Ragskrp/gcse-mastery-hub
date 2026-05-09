import { Metadata } from "next";
import { SUBJECTS } from "@/lib/constants";

type Props = {
  params: Promise<{ board: string; subject: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { board, subject: subjectId } = await params;
  const subject = SUBJECTS.find(
    (s) => s.id === subjectId.replace(/-/g, "_") && s.board === board
  );

  if (!subject) {
    return {
      title: "Subject Not Found",
    };
  }

  const title = `${subject.name} (${board.toUpperCase()})`;
  const description = `Master ${subject.name} for GCSE ${board.toUpperCase()}. Complete coverage of Year 10 topics with lessons, quizzes and exam practice.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default function SubjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
