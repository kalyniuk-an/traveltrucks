import type { IconType } from 'react-icons';
import css from './Badge.module.css';

interface BadgeProps{
  label: string;
  icon?: IconType;
}

export default function Badge({ label, icon: Icon }: BadgeProps) {
  return (
    <span className={css.badge}>
      {Icon && <Icon className={css.icon} aria-hidden="true" />}
      {label}
    </span>
  );
}