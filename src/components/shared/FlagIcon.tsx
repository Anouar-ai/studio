
'use client';

import { Icon, type IconifyIcon } from '@iconify/react';
import { useState, useEffect, memo } from 'react';

const iconCache = new Map<string, IconifyIcon>();
const promiseCache = new Map<string, Promise<any>>();

const useIcon = (countryCode: string) => {
  const normalizedCode = countryCode.toLowerCase();
  const [icon, setIcon] = useState<IconifyIcon | null>(iconCache.get(normalizedCode) || null);

  useEffect(() => {
    if (icon) return;

    let isMounted = true;
    const promise = promiseCache.get(normalizedCode) || import(`@iconify-icons/circle-flags/${normalizedCode}.js`);
    if (!promiseCache.has(normalizedCode)) {
        promiseCache.set(normalizedCode, promise);
    }
    
    promise.then(module => {
      if (isMounted) {
        const loadedIcon = module.default;
        iconCache.set(normalizedCode, loadedIcon);
        setIcon(loadedIcon);
      }
    }).catch(console.error);

    return () => {
      isMounted = false;
    };
  }, [normalizedCode, icon]);

  return icon;
};

interface FlagIconComponentProps {
    countryCode: string;
    countryName: string;
    className?: string;
}

const FlagIconComponent = ({ countryCode, countryName, className }: FlagIconComponentProps) => {
  const icon = useIcon(countryCode);

  if (!icon) {
    return <div 
        className={className} 
        style={{ width: '1.25rem', height: '1.25rem', borderRadius: '50%', backgroundColor: 'hsl(var(--muted))' }}
        role="img"
        aria-label={`Flag of ${countryName}`} 
    />;
  }

  return <Icon icon={icon} className={className} aria-label={`Flag of ${countryName}`} />;
};

export const FlagIcon = memo(FlagIconComponent);
