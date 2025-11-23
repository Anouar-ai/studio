
'use client';

import { Icon, type IconifyIcon } from '@iconify/react';
import { Suspense, lazy, memo } from 'react';

const iconCache = new Map<string, Promise<{ default: IconifyIcon }>>();

const loadIcon = (countryCode: string) => {
  const normalizedCode = countryCode.toLowerCase();
  if (!iconCache.has(normalizedCode)) {
    iconCache.set(normalizedCode, import(`@iconify-icons/circle-flags/${normalizedCode}.js`));
  }
  return iconCache.get(normalizedCode)!;
};

const LazyIcon = lazy(async () => {
  // This is a dummy export that will be replaced by the specific icon
  // The important part is that this lazy component resolves an icon
  return { default: (props: { icon: IconifyIcon, className?: string }) => <Icon {...props} /> };
});

const FlagIconComponent = ({ countryCode, className }: { countryCode: string; className?: string }) => {
  const iconPromise = loadIcon(countryCode);

  return (
    <Suspense fallback={<div className={className} style={{ width: '1.25rem', height: '1.25rem', borderRadius: '50%', backgroundColor: 'hsl(var(--muted))' }} />}>
      <IconResolver iconPromise={iconPromise} className={className} />
    </Suspense>
  );
};

const IconResolver = ({ iconPromise, className }: { iconPromise: Promise<{ default: IconifyIcon }>, className?: string }) => {
  // This component will re-render once the promise resolves
  // We use a bit of a trick with `lazy` to make this work
  const LazyLoadedIcon = lazy(() => iconPromise.then(iconModule => ({
      default: () => <Icon icon={iconModule.default} className={className} />
  })));

  return <LazyLoadedIcon />;
};

export const FlagIcon = memo(FlagIconComponent);
