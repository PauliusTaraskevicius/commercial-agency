interface WorkItemProps {
  title: string;
  about: string;
  time: string;
  onMouseOver?: () => void;
}

export const WorkItem = ({ about, title, onMouseOver }: WorkItemProps) => {
  return (
    <div
      key={title}
      className="flex flex-col justify-center *:uppercase"
      onMouseOver={onMouseOver}
    >
      <div className="z-20 h-9 uppercase">
        <h2 className="hover:text-background text-background/50 cursor-pointer whitespace-nowrap">
          {title}
        </h2>
        <span className="hover:text-background text-background/50 cursor-pointer whitespace-nowrap">
          [ {about} ]
        </span>
      </div>
    </div>
  );
};
