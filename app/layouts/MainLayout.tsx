import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { LeftMenu } from '../components/LeftMenu';
import { SideComments } from '../components/SideComments/page';

interface MainLayoutProps {
  hideComments?: boolean;
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  hideMenu,
  className,
}) => {
  return (
    <div className={clsx('wrapper', className)}>
      {!hideMenu && (
        <div className="leftSide">
          <LeftMenu />
        </div>
      )}
      <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
      {!hideComments && (
        <div className="rightSide">
          <SideComments />
        </div>
      )}
    </div>
  );
};
