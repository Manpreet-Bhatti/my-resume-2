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
    <section className={`mt-2 ${classNames}`} {...props}>
      {title && (
        <h2 className="-mb-2 text-lg font-medium dark:text-dark-text">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default SectionTemplate;
