import React from 'react';

interface SectionTitleProps {
  children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  const existingClassName = (children.props as any).className || '';
  return React.cloneElement(children, {
    className:
      existingClassName + ' text-3xl lg:text-5xl lg:leading-tight font-bold',
  } as any);
};

export default SectionTitle;
