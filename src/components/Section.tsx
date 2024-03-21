import { cx } from '../utils';

export type SectionProps = {
  title?: string;
  padding?: boolean;
  divider?: boolean;
  children?: React.ReactNode;
};

export default function Section({
  title,
  padding = true,
  divider = false,
  children,
}: SectionProps) {
  return (
    <div
      className={cx('space-y-2', {
        'px-6 a4:px-12': padding,
      })}
    >
      {title && <h2 className="text-lg a4:text-xl font-bold mt-4">{title}</h2>}
      {children}
      {divider && <hr className="border-t border-gray-300" />}
    </div>
  );
}
