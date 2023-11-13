'use client';

import { formatPrice } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface CurrencyProps {
  value?: string | number;
}

const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className='font-semibold'>{formatPrice.format(Number(value))}</div>
  );
};

export default Currency;
