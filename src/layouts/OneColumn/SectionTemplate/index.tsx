import * as React from "react";

interface SectionTemplateProps {
  title: string;
  children: React.ReactNode;
  classNames?: string;
}

const SectionTemplate: React.FC<SectionTemplateProps> = ({
  title,
  children,
  classNames = "",
  ...props
}) => {
  return (
    <section className={`mt-2 ${classNames}`}>
      {title && <h2 className="-mb-4 text-lg font-medium">{title}</h2>}
      {children}
    </section>
  );
};

export default SectionTemplate;
